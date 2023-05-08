from collections import defaultdict
from pprint import pprint
import json

LINKED_SKILLS = {
    "Call Elephant": ["Reckless Rush"],
    "Call Cow": ["Bull Run"],
    "Call Bird": ["Bind Feather"],
    "Call Snake": ["Wind Wrap"],
    "Call Mole": ["Scratch"],
    "Call Insect": ["Poison Dust"],
    "Call Owl": ["Sleep Powder"],
    "Call Tiger": ["Death Fang", "Fierce Counter"],
    "Call Lion": ["Regal Authority"],
    "Call Ooze": ["Plague Gunk"],
    "Red Bot": ["Red Module"],
    "Blue Bot": ["Blue Module"],
    "Yellow Bot": ["Yellow Module"],
    "Strange Seeds": ["Strange Seed"],
    "Shoot": ["Fire All"]
}

def generate_skill_output(skill_datum:dict, linked_skill_id:str=None) -> dict:
    ## Flags from EO2U skillsim so code can stay mostly the same
    skill_output = {
        "force_boost": False,
        "force_break": False,
        "transform_only": False,
        "mastery": False,
        "linked_skill": None,
        "no_level": False
    }

    ## Misc Skill Info
    skill_output["_id"] = skill_datum["_id"]
    skill_output["name"] = skill_datum["name"]
    skill_output["description"] = skill_datum.get("details", "")
    skill_output["max_level"] = int(skill_datum["max_level"])
    skill_output["uses"] = skill_datum.get("uses", "N/A")

    ## Prerequisites
    skill_prereqs = []
    for prereq_name in skill_datum.get("prerequisites", {}):
        prereq_id = parsed_skills[prereq_name]["_id"]
        skill_prereqs.append({
            "_id": prereq_id,
            "level": skill_datum["prerequisites"][prereq_name]
        })

    skill_output["prerequisites"] = skill_prereqs

    ## Skill Level Info
    skill_output["levels"] = [{"label": "Level", "width": "20%"}]
    for lvl in range(1, 1 + skill_output["max_level"]):
        skill_output["levels"].append({"label": lvl, "width": "8%"})


    skill_output["growth_order"] = []
    skill_output["growth"] = defaultdict(list)

    for attrib_info in skill_datum["data"]:
        skill_output["growth_order"].append(attrib_info["attribute"])
        skill_output["growth"][attrib_info["attribute"]].extend([{
            "levelspan": 1,
            "value": x
        } for x in attrib_info["levels"]])

    skill_output["growth"] = dict(skill_output["growth"])

    ## For linked skills
    if linked_skill_id is not None:
        skill_output["linked_skill"] = linked_skill_id
        skill_output["no_level"] = True
        skill_output["prerequisites"] = [{"_id": linked_skill_id, "level": 1}]

    return skill_output

def output_js(data, filename, var_name):
    new_file_data = """// AUTOMATICALLY GENERATED FILE; DO NOT MODIFY!;
    var {variable} = {data};
    export default {variable};
    """
    data = json.dumps(data, indent=2)

    with open(filename, 'w') as nf:
        nf.write(new_file_data.format(variable=var_name,
                                      data=data))


