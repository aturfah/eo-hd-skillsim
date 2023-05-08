if __name__ == "__main__":
    with open("EO3 Skill Data - Skills.csv", "r") as in_file:
      raw_skill_rows = in_file.readlines()
    
    raw_skill_rows = [x.strip().split(",") for x in raw_skill_rows]
    
    parsed_skills = []
    for skill_datum in raw_skill_rows:
        # print(skill_datum, end="\n\n")
        name = skill_datum[0]
        max_level = skill_datum[1]
        offset = 24
        max_len = len(skill_datum)

        if name != "Royal Veil":
           continue

        while offset + 11 < max_len:
           header_idx = offset + 1
           values_range = [x for x in range((header_idx+1), (header_idx+11))]
           print(skill_datum[header_idx],
                 [skill_datum[x] for x in values_range])
           offset = offset + 11

        # print(name, max_level, skill_datum[offset + 1], )
        # print(max_len, offset, max_len - offset)
        raise RuntimeError("AAAHH")
