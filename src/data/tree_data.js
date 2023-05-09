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
    [// Gladiator
        {
            skillID: 'endless_battle',
            baseSkill: true,
            coords: {x: 1, y: 0}
        },
        {
            skillID: 'sword_mastery',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 6
        },
        {
            skillID: 'break',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'bind_cut',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'rush',
            baseSkill: false,
            coords: {x: 0, y: 3},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 3,
            postReqLevels: [5]
        },
        {
            skillID: 'rampage',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [7]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
        },
        {
            skillID: 'blade_rave',
            baseSkill: false,
            coords: {x: 1, y: 5},
            numBefore: 1,
        },
        {
            skillID: 'club_mastery',
            baseSkill: true,
            coords: {x: 0, y: 7},
            barSize: 5
        },
        {
            skillID: 'crushing_blow',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: 'freezing_blow',
            baseSkill: false,
            coords: {x: 1, y: 8},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1,
        },
        {
            skillID: 'arm_breaker',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 2,
            postReqLevels: [5]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [10],
            numAfter: 1,
        },
        {
            skillID: 'nine_smashes',
            baseSkill: false,
            coords: {x: 1, y: 10},
            numBefore: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            afterSkip: 1,
            preReqLevels: [5],
            numAfter: 1,
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            afterSkip: 1,
        },
        {
            skillID: 'wild_swings',
            baseSkill: false,
            coords: {x: 2, y: 9},
            numBefore: 7,
            beforeStyle: 'centered'
        },
        {
            skillID: 'berserker_vow',
            baseSkill: true,
            coords: {x: 0, y: 13},
            barSize: 2
        },
        {
            skillID: 'avenger',
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            numAfter: 1,
        },
        {
            skillID: 'wolf_howl',
            baseSkill: true,
            coords: {x: 2, y: 13},
            barSize: 1
        },
        {
            skillID: 'charge',
            baseSkill: false,
            coords: {x: 2, y: 14},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'white_flame',
            baseSkill: false,
            coords: {x: 0, y: 15},
            numBefore: 1,
            preReqLevels: [5],
            numAfter: 1,
            postReqLevels: [3]
        },
        {
            skillID: 'stun_attack',
            baseSkill: false,
            coords: {x: 1, y: 15},
            numBefore: 1,
        },
    ],
    [// Hoplite
        {
            skillID: 'guardian',
            baseSkill: true,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'provoke',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 2
        },
        {
            skillID: 'parry',
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'magic_parry',
            baseSkill: false,
            coords: {x: 0, y: 2},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'shrug_off',
            baseSkill: true,
            coords: {x: 1, y: 0},
            barSize: 1
        },
        {
            skillID: 'recuperate',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'vigilance',
            baseSkill: false,
            coords: {x: 1, y: 2},
        },
        {
            skillID: 'spear_mastery',
            baseSkill: true,
            coords: {x: 0, y: 3},
            barSize: 3
        },
        {
            skillID: 'switch_stab',
            baseSkill: false,
            coords: {x: 0, y: 4},
            numBefore: 1,
            preReqLevels: [1],
            numAfter: 2,
            postReqLevels: [3]
        },
        {
            skillID: 'blitzritter',
            baseSkill: false,
            coords: {x: 0, y: 5},
            numBefore: 1,
            preReqLevels: [5]
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 6},
            numBefore: 1,
            preReqLevels: [7],
            numAfter: 1,
        },
        {
            skillID: 'long_stride',
            baseSkill: false,
            coords: {x: 1, y: 4},
            numBefore: 3,
        },
        {
            skillID: 'shield_mastery',
            baseSkill: true,
            coords: {x: 0, y: 7},
            barSize: 7
        },
        {
            skillID: 'line_guard',
            baseSkill: false,
            coords: {x: 0, y: 8},
            numBefore: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'bodyguard',
            baseSkill: false,
            coords: {x: 0, y: 9},
            numBefore: 1,
            preReqLevels: [3],
        },
        {
            skillID: 'antifire',
            baseSkill: false,
            coords: {x: 0, y: 10},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'anticold',
            baseSkill: false,
            coords: {x: 0, y: 11},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: 'antivolt',
            baseSkill: false,
            coords: {x: 0, y: 12},
            numBefore: 1,
            preReqLevels: [5],
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 14},
            numBefore: 1,
            afterSkip: 1,
            preReqLevels: [1],
        },
        {
            skillID: 'overwatch',
            baseSkill: false,
            coords: {x: 1, y: 14},
            numBefore: 1,
            beforeSkip: 1,
            preReqLevels: [8],
        },
        {
            skillID: 'selflessness',
            baseSkill: false,
            coords: {x: 0, y: 13},
            numAfter: 2,
            postReqLevels: [3]
        },
    ],
    [// Buccaneer
        {
            skillID: 'trickster',
            baseSkill: false,
            coords: {x: 2, y: 0}
        },
        {
            skillID: 'troublemaker',
            baseSkill: false,
            coords: {x: 2, y: 1}
        },
        {
            skillID: 'eagle_eye',
            baseSkill: true,
            coords: {x: 0, y: 0},
            barSize: 1
        },
        {
            skillID: undefined,
            baseSkill: false,
            coords: {x: 0, y: 1},
            numBefore: 1,
            preReqLevels: [3],
            numAfter: 1
        },
        {
            skillID: 'lady_luck',
            baseSkill: true,
            coords: {x: 1, y: 0},
            barSize: 1
        },
        {
            skillID: 'limit_boost',
            baseSkill: false,
            coords: {x: 1, y: 1},
            numBefore: 1,
            preReqLevels: [3],
        },
    ],
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
        
    ],
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
            skillID: 'bandage',
            baseSkill: true,
            coords: {x: 0, y: 2}
        },
        {
            skillID: 'combat_study',
            baseSkill: true,
            coords: {x: 0, y: 3}
        },
        {
            skillID: 'take',
            baseSkill: true,
            coords: {x: 0, y: 4}
        },
        {
            skillID: 'chop',
            baseSkill: true,
            coords: {x: 0, y: 5}
        },
        {
            skillID: 'mine',
            baseSkill: true,
            coords: {x: 0, y: 6}
        },
    ],
]

export default treeData;