if __name__ == "__main__":
    with open("EO3 Skill Data - Skills.csv", "r") as in_file:
      raw_skill_rows = in_file.readlines()

    with open("subheaders.json", "r") as in_file:
        skill_subheaders = json.load(in_file)

    raw_skill_rows = [x.strip().split(",") for x in raw_skill_rows]
    
    ## Parse Shiri's skill file
    parsed_skills = {}
    for skill_datum in raw_skill_rows:
        name = skill_datum[0]
        if not name or name.startswith("--"):
            continue

        max_level = skill_datum[1]
        offset = 24
        max_len = len(skill_datum)

        skill_data_levels = []
        while offset + 11 < max_len:
           header_idx = offset + 1
           values_range = [x for x in range((header_idx+1), (header_idx+11))]
           
           subheader = skill_datum[header_idx]
           if subheader not in ["0", "77", "59", "52", "136", "135", "113", "128", "107", "106", "158"]:
                """
                0 - Empty
                77 - Skill Link (ID)
                59 - Unknown59
                52 - Valid kill target
                136 - Use Weapon Animation/Sound
                135 - Cannot Repeat
                113 - Weapon Type
                128 - Link on Ally Hit
                107 - Link on Summon
                106 - Beast to summon
                158 - Normal Death Anim
                """
                try:
                    skill_data_levels.append({
                        "subheader_val": subheader,
                        "attribute": skill_subheaders[str(subheader)],
                        "levels": [skill_datum[x] for x in values_range]
                    })
                except KeyError as exc:
                    print(name, subheader)
                    raise exc

           offset = offset + 11


        if name not in parsed_skills.keys():
            parsed_skills[name] = {
                "name": name,
                "max_level": max_level,
                "data": skill_data_levels
            }
        else:
           parsed_skills[name]["data"].extend(skill_data_levels)

    ## Now we get the old skillsim data to match our skillsim data
    with open("skills.json", "r", encoding="utf8") as in_file:
        old_class_skills = json.load(in_file)
    
    with open("levels.json", "r", encoding="utf8") as in_file:
        old_skill_levels = json.load(in_file)

    ## Build maps from skill IDs to the English Names
    old_key_name_map = {}
    class_skill_map = defaultdict(list)
    for class_key in old_class_skills:
       for skill_key in old_class_skills[class_key]:
            skill_datum = old_class_skills[class_key][skill_key]
            eng_name = skill_datum["name_en"]
            matches = eng_name in parsed_skills.keys()
            class_skill_map[class_key].append(eng_name)

            old_key_name_map[skill_key] = eng_name
            parsed_skills[eng_name]["skillsim_data"] = skill_datum

            if not matches:
                err_msg = "'{key}' does not match with name '{name_en}'".format(key=skill_key, name_en=eng_name)
                raise ValueError(err_msg)              

    ## Pull out info from skillsim data
    for skill_name in parsed_skills.keys():
        parsed_skills[skill_name]["_id"] = str(skill_name).lower().replace(" ", "_")
        skill_datum = parsed_skills[skill_name].get("skillsim_data")
        if skill_datum is None:
            continue

        parsed_skills[skill_name]["passive"] = not skill_datum["active"]
        parsed_skills[skill_name]["uses"] = skill_datum["requires"]
        parsed_skills[skill_name]["details"] = skill_datum["details"]
        skill_deps = skill_datum.get("dep", {})
        parsed_skills[skill_name]["prerequisites"] = {old_key_name_map[x]: skill_deps[x] for x in skill_deps.keys()}

    
    ## OK Now we put it all together
    class_skill_data_output = []
    prereq_data_output = []
    default_skill_data = {}
    for class_name in class_skill_map.keys():
        class_obj = {
            "source": None,
            "class": class_name,
            "branches": [{
                "branch_name": class_name,
                "skill_data": []
            }]
        }

        class_skills = class_skill_map[class_name]
        for skill_name in class_skills:
            skill_datum = parsed_skills[skill_name]

            skill_output = generate_skill_output(skill_datum)
            class_obj["branches"][0]["skill_data"].append(skill_output)

            if skill_name in LINKED_SKILLS:
                for linked_skill in LINKED_SKILLS[skill_name]:
                    class_obj["branches"][0]["skill_data"].append(generate_skill_output(
                        parsed_skills[linked_skill],
                        skill_output["_id"]
                    ))

            prereq_data_output.append({
                skill_output["_id"]: skill_output["prerequisites"]
            })

        if class_name == "Default":
            default_skill_data = class_obj
        else:
            class_skill_data_output.append(class_obj)

    output_js(default_skill_data, "common_skills.js", "commonSkills")
    output_js(class_skill_data_output, 'skill_data.js', 'skillData')
    output_js(prereq_data_output, "prereq_data.js", "prereqData")