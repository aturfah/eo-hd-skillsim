import json
from pprint import pprint
from copy import deepcopy

from parse_raw_skill_data import output_js

def recover_list_from_json(filename:str):
    with open(filename, 'r') as in_file:
        raw_lines = in_file.readlines()

    json_str = "["
    for line in raw_lines:
        line = line.strip()
        if line.startswith("//") or line.startswith("var") or line.startswith("export") or line.startswith("];"):
            continue

        json_str = "{}\n{}".format(json_str, line)
    
    json_str = json_str + "\n]"
    return json.loads(json_str)

if __name__ == "__main__":
    edited_skill_data = recover_list_from_json('skill_data_WITH_EDITS.js')
    pre_skill_data = recover_list_from_json('pre_skill_data.js')

    ## Now we combine these lists
    new_skill_data = deepcopy(edited_skill_data)

    for class_idx in range(len(edited_skill_data)):
        BRANCH_KEY = 'branches'
        class_branches = edited_skill_data[class_idx][BRANCH_KEY]
        for branch_idx in range(len(class_branches)):
            SKILLS_KEY = 'skill_data'
            branch_skill_data = class_branches[branch_idx][SKILLS_KEY]
            for skill_datum_idx in range(len(branch_skill_data)):
                new_skill_datum = new_skill_data[class_idx][BRANCH_KEY][branch_idx][SKILLS_KEY][skill_datum_idx]
                pre_skill_datum = pre_skill_data[class_idx][BRANCH_KEY][branch_idx][SKILLS_KEY][skill_datum_idx]
                new_skill_datum['growth_order'] = pre_skill_datum['growth_order']
                new_skill_datum['growth'] = pre_skill_datum['growth']

    output_js(new_skill_data, 'skill_data.js', 'skillData')