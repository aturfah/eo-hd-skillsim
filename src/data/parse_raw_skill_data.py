from pprint import pprint
import json

if __name__ == "__main__":
    with open("EO3 Skill Data - Skills.csv", "r") as in_file:
      raw_skill_rows = in_file.readlines()
    
    raw_skill_rows = [x.strip().split(",") for x in raw_skill_rows]
    
    ## Parse Shiri's skill file
    parsed_skills = {}
    for skill_datum in raw_skill_rows:
        # print(skill_datum, end="\n\n")
        name = skill_datum[0]
        max_level = skill_datum[1]
        offset = 24
        max_len = len(skill_datum)

        skill_data_levels = []
        while offset + 11 < max_len:
           header_idx = offset + 1
           values_range = [x for x in range((header_idx+1), (header_idx+11))]
           
           
           skill_data_levels.append({
              "header": header_idx,
              "levels": [skill_datum[x] for x in values_range]
           })
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

    old_key_name_map = {}
    for class_key in old_class_skills:
       for skill_key in old_class_skills[class_key]:
            skill_datum = old_class_skills[class_key][skill_key]
            eng_name = skill_datum["name_en"]
            matches = eng_name in parsed_skills.keys()

            old_key_name_map[skill_key] = skill_datum["name_en"]

        

            if not matches:
                print(skill_key, eng_name, matches)

    X = {}
    

    # pprint(old_class_skills)
    # print("\n\n")
    # pprint(old_skill_levels)
