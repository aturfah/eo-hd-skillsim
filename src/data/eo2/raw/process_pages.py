from helpers import OUTPUT_DIR, CLASSES
from pprint import pprint
from bs4 import BeautifulSoup
import json

def requirements_li(tag):
    return tag.name == 'li' and 'Requirements' in tag.text

def body_part_li(tag):
    return tag.name == 'li' and 'Body parts' in tag.text

def map_name_id(skill_name):
    return skill_name.strip().lower().replace(" ", "_")

def output_js(data, filename, var_name):
    new_file_data = """// AUTOMATICALLY GENERATED FILE; DO NOT MODIFY!;
    var {variable} = {data};
    export default {variable};
    """
    data = json.dumps(data, indent=2)

    with open(filename, 'w') as nf:
        nf.write(new_file_data.format(variable=var_name,
                                      data=data))


BASE_FILENAME = "{}.html"
COMMON_SKILLS = []

if __name__ == "__main__":
    prereq_data_output = []
    class_skill_data_output = []
    for class_id in CLASSES:
        file_path = OUTPUT_DIR.joinpath(BASE_FILENAME.format(class_id))
        
        bs_file = BeautifulSoup(file_path.read_text(), features="html.parser")
        bs_file = bs_file.find('div', {'id': 'faqwrap'})

        ## Remove the Table of Contents
        [s.clear() for s in bs_file('div', {"class": 'ftoc'})]

        ## Get the Class Name
        class_name = [s for s in bs_file("h2")][0].text
        class_obj = {
            "source": None,
            "class": class_name,
            "branches": [{
                "branch_name": class_name,
                "skill_data": []
            }]
        }
        class_prereqs = {}

        ## Get the skills; demarked by <h3>
        str_data = str(bs_file)
        data_arr = str_data.split("<h3>")[1:]
        for datum in data_arr:
            datum = "<h3>{}".format(datum)
            ## Can do this with beautifulsoup
            soup_datum = BeautifulSoup(datum, features="html.parser")
            skill_name = soup_datum.find("h3").text
            skill_id = map_name_id(skill_name)
            skill_details = soup_datum.find_all("li")
            skill_description = soup_datum.find("p").text
            skill_table = soup_datum.find("table", {"class": "ffaq"})

            ## Parse out Force Skill
            force_skill = False
            if "Force Skill:" in skill_name:
                force_skill = True
                skill_name = skill_name.replace("Force Skill:", "").strip()

            ## Parse out prerequisite skills
            raw_skill_prereqs = [x.text for x in skill_details if requirements_li(x)]
            prereqs = {}
            if raw_skill_prereqs:
                raw_skill_prereqs = raw_skill_prereqs[0]
                raw_skill_prereqs = raw_skill_prereqs.replace("Requirements: ", "").strip()
                if raw_skill_prereqs != "None":
                    raw_skill_prereqs = raw_skill_prereqs.split(", ")
                    for rsprq in raw_skill_prereqs:
                        name, level = rsprq.lower().split(" level ")
                        prereqs[map_name_id(name)] = int(level)
            prereq_list = [{"_id": x, "level": prereqs[x]} for x in prereqs.keys()]
            class_prereqs[skill_id] = prereq_list

            ## Parse out the body part
            raw_skill_uses = [x.text for x in skill_details if body_part_li(x)]
            skill_uses = "N/A"
            if raw_skill_uses:
                raw_skill_uses = raw_skill_uses[0]
                skill_uses = raw_skill_uses.split(":")[1].strip()

            ## Parse out skill table
            growth = {}
            growth_order = []
            max_level = 0

            if skill_table:
                for table_row in skill_table.find_all("tr"):
                    max_level = 0
                    row_tag = None
                    for table_cell in table_row.find_all(["th", "td"]):
                        if row_tag is None:
                            temp = table_cell.text.strip()
                            if temp == "Level":
                                break

                            row_tag = temp
                            growth_order.append(row_tag)
                            growth[row_tag] = []
                            continue

                        levelspan = table_cell.get("colspan", "1")
                        max_level += int(levelspan)
                        growth[row_tag].append({"levelspan": levelspan, "value": table_cell.text})


            ## Start putting stuff into the objects
            if True == False:
                print(skill_name)
                print("Force Skill:", force_skill)
                print(skill_description)
                print("Skill Uses:", skill_uses)
                print("Prereqs:")
                print("\tRaw:", raw_skill_prereqs)
                print("\tProcessed:", prereqs)
                print("", end="\n\n")

            skill_output = {
                "force_boost": False,
                "force_break": False,
                "force_skill": force_skill,
                "transform_only": False,
                "mastery": False,
                "linked_skill": None,
                "no_level": False,
                "_id": skill_id,
                "name": skill_name,
                "description": skill_description,
                "max_level": max_level, ## TODO: Parse this out
                "uses": skill_uses,
                "class_skill": False,
                "prerequisites": prereq_list,
                "growth_order": growth_order,
                "growth": growth
            }

            class_obj["branches"][0]["skill_data"].append(skill_output)


        class_skill_data_output.append(class_obj)
        prereq_data_output.append(class_prereqs)

    output_js(class_skill_data_output, "skill_data.js", "skillData")
    output_js(prereq_data_output, "prereq_data.js", "prereqData")