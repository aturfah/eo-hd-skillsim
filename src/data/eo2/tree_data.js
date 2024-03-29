const treeData = [
    // Landsknecht
    [
        {
            skillID: 'swords',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 6
        },
        {
            skillID: 'cleaver',
            coords: {x: 1, y: 0},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'tornado',
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'allslash',
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'hypercut',
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1
        },
        {
            skillID: 'agi_up',
            coords: {x: 2, y: 3},
            numBefore: 1,
            preReqLevels: ["(Lv.1)"]
        },
        {
            skillID: 'riskcut',
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [7]
        },
        {
            skillID: 'axes',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 5
        },
        {
            skillID: 'deathaxe',
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'silencer',
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'lifeaxe',
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'brawn',
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1
        },
        {
            skillID: 'str_up',
            coords: {x: 2, y: 9},
            numBefore: 1,
            preReqLevels: ["(Lv.1)"],
            numAfter: 1,
            postReqLevels: [1]
        },
        {
            skillID: 'stunner',
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [7]
        },
        {
            skillID: 'war_cry',
            coords: {x: 3, y: 9},
            numBefore: 1,
        },
        // The Joint Tree
        {
            skillID: undefined,
            coords: {x: 1, y: 5},
            numBefore: 2,
            numAfter: 1,
        },
        {
            skillID: 'blazer',
            coords: {x: 2, y: 4},
            numBefore: 5,
            preReqLevels: [5]
        },
        {
            skillID: 'freezer',
            coords: {x: 2, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'shocker',
            coords: {x: 2, y: 6},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: '(l)_2-hit',
            coords: {x: 2, y: 7},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'counter',
            coords: {x: 2, y: 8},
            numBefore: 1,
            preReqLevels: [8]
        },
        // Rest of the skills
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 11}
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 12}
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 13}
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 0, y: 14}
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 15}
        },
        {
            skillID: 'unbound',
            baseSkill: false,
            coords: {x: 1, y: 11}
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 11}
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 2, y: 12}
        },
    ],
    // Survivalist
    [
        {
            skillID: 'bows',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 6
        },
        {
            skillID: 'trueshot',
            baseSkill: false,
            coords: {x: 1, y: 0},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'sleeper',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
        },
        {
            skillID: 'number',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
        },
        {
            skillID: 'poisoner',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 2, y: 2},
            numBefore: 3,
            preReqLevels: ["(Lv.3)"],
            beforeStyle: 'centered',
        },
        {
            skillID: '2-bolt',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'apollon',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'agi_up',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 4
        },
        {
            skillID: 'velocity',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'slowstep',
            baseSkill: false,
            coords: {x: 2, y: 6},
            numBefore: 1,
            numAfter: 2,
            postReqLevels: [1]
        },
        {
            skillID: '1st_turn',
            baseSkill: false,
            coords: {x: 2, y: 7},
            numAfter: 1,
        },
        {
            skillID: 'baitstep',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 3,
            preReqLevels: [1],
        },
        {
            skillID: 'ambush',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'sagacity',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: '1st_hit',
            baseSkill: false,
            coords: {x: 2, y: 8},
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 10}
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 11}
        },
        {
            skillID: 'str_up',
            baseSkill: false,
            coords: {x: 0, y: 12}
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 13}
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 14}
        },
        {
            skillID: '(s)_patrol',
            baseSkill: false,
            coords: {x: 1, y: 10}
        },
        {
            skillID: 'stalker',
            baseSkill: false,
            coords: {x: 1, y: 11}
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 10}
        },
        {
            skillID: 'foesense',
            baseSkill: false,
            coords: {x: 2, y: 11}
        },
        {
            skillID: 'take',
            baseSkill: false,
            coords: {x: 2, y: 12}
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 2, y: 13}
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 2, y: 14}
        },
    ],
    // Protector
    [
        {
            skillID: 'shields',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 9
        },
        {
            skillID: 'front_guard',
            coords: {x: 1, y: 0},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'rear_guard',
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'full_guard',
            coords: {x: 2, y: 0},
            numBefore: 2
        },
        {
            skillID: 'fire_wall',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'ice_wall',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'volt_wall',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'en_garde',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: '1_guard',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [7]
        },
        {
            skillID: 'smite',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: [10]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1
        },
        {
            skillID: 'mana_wall',
            baseSkill: false,
            coords: {x: 2, y: 8},
            numBefore: 2,
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 2,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1
        },
        {
            skillID: '(p)_refresh',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numAfter: 2,
        },
        {
            skillID: 'hp_regen',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1
        },
        {
            skillID: 'riskwall',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'aegis',
            baseSkill: false,
            coords: {x: 2, y: 11},
            numBefore: 2,
            preReqLevels: [5]
        },
        {
            skillID: 'provoke',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'parry',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 1
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 1,
            postReqLevels: [1]
        },
        {
            skillID: 'fortify',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 15}
        },
        {
            skillID: 'str_up',
            baseSkill: false,
            coords: {x: 0, y: 16}
        },
        {
            skillID: 'agi_up',
            baseSkill: false,
            coords: {x: 0, y: 17}
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 18}
        },
        {
            skillID: 'flee',
            baseSkill: false,
            coords: {x: 1, y: 15}
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 15}
        },
        {
            skillID: 'mine',
            baseSkill: false,
            coords: {x: 2, y: 16}
        },
        
    ],
    // Dark Hunter
    [
        {
            skillID: 'whips',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 7
        },
        {
            skillID: 'viper',
            baseSkill: false,
            coords: {x: 1, y: 0},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'shackles',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [2]
        },
        {
            skillID: 'cuffs',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'gag',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [4]
        },
        {
            skillID: 'climax',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [6]
        },
        {
            skillID: 'ecstasy',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [8],
            numAfter: 1,
            postReqLevels: ["(Lv.5)"]
        },
        {
            skillID: 'str_up',
            baseSkill: false,
            coords: {x: 2, y: 5},
            numBefore: 1,
        },
        {
            skillID: undefined,
            coords: {x: 1, y: 6},
            numBefore: 1,
            numAfter: 3,
            preReqLevels: [8]
        },
        {
            skillID: 'bait',
            baseSkill: false,
            coords: {x: 2, y: 6},
            numBefore: 1,
        },
        {
            skillID: 'magibait',
            baseSkill: false,
            coords: {x: 2, y: 7},
            numBefore: 1,
        },
        {
            skillID: 'swords',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 6
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [8]
        },
        {
            skillID: 'hypnos',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'nerve',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [2]
        },
        {
            skillID: 'mirage',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'drain',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numBefore: 1,
            preReqLevels: [4]
        },
        {
            skillID: 'petrify',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 1,
            preReqLevels: [6]
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 1,
            postReqLevels: [1]
        },
        {
            skillID: 'unbind',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            numAfter: 2,
            postReqLevels: [3]
        },
        {
            skillID: 'antisick',
            baseSkill: false,
            coords: {x: 2, y: 14},
            numBefore: 1,
        },
        {
            skillID: 'antibind',
            baseSkill: false,
            coords: {x: 2, y: 15},
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 15},
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 16},
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 17},
        },
        {
            skillID: 'agi_up',
            baseSkill: false,
            coords: {x: 0, y: 18},
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 19},
        },
        {
            skillID: 'racket',
            baseSkill: false,
            coords: {x: 1, y: 15},
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 16},
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 2, y: 17},
        },
        
    ],
    // Medic
    [
        {
            skillID: 'healer',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 9
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 0},
            numBefore: 1,
            numAfter: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 2, y: 0},
            numBefore: 1,
            numAfter: 7,
        },
        {
            skillID: 'patch_up',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'cure',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
        },
        {
            skillID: 'salve',
            baseSkill: false,
            coords: {x: 2, y: 2},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReqLevels: ["(Lv.3)"]
        },
        {
            skillID: 'unbind',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'freedom',
            baseSkill: false,
            coords: {x: 2, y: 3},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'refresh',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'purify',
            baseSkill: false,
            coords: {x: 2, y: 4},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'healing',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
        },
        {
            skillID: 'salve_2',
            baseSkill: false,
            coords: {x: 2, y: 5},
            numBefore: 1,
            preReqLevels: [4],
            numAfter: 1,
            postReqLevels: ["(Lv.6)"]
        },
        {
            skillID: 'full_heal',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
        },
        {
            skillID: 'salve_3',
            baseSkill: false,
            coords: {x: 2, y: 6},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: ["(Lv.10)"]
        },
        {
            skillID: 'revive',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
        },
        {
            skillID: 'cpr',
            baseSkill: false,
            coords: {x: 2, y: 7},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'phoenix',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 8},
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 2,
            postReqLevels: [10]
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numAfter: 1,
            postReqLevels: [10]
        },
        {
            skillID: 'tp_regen',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1
        },
        {
            skillID: 'str_up',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numAfter: 2,
            postReqLevels: [10]
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 1,
            postReqLevels: [10]
        },
        {
            skillID: 'caduceus',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1
        },
        {
            skillID: 'agi_up',
            baseSkill: false,
            coords: {x: 0, y: 13},
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 14}
        },
        {
            skillID: 'scavenge',
            baseSkill: false,
            coords: {x: 1, y: 13},
        },
        {
            skillID: 'patrol',
            baseSkill: false,
            coords: {x: 1, y: 14}
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 13},
        },
        {
            skillID: 'take',
            baseSkill: false,
            coords: {x: 2, y: 14}
        },
        
    ],
    // Alchemist
    [
        {
            skillID: 'fire_up',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 2
        },
        {
            skillID: 'fire',
            coords: {x: 1, y: 0},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: undefined,
            coords: {x: 1, y: 1},
            preReqLevels: [5],
            numBefore: 1,
            numAfter: 1,
        },
        {
            skillID: 'flame',
            coords: {x: 2, y: 0},
            numBefore: 2,
        },
        {
            skillID: 'inferno',
            coords: {x: 2, y: 1},
            numBefore: 1,
        },
        {
            skillID: 'ice_up',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numAfter: 2
        },
        {
            skillID: 'ice',
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: undefined,
            coords: {x: 1, y: 3},
            preReqLevels: [5],
            numBefore: 1,
            numAfter: 1,
        },
        {
            skillID: 'freeze',
            coords: {x: 2, y: 2},
            numBefore: 2,
        },
        {
            skillID: 'cocytus',
            coords: {x: 2, y: 3},
            numBefore: 1,
        },
        {
            skillID: 'volt_up',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 2
        },
        {
            skillID: 'volt',
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: undefined,
            coords: {x: 1, y: 5},
            preReqLevels: [5],
            numBefore: 1,
            numAfter: 1,
        },
        {
            skillID: 'thunder',
            coords: {x: 2, y: 4},
            numBefore: 2,
        },
        {
            skillID: 'thor',
            coords: {x: 2, y: 5},
            numBefore: 1,
        },
        {
            skillID: 'str_up',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1
        },
        {
            skillID: 'phys_up',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 3
        },
        {
            skillID: 'blades',
            coords: {x: 2, y: 6},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'gravity',
            coords: {x: 2, y: 7},
            numBefore: 1,
        },
        {
            skillID: 'piercing',
            coords: {x: 2, y: 8},
            numBefore: 1,
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 2
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numAfter: 1
        },
        {
            skillID: 'analysis',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
            numAfter: 2,
            postReqLevels: [10]
        },
        {
            skillID: 'megido',
            baseSkill: false,
            coords: {x: 2, y: 10},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 11},
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 12},
        },
        {
            skillID: 'agi_up',
            baseSkill: false,
            coords: {x: 0, y: 13},
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 14},
        },
        {
            skillID: 'return',
            baseSkill: false,
            coords: {x: 1, y: 11},
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 11},
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 2, y: 12},
        },
    ],
    // Troubadour
    [
        {
            skillID: 'songs',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 11
        },
        {
            skillID: undefined,
            coords: {x: 2, y: 0},
            numBefore: 1,
            preReqLevels: [10],
            beforeSkip: 1,
            numAfter: 11
        },
        {
            skillID: 'bravery',
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'shelter',
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'mercury',
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'stamina',
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'recovery',
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'erasure',
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'nihilo',
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'blaze',
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'frost',
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'shock',
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'ifrit',
            coords: {x: 2, y: 8},
            numBefore: 1,
            numAfter: 1,
        },
        {
            skillID: 'ymir',
            coords: {x: 2, y: 9},
            numBefore: 1,
            numAfter: 1,
        },
        {
            skillID: 'taranis',
            coords: {x: 2, y: 10},
            numBefore: 1,     
            numAfter: 1,       
        },
        {
            skillID: 'health',
            coords: {x: 1, y: 11}
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numAfter: 1,
        },
        {
            skillID: 'divinity',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numBefore: 1,
            preReqLevels: [10]
        },
        // Rest of skills
        {
            skillID: 'hp_up',
            coords: {x: 0, y: 13}
        },
        {
            skillID: 'tp_up',
            coords: {x: 0, y: 14}
        },
        {
            skillID: 'str_up',
            coords: {x: 0, y: 15}
        },
        {
            skillID: 'tec_up',
            coords: {x: 0, y: 16}
        },
        {
            skillID: 'vit_up',
            coords: {x: 0, y: 17}
        },
        {
            skillID: 'agi_up',
            coords: {x: 0, y: 18}
        },
        {
            skillID: 'danger',
            coords: {x: 1, y: 13}
        },
        {
            skillID: 'luring',
            coords: {x: 1, y: 14}
        },
        {
            skillID: 'slumber',
            coords: {x: 1, y: 15}
        },
        {
            skillID: 'esc_up',
            coords: {x: 2, y: 13}
        },
        {
            skillID: 'take',
            coords: {x: 2, y: 14}
        },
    ],
    // Ronin
    [
        {
            skillID: 'overhead',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 4
        },
        {
            skillID: 'zamba',
            coords: {x: 1, y: 0},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'orochi',
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [5],
            postReqLevels: [5],
            numAfter: 2
        },
        {
            skillID: 'kienzan',
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
        },
        {
            skillID: 'midareba',
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 2,
        },
        {
            skillID: 'str_up',
            coords: {x: 0, y: 4},
            numAfter: 2
        },
        {
            skillID: 'dead_law',
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'clarity',
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'seigan',
            coords: {x: 0, y: 6},
            numAfter: 4
        },
        {
            skillID: 'koteuchi',
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'getsuei',
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'raizuki',
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'minakata',
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1
        },
        {
            skillID: 'iai',
            coords: {x: 0, y: 10},
            numAfter: 4,
        },
        {
            skillID: 'kubiuchi',
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'nukechi',
            coords: {x: 1, y: 11},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'hyosetsu',
            coords: {x: 1, y: 12},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'hosoyuki',
            coords: {x: 1, y: 13},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1
        },
        {
            skillID: 'agi_up',
            coords: {x: 0, y: 14},
            numAfter: 2,
            postReqLevels: [8]
        },
        {
            skillID: 'luc_up',
            coords: {x: 0, y: 15},
            numAfter: 1,
            postReqLevels: [8]
        },
        {
            skillID: 'shiraha',
            coords: {x: 1, y: 14},
            numBefore: 1
        },
        {
            skillID: 'hp_up',
            coords: {x: 0, y: 16},
        },
        {
            skillID: 'tp_up',
            coords: {x: 0, y: 17},
        },
        {
            skillID: 'tec_up',
            coords: {x: 0, y: 18},
        },
        {
            skillID: 'vit_up',
            coords: {x: 0, y: 19},
        },
        {
            skillID: 'sayageki',
            coords: {x: 1, y: 16},
        },
        {
            skillID: 'esc_up',
            coords: {x: 2, y: 16},
        },
        {
            skillID: 'mine',
            coords: {x: 2, y: 17},
        },
    ],
    // Hexer
    [
        {
            skillID: 'curses',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 14
        },
        {
            skillID: 'sapping',
            baseSkill: false,
            coords: {x: 1, y: 0},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'frailty',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'leaden',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'blinding',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'poison',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [2]
        },
        {
            skillID: 'torpor',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'cranial',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'abdomen',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'immobile',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'evil_eye',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [4],
            numAfter: 3,
            postReqLevels: [1]
        },
        {
            skillID: 'paralyze',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numBefore: 1,
        },
        {
            skillID: 'betrayal',
            baseSkill: false,
            coords: {x: 2, y: 10},
            numBefore: 1,
        },
        {
            skillID: 'suicide',
            baseSkill: false,
            coords: {x: 2, y: 11},
            numBefore: 1,
        },
        {
            skillID: 'paralysis',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'corrupt',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1,
            preReqLevels: [6]
        },
        {
            skillID: 'revenge',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numBefore: 1,
            preReqLevels: [7]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 1,
            numAfter: 2,
            preReqLevels: [10]
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'scavenge',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'dampen',
            baseSkill: false,
            coords: {x: 2, y: 13},
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 16},
        },
        {
            skillID: 'str_up',
            baseSkill: false,
            coords: {x: 0, y: 17},
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 18},
        },
        {
            skillID: 'agi_up',
            baseSkill: false,
            coords: {x: 0, y: 19},
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 20},
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 16},
        },
        {
            skillID: 'take',
            baseSkill: false,
            coords: {x: 2, y: 17},
        },
    ],
    // Gunner
    [
        {
            skillID: 'guns',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 13
        },
        {
            skillID: undefined,
            coords: {x: 1, y: 0},
            numBefore: 1,
            numAfter: 1
        },
        {
            skillID: undefined,
            coords: {x: 2, y: 0},
            numBefore: 1,
            postReqLevels: [5],
            numAfter: 4
        },
        {
            skillID: "riskfire",
            baseSkill: false,
            coords: {x: 2, y: 1},
            numBefore: 1,
            numAfter: 1
        },
        {
            skillID: "riskice",
            baseSkill: false,
            coords: {x: 2, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1
        },
        {
            skillID: "riskvolt",
            baseSkill: false,
            coords: {x: 2, y: 3},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1
        },
        {
            skillID: "fireshot",
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: "iceshot",
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: "voltshot",
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: "agi_up",
            baseSkill: false,
            coords: {x: 2, y: 5},
            numBefore: 3,
            preReqLevels: ["(Lv.1)"],
            beforeStyle: 'centered'
        },
        {
            skillID: "legshot",
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [2],
            numAfter: 1,
        },
        {
            skillID: "armshot",
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: "headshot",
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [4],
            numAfter: 1,
        },
        {
            skillID: "riskshot",
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: "stunshot",
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: "snipe",
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: "wildshot",
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: [7],
        },
        {
            skillID: "(g)_2-hit",
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: "ricochet",
            baseSkill: false,
            coords: {x: 1, y: 12},
            numBefore: 1,
            preReqLevels: [10],
        },
        {
            skillID: "tec_up",
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 1,
            postReqLevels: [1]
        },
        {
            skillID: "medishot",
            baseSkill: false,
            coords: {x: 1, y: 13},
            numBefore: 1,
        },
        {
            skillID: "hp_up",
            baseSkill: false,
            coords: {x: 0, y: 14},
        },
        {
            skillID: "tp_up",
            baseSkill: false,
            coords: {x: 0, y: 15},
        },
        {
            skillID: "str_up",
            baseSkill: false,
            coords: {x: 0, y: 16},
        },
        {
            skillID: "vit_up",
            baseSkill: false,
            coords: {x: 0, y: 17},
        },
        {
            skillID: "luc_up",
            baseSkill: false,
            coords: {x: 0, y: 18},
        },
        {
            skillID: "weakshot",
            baseSkill: false,
            coords: {x: 1, y: 14},
        },
        {
            skillID: "haltshot",
            baseSkill: false,
            coords: {x: 1, y: 15},
        },
        {
            skillID: "esc_up",
            baseSkill: false,
            coords: {x: 2, y: 14},
        },
        {
            skillID: "take",
            baseSkill: false,
            coords: {x: 2, y: 15},
        },
        
    ],
    // War Magus
    [
        {
            skillID: 'war_lore',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 8
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 0},
            numAfter: 1,
            numBefore: 1
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 2, y: 0},
            numAfter: 3,
            numBefore: 1
        },
        {
            skillID: 'cure',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numAfter: 1,
            preReqLevels: [1],
            numBefore: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'salve',
            baseSkill: false,
            coords: {x: 2, y: 1},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: ["(Lv.7)"]
        },
        {
            skillID: 'healing',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numAfter: 1,
            preReqLevels: [3],
            numBefore: 1,
            postReqLevels: [4]
        },
        {
            skillID: 'salve_2',
            baseSkill: false,
            coords: {x: 2, y: 2},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: ["(Lv.10)"]
        },
        {
            skillID: 'full_heal',
            baseSkill: false,
            coords: {x: 1, y: 3},
            preReqLevels: [5],
            numBefore: 1,
        },
        {
            skillID: 'warmight',
            baseSkill: false,
            coords: {x: 1, y: 4},
            preReqLevels: [2],
            numBefore: 1,
        },
        {
            skillID: 'rockskin',
            baseSkill: false,
            coords: {x: 1, y: 5},
            preReqLevels: [2],
            numBefore: 1,
        },
        {
            skillID: 'elkspeed',
            baseSkill: false,
            coords: {x: 1, y: 6},
            preReqLevels: [2],
            numBefore: 1,
        },
        {
            skillID: 'erase',
            baseSkill: false,
            coords: {x: 1, y: 7},
            preReqLevels: [3],
            numBefore: 1,
        },
        {
            skillID: 'war_edge',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 6
        },
        {
            skillID: 'str_up',
            baseSkill: false,
            coords: {x: 2, y: 8},
            numBefore: 6
        },
        {
            skillID: 'blindcut',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numAfter: 1,
            preReqLevels: [1],
            numBefore: 1,
            postReqLevels: ["(Lv.1)"]
        },
        {
            skillID: 'venomcut',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 1,
            preReqLevels: [2],
            numBefore: 1,
            postReqLevels: ["(Lv.2)"]
        },
        {
            skillID: 'sleepcut',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numAfter: 1,
            preReqLevels: [3],
            numBefore: 1,
            postReqLevels: ["(Lv.3)"]
        },
        {
            skillID: 'fearcut',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numAfter: 1,
            preReqLevels: [4],
            numBefore: 1,
            postReqLevels: ["(Lv.4)"]
        },
        {
            skillID: 'stuncut',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numAfter: 1,
            preReqLevels: [5],
            numBefore: 1,
            postReqLevels: ["(Lv.5)"]
        },
        {
            skillID: 'cursecut',
            baseSkill: false,
            coords: {x: 1, y: 13},
            numAfter: 1,
            preReqLevels: [10],
            numBefore: 1,
            postReqLevels: ["(Lv.6)"]
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numAfter: 1,
            postReqLevels: [1]
        },
        {
            skillID: 'transfer',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 15},
        },
        {
            skillID: 'regenall',
            baseSkill: false,
            coords: {x: 1, y: 15},
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 15},
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 0, y: 16},
        },
        {
            skillID: 'chop',
            baseSkill: false,
            coords: {x: 2, y: 16},
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 17},
        },
        {
            skillID: 'agi_up',
            baseSkill: false,
            coords: {x: 0, y: 18},
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 19},
        },
        
    ],
    // Beast
    [
        {
            skillID: 'loyalty',
            baseSkill: false,
            coords: {x: 0, y: 0},
            numAfter: 4
        },
        {
            skillID: 'doze_off',
            baseSkill: false,
            coords: {x: 1, y: 0},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'preen',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [2]
        },
        {
            skillID: 'bristle',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'rampage',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
            postReqLevels: ["(Lv.5)"]
        },
        {
            skillID: 'tackle',
            baseSkill: false,
            coords: {x: 2, y: 3},
            numBefore: 1,
        },
        {
            skillID: 'maul',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numAfter: 1,
        },
        {
            skillID: 'devour',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'claw',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numAfter: 1,
        },
        {
            skillID: 'wildcut',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'hp_up',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
        },
        {
            skillID: 'autocure',
            baseSkill: false,
            coords: {x: 1, y: 6},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
            postReq: [5],
        },
        {
            skillID: 'autoheal',
            baseSkill: false,
            coords: {x: 2, y: 6},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'tenacity',
            baseSkill: false,
            coords: {x: 2, y: 7},
            numAfter: 1
        },
        {
            skillID: 'tec_up',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'luc_up',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'fetch',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 2,
        },
        {
            skillID: 'vit_up',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            postReqLevels: [10]
        },
        {
            skillID: 'en_garde',
            baseSkill: false,
            coords: {x: 1, y: 9},
            numBefore: 1
        },
        {
            skillID: 'tp_up',
            baseSkill: false,
            coords: {x: 0, y: 10},
        },
        {
            skillID: 'esc_up',
            baseSkill: false,
            coords: {x: 2, y: 10},
        },
        {
            skillID: 'str_up',
            baseSkill: false,
            coords: {x: 0, y: 11},
        },
        {
            skillID: 'agi_up',
            baseSkill: false,
            coords: {x: 0, y: 12},
        },
        {
            skillID: 'wildwall',
            baseSkill: false,
            coords: {x: 1, y: 10},
        },
        {
            skillID: 'beast_roar',
            baseSkill: false,
            coords: {x: 1, y: 11},
        },
        {
            skillID: 'saliva',
            baseSkill: false,
            coords: {x: 1, y: 12},
        },
        {
            skillID: 'howl',
            baseSkill: false,
            coords: {x: 1, y: 13},
        },
        {
            skillID: 'growl',
            baseSkill: false,
            coords: {x: 1, y: 14},
        },
        
    ],
    [ // Everyone Skills
        {
            skillID: 'hp_up',
            baseSkill: true,
            coords: {x: 0, y: 0}
        },
        {
            skillID: 'tp_up',
            baseSkill: true,
            coords: {x: 0, y: 1}
        },
        {
            skillID: 'str_up',
            baseSkill: true,
            coords: {x: 0, y: 2}
        },
        {
            skillID: 'tec_up',
            baseSkill: true,
            coords: {x: 0, y: 3}
        },
        {
            skillID: 'vit_up',
            baseSkill: true,
            coords: {x: 0, y: 4}
        },
        {
            skillID: 'agi_up',
            baseSkill: true,
            coords: {x: 0, y: 5}
        },
        {
            skillID: 'luc_up',
            baseSkill: true,
            coords: {x: 0, y: 6}
        },
        {
            skillID: 'esc_up',
            baseSkill: true,
            coords: {x: 0, y: 7}
        },
    ],
]

export default treeData;