const treeData = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [ // Wildling
        {
            skillID: 'beast_soul',
            baseSkill: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'wild_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 11
        },
        {
            skillID: 'dismiss_beast',
            baseSkill: false,
            numBefore: 1,
            preReqLevels: [1],
            coords: {x: 0, y: 1}
        },
        {
            skillID: 'call_bird',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'call_snake',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'call_mole',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'call_insect',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
            postReqLevels: [4]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            postReqLevels: [7],
            numBefore: 1
        },
        {
            skillID: 'call_elephant',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 2
        },
        {
            skillID: 'call_owl',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [5],
            postReqLevels: [4]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            postReqLevels: [7],
            numBefore: 1
        },
        {
            skillID: 'call_cow',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 2,
        },
        {
            skillID: 'nature_pact',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numBefore: 3,
        },
        {
            skillID: 'sacrifice_i',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: ["(Lv.3)"],
        },
        {
            skillID: 'sacrifice_ii',
            baseSkill: false,
            coords: {x: 1, y: 11},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: ["(Lv.3)"],
        },
        {
            skillID: 'call_ooze',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: [6]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 1,
            numBefore: 1,
            preReqLevels: ["(Lv.10)"]
        },
        {
            skillID: 'call_lion',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: ["10"],
            postReqLevels: ["(Lv.5)"],
            numAfter: 1,
        },
        {
            skillID: 'call_tiger',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: ["10"],
            postReqLevels: ["(Lv.5)"],
            numAfter: 1
        },
        {
            skillID: 'beast_roar',
            baseSkill: false,
            coords: {x: 0, y: 12},
        },
        {
            skillID: 'primal_drums',
            baseSkill: false,
            coords: {x: 1, y: 12},
        },
        {
            skillID: 'alertness',
            baseSkill: false,
            coords: {x: 2, y: 12},
        },
        
    ]
]

export default treeData;