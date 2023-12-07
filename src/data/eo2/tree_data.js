const treeData = [
    // Landsknecht
    [
        {
            skillID: '(l)_swords',
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
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
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