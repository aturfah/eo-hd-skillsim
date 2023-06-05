python parse_raw_skill_data.py
python consolidate_skill_data.py

Move-Item skill_data.js "../skill_data.js" -Force
Move-Item prereq_data.js "../prereq_data.js" -Force
Move-Item common_skills.js "../common_skills.js" -Force
Remove-Item pre_skill_data.js