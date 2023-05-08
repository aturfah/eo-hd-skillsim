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
            barSize: 13
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
            numAfter: 1
        },
        {
            skillID: 'bind_feather',
            baseSkill: false,
            coords: {x: 1, y: 2},
            numBefore: 1, 
            preReqLevels: ['Skill']
        },
        {
            skillID: 'call_snake',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1
        },
        {
            skillID: 'wind_wrap',
            baseSkill: false,
            coords: {x: 1, y: 3},
            numBefore: 1, 
            preReqLevels: ['Skill']
        },
        {
            skillID: 'call_mole',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1
        },
        {
            skillID: 'scratch',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 1, 
            preReqLevels: ['Skill']
        },
        {
            skillID: 'call_insect',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'poison_dust',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1, 
            preReqLevels: ['Skill'],
            numAfter: 1,
            postReqLevels: [4]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 6},
            numAfter: 1,
            afterSkip: 1,
            postReqLevels: [7],
            numBefore: 1
        },
        {
            skillID: 'call_elephant',
            baseSkill: false,
            coords: {x: 2, y: 5},
            numBefore: 2,
            numAfter: 1
        },
        {
            skillID: 'reckless_rush',
            baseSkill: false,
            coords: {x: 3, y: 5},
            numBefore: 1,
            preReqLevels: ['Skill']
        },
        {
            skillID: 'call_owl',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            numAfter: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'sleep_powder',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
            preReqLevels: ['Skill'],
            numAfter: 1,
            postReqLevels: [4]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 8},
            numAfter: 1,
            afterSkip: 1,
            postReqLevels: [7],
            numBefore: 1
        },
        {
            skillID: 'call_cow',
            baseSkill: false,
            coords: {x: 2, y: 7},
            numBefore: 2,
            numAfter: 1
        },
        {
            skillID: 'bull_run',
            baseSkill: false,
            coords: {x: 3, y: 7},
            numBefore: 1,
            preReqLevels: ['Skill']
        },
        {
            skillID: 'call_ooze',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numAfter: 2,
            numBefore: 1,
            preReqLevels: [6]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 9},
            numAfter: 1,
            afterSkip: 1,
            numBefore: 1,
            preReqLevels: ["(Lv.10)"]
        },
        {
            skillID: 'plague_gunk',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
            preReqLevels: ['Skill']
        },
        {
            skillID: 'call_tiger',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: ["10"],
            postReqLevels: ["(Lv.5)"],
            numAfter: 3
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 13},
            numAfter: 1,
            afterSkip: 1,
            numBefore: 1
        },
        {
            skillID: 'death_fang',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            preReqLevels: ['Skill']
        },
        {
            skillID: 'fierce_counter',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 1,
            preReqLevels: ['Skill']
        },
        {
            skillID: 'call_lion',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: ["10"],
            postReqLevels: ["(Lv.5)"],
            numAfter: 2
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 11},
            numAfter: 1,
            afterSkip: 1,
            numBefore: 1
        },
        {
            skillID: 'regal_authority',
            baseSkill: false,
            coords: {x: 1, y: 12},
            numBefore: 1,
            preReqLevels: ['Skill']
        },
        {
            skillID: 'nature_pact',
            baseSkill: false,
            coords: {x: 3, y: 9},
            numBefore: 5,
        },
        {
            skillID: 'sacrifice_ii',
            baseSkill: false,
            coords: {x: 2, y: 13},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: ["(Lv.3)"],
        },
        {
            skillID: 'sacrifice_i',
            baseSkill: false,
            coords: {x: 2, y: 11},
            numBefore: 1,
            numAfter: 1,
            postReqLevels: ["(Lv.3)"],
        },
        {
            skillID: 'beast_roar',
            baseSkill: false,
            coords: {x: 0, y: 16},
        },
        {
            skillID: 'primal_drums',
            baseSkill: false,
            coords: {x: 1, y: 16},
        },
        {
            skillID: 'alertness',
            baseSkill: false,
            coords: {x: 2, y: 16},
        },
        
    ]
]

export default treeData;