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



if __name__ == "__main__":
    with open("EO3 Skill Data - Skills.csv", "r") as in_file:
      raw_skill_rows = in_file.readlines()

    with open("subheaders.json", "r") as in_file:
        skill_subheaders = json.load(in_file)

    raw_skill_rows = [x.strip().split(",") for x in raw_skill_rows]
    
    ## Parse Shiri's skill file
    parsed_skills = {}
    for skill_datum in raw_skill_rows:
        if len(skill_datum) == 1:
            continue

        # print(skill_datum, end="\n\n")
        name = skill_datum[0]

        max_level = skill_datum[1]
        offset = 24
        max_len = len(skill_datum)

        skill_data_levels = []
        while offset + 11 < max_len:
           header_idx = offset + 1
           values_range = [x for x in range((header_idx+1), (header_idx+11))]
           
           subheader = skill_datum[header_idx]
           if subheader not in ["0", "77", "59", "52", "136", "135", "113", "128"]:
                """
                0 - Empty
                77 - Skill Link (ID)
                59 - Unknown59
                52 - Valid kill target
                136 - Use Weapon Animation/Sound
                135 - Cannot Repeat
                113 - Weapon Type
                128 - Link on Ally Hit
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

    # ## Match linked skills
    # for skill_name in LINKED_SKILLS.keys():
    #     for linked_skill_name in LINKED_SKILLS[skill_name]:
    #         parsed_skills[skill_name]["data"].extend(
    #             parsed_skills[linked_skill_name]["data"]
    #         )
    #         del parsed_skills[linked_skill_name]


    # pprint(parsed_skills["Call Elephant"])
    # raise RuntimeError("AAAHH")

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
        skill_datum = parsed_skills[skill_name].get("skillsim_data")
        if skill_datum is None:
            print(skill_name)
            continue

        parsed_skills[skill_name]["passive"] = not skill_datum["active"]
        parsed_skills[skill_name]["uses"] = skill_datum["requires"]
        parsed_skills[skill_name]["details"] = skill_datum["details"]
        
    pprint(parsed_skills["Infect"])
    

    # pprint(old_class_skills)
    # print("\n\n")
    # pprint(old_skill_levels)
