from helpers import OUTPUT_DIR, CLASSES
from pprint import pprint
from bs4 import BeautifulSoup

def requirements_li(tag):
    return tag.name == 'li' and 'Requirements' in tag.text

def map_name_id(skill_name):
    return skill_name.strip().lower().replace(" ", "_")

BASE_FILENAME = "{}.html"
if __name__ == "__main__":
    for class_id in CLASSES:
        print("\n\nCLASS:", class_id)

        class_skills = {}
        file_path = OUTPUT_DIR.joinpath(BASE_FILENAME.format(class_id))
        
        bs_file = BeautifulSoup(file_path.read_text(), features="html.parser")
        bs_file = bs_file.find('div', {'id': 'faqwrap'})


        ## Remove the Table of Contents
        [s.clear() for s in bs_file('div', {"class": 'ftoc'})]

        ## Get the Class Name
        class_name = [s for s in bs_file("h2")][0].text

        ## Get the skills; demarked by <h3>
        str_data = str(bs_file)
        data_arr = str_data.split("<h3>")[1:]

        for datum in data_arr:
            datum = "<h3>{}".format(datum)
            ## Can do this with beautifulsoup
            soup_datum = BeautifulSoup(datum, features="html.parser")
            skill_name = soup_datum.find("h3").text
            skill_details = soup_datum.find_all("li")
            skill_description = soup_datum.find("p").text
            skill_table = soup_datum.find("table", {"class": "ffaq"})

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

            ## Parse out the body part
            raw_skill_uses = [x.text for x in skill_details if not requirements_li(x)]
            skill_uses = "N/A"
            if raw_skill_uses:
                raw_skill_uses = raw_skill_uses[0]
                skill_uses = raw_skill_uses.split(":")[1].strip()

            print(skill_name)
            print(skill_description)
            print("Skill Uses:", skill_uses)
            print("Prereqs:")
            print("\tRaw:", raw_skill_prereqs)
            print("\tProcessed:", prereqs)
            print("", end="\n\n")
