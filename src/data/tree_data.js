const treeData = [
    [// Prince
        {
            skillID: 'royal_lineage',
            baseSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'royal_veil',
            baseSkill: true,
            coords: {x: 1, y: 0},
            barSize: 1
        },
        {
            skillID: 'triumphant_cry',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1
        },
        {
            skillID: 'monarch_march',
            baseSkill: false,
            coords: {x: 2, y: 1},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'nobility_proof',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 3
        },
        {
            skillID: 'negotiation',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'inspire',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'knighthood',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: 'guard_order',
            baseSkill: true,
            coords: {x: 0, y: 4},
            barSize: 4
        },
        {
            skillID: 'reinforce',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'prevent_order',
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'rally_order',
            baseSkill: false,
            coords: {x: 0, y: 7},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [5]
        },
        {
            skillID: 'protect_order',
            baseSkill: false,
            coords: {x: 1, y: 7},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: undefined,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 7
        },
        {
            skillID: 'attack_order',
            baseSkill: true,
            coords: {x: 0, y: 9},
            barSize: 5
        },
        {
            skillID: 'fire_arms',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [1]
        },
        {
            skillID: 'freeze_arms',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: 'shock_arms',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'regal_radiance',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numBefore: 1,
            preReqLevels: [3]
        },
        {
            skillID: undefined,
            baseSkill: undefined,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1
        },
        {
            skillID: "ad_nihilo",
            coords: {x: 1, y: 11},
            numBefore: 1
        }

    ],
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