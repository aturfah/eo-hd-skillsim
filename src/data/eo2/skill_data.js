// AUTOMATICALLY GENERATED FILE; DO NOT MODIFY!;
    var skillData = [
  {
    "source": null,
    "class": "Landsknecht",
    "branches": [
      {
        "branch_name": "Landsknecht",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(l)_swords",
            "name": "(L) Swords",
            "description": "Needed to learn sword skills. Passively increases damage dealt with swords.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "axes",
            "name": "Axes",
            "description": "Needed to learn axe skills. Passively increases damage dealt with axes.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "counter",
            "name": "Counter",
            "description": "When the Landsknecht takes physical damage, they have a chance to reflect the damage they've taken back at their attacker if they're still alive after the attack. Works even if the damage was blocked through methods such as Painless. For the purposes of conditional drops only, the damage type of the attack is based on the Landsknecht's equipped weapon. Any elements on the Landsknecht's weapon are ignored.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 8
              },
              {
                "_id": "axes",
                "level": 8
              }
            ],
            "growth_order": [
              "Counter Chance",
              "Damage Reflected"
            ],
            "growth": {
              "Counter Chance": [
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "17%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                }
              ],
              "Damage Reflected": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(l)_2-hit",
            "name": "(L) 2-Hit",
            "description": "Normal attacks have a chance of hitting twice.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 5
              },
              {
                "_id": "axes",
                "level": 5
              }
            ],
            "growth_order": [
              "Activation Rate"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "cleaver",
            "name": "Cleaver",
            "description": "Deals melee STR-based Cut damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "132%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "186%"
                },
                {
                  "levelspan": "1",
                  "value": "202%"
                },
                {
                  "levelspan": "1",
                  "value": "220%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "99%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "139%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "169%"
                },
                {
                  "levelspan": "1",
                  "value": "187%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "tornado",
            "name": "Tornado",
            "description": "Deals melee STR-based Cut damage to one enemy and enemies adjacent to them.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Adjacent Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "167%"
                },
                {
                  "levelspan": "1",
                  "value": "181%"
                },
                {
                  "levelspan": "1",
                  "value": "197%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                }
              ],
              "Adjacent Damage": [
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "58%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "76%"
                },
                {
                  "levelspan": "1",
                  "value": "83%"
                },
                {
                  "levelspan": "1",
                  "value": "91%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "99%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "139%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "169%"
                },
                {
                  "levelspan": "1",
                  "value": "187%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "allslash",
            "name": "Allslash",
            "description": "Deals melee STR-based Cut damage to 2 to 4 enemies. Each enemy can only be hit once.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy",
              "Chance of 2 Hits",
              "Chance of 3 Hits",
              "Chance of 4 Hits"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "108%"
                },
                {
                  "levelspan": "1",
                  "value": "111%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "126%"
                },
                {
                  "levelspan": "1",
                  "value": "133%"
                },
                {
                  "levelspan": "1",
                  "value": "141%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Chance of 2 Hits": [
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "76%"
                },
                {
                  "levelspan": "1",
                  "value": "72%"
                },
                {
                  "levelspan": "1",
                  "value": "68%"
                },
                {
                  "levelspan": "1",
                  "value": "64%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "48%"
                },
                {
                  "levelspan": "1",
                  "value": "44%"
                }
              ],
              "Chance of 3 Hits": [
                {
                  "levelspan": "1",
                  "value": "19%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                }
              ],
              "Chance of 4 Hits": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "17%"
                },
                {
                  "levelspan": "1",
                  "value": "19%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "hypercut",
            "name": "Hypercut",
            "description": "Deals melee STR-based Cut damage to one enemy.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 5
              },
              {
                "_id": "agi_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "134%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "202%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "250%"
                },
                {
                  "levelspan": "1",
                  "value": "254%"
                },
                {
                  "levelspan": "1",
                  "value": "262%"
                },
                {
                  "levelspan": "1",
                  "value": "274%"
                },
                {
                  "levelspan": "1",
                  "value": "290%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "riskcut",
            "name": "Riskcut",
            "description": "Deals melee STR-based Cut damage to one enemy. The damage increases when the Landsknecht's HP falls under certain thresholds.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 7
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage (100% to 76%)",
              "Damage (75% to 51%)",
              "Damage (50% to 26%)",
              "Damage (25% to 2%)",
              "Damage (1%)",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Damage (100% to 76%)": [
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "146%"
                }
              ],
              "Damage (75% to 51%)": [
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "146%"
                },
                {
                  "levelspan": "1",
                  "value": "157%"
                }
              ],
              "Damage (50% to 26%)": [
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "146%"
                },
                {
                  "levelspan": "1",
                  "value": "157%"
                },
                {
                  "levelspan": "1",
                  "value": "168%"
                }
              ],
              "Damage (25% to 2%)": [
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "146%"
                },
                {
                  "levelspan": "1",
                  "value": "157%"
                },
                {
                  "levelspan": "1",
                  "value": "168%"
                },
                {
                  "levelspan": "1",
                  "value": "180%"
                }
              ],
              "Damage (1%)": [
                {
                  "levelspan": "1",
                  "value": "146%"
                },
                {
                  "levelspan": "1",
                  "value": "157%"
                },
                {
                  "levelspan": "1",
                  "value": "168%"
                },
                {
                  "levelspan": "1",
                  "value": "180%"
                },
                {
                  "levelspan": "1",
                  "value": "193%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "deathaxe",
            "name": "Deathaxe",
            "description": "Deals melee STR-based Bash damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "axes",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "146%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                },
                {
                  "levelspan": "1",
                  "value": "182%"
                },
                {
                  "levelspan": "1",
                  "value": "196%"
                },
                {
                  "levelspan": "1",
                  "value": "212%"
                },
                {
                  "levelspan": "1",
                  "value": "230%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "94%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "99%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "108%"
                },
                {
                  "levelspan": "1",
                  "value": "114%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "138%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "silencer",
            "name": "Silencer",
            "description": "Deals melee STR-based Bash damage to one enemy. Has a chance to inflict head bind.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "axes",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "167%"
                },
                {
                  "levelspan": "1",
                  "value": "181%"
                },
                {
                  "levelspan": "1",
                  "value": "197%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "36%"
                },
                {
                  "levelspan": "1",
                  "value": "43%"
                },
                {
                  "levelspan": "1",
                  "value": "51%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "94%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "99%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "108%"
                },
                {
                  "levelspan": "1",
                  "value": "114%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "138%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "brawn",
            "name": "Brawn",
            "description": "Deals melee STR-based Bash damage to one enemy.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "axes",
                "level": 5
              },
              {
                "_id": "str_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "159%"
                },
                {
                  "levelspan": "1",
                  "value": "180%"
                },
                {
                  "levelspan": "1",
                  "value": "213%"
                },
                {
                  "levelspan": "1",
                  "value": "258%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "5",
                  "value": "1%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "114%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "lifeaxe",
            "name": "Lifeaxe",
            "description": "Deals melee STR-based Cut damage to one enemy. The damage decreases when the Landsknecht's HP falls under certain thresholds.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "axes",
                "level": 7
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage (100% to 76%)",
              "Damage (75% to 51%)",
              "Damage (50% to 26%)",
              "Damage (25% to 2%)",
              "Damage (1%)",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Damage (100% to 76%)": [
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "179%"
                },
                {
                  "levelspan": "1",
                  "value": "194%"
                },
                {
                  "levelspan": "1",
                  "value": "210%"
                }
              ],
              "Damage (75% to 51%)": [
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "179%"
                },
                {
                  "levelspan": "1",
                  "value": "194%"
                }
              ],
              "Damage (50% to 26%)": [
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "179%"
                }
              ],
              "Damage (25% to 2%)": [
                {
                  "levelspan": "1",
                  "value": "119%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                }
              ],
              "Damage (1%)": [
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "119%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "114%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "stunner",
            "name": "Stunner",
            "description": "Deals melee STR-based Bash damage to one enemy. Has a chance to inflict stun.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "axes",
                "level": 7
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "167%"
                },
                {
                  "levelspan": "1",
                  "value": "181%"
                },
                {
                  "levelspan": "1",
                  "value": "197%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "17%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "47%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "94%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "99%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "108%"
                },
                {
                  "levelspan": "1",
                  "value": "114%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "138%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "blazer/freezer/shocker",
            "name": "Blazer/Freezer/Shocker",
            "description": "When used, the Landsknecht prepares to attack any enemies in the battle with Fire/Ice/Volt damage at the start of the turn. When any enemy gets hit with an elemental attack that has the same element as the chaser, the Landsknecht will perform a follow up attack on those enemies. Every time the Landsknecht chases an attack, the chances of chasing another attack within the same turn decreases.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 8
              },
              {
                "_id": "axes",
                "level": 8
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Accuracy",
              "Base Activation Rate",
              "Chance Reduction",
              "Max Chases"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "148%"
                },
                {
                  "levelspan": "1",
                  "value": "166%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                }
              ],
              "Base Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "114%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "79%"
                },
                {
                  "levelspan": "1",
                  "value": "58%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                }
              ],
              "Max Chases": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "war_cry",
            "name": "War Cry",
            "description": "Increases the Landsknecht's physical attack at the cost of their physical defense for 5 turns.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "str_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Attack Increase",
              "Defense Decrease",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Attack Increase": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                }
              ],
              "Defense Decrease": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "34%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "5",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "unbound",
            "name": "Unbound",
            "description": "Removes binds from one party member.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Binds Removed",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Binds Removed": [
                {
                  "levelspan": "2",
                  "value": "1"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_all_out",
            "name": "All Out",
            "description": "Deals 500% melee STR-based Cut damage to all enemies. Has a 500% speed modifier. Has a 300% accuracy modifier.",
            "max_level": 0,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Survivalist",
    "branches": [
      {
        "branch_name": "Survivalist",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "bows",
            "name": "Bows",
            "description": "Needed to learn Bow skills. Passively increases damage dealt with Bows.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "ambush",
            "name": "Ambush",
            "description": "Passively increases the chance of your party getting a preemptive attack on enemies. Will not work for guaranteed blindside encounters.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "agi_up",
                "level": 3
              }
            ],
            "growth_order": [
              "Chance"
            ],
            "growth": {
              "Chance": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "17%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "sagacity",
            "name": "Sagacity",
            "description": "Passively decreases the chance of enemies blindsiding your party. Will not work for guaranteed blindside encounters.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "agi_up",
                "level": 5
              }
            ],
            "growth_order": [
              "Chance"
            ],
            "growth": {
              "Chance": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "17%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "1st_hit",
            "name": "1st Hit",
            "description": "Passively gives the Survivalist a chance to act first in a turn.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "ambush",
                "level": 5
              },
              {
                "_id": "sagacity",
                "level": 3
              }
            ],
            "growth_order": [
              "Chance"
            ],
            "growth": {
              "Chance": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "trueshot",
            "name": "Trueshot",
            "description": "Deals ranged STR-based Stab damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "bows",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "151%"
                },
                {
                  "levelspan": "1",
                  "value": "157%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "175%"
                },
                {
                  "levelspan": "1",
                  "value": "187%"
                },
                {
                  "levelspan": "1",
                  "value": "209%"
                },
                {
                  "levelspan": "1",
                  "value": "235%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "107%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "2-bolt",
            "name": "2-Bolt",
            "description": "Deals 2 instances of ranged STR-based Stab damage to random enemies. Can hit the same enemy multiple times. The targets are predetermined when the Survivalist attacks. If an enemy was targeted to take multiple hits, but dies before the rest of those hits come out, they will simply disappear and will not get redirected to other enemies.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "bows",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "83%"
                },
                {
                  "levelspan": "1",
                  "value": "86%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "108%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "125%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "107%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "sleeper/number/poisoner",
            "name": "Sleeper/Number/Poisoner",
            "description": "Deals ranged STR-based Stab damage to one enemy. Has a chance to inflict sleep/paralysis/poison.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "bows",
                "level": 3
              },
              {
                "_id": "tec_up",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Poison Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "133%"
                },
                {
                  "levelspan": "1",
                  "value": "151%"
                },
                {
                  "levelspan": "1",
                  "value": "175%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                }
              ],
              "Poison Damage": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "45"
                },
                {
                  "levelspan": "1",
                  "value": "75"
                },
                {
                  "levelspan": "1",
                  "value": "115"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "apollon",
            "name": "Apollon",
            "description": "When used, the Survivalist fires off a shot into the air. Two turns later, it will come down at the start of the turn, dealing ranged STR-based Stab damage to one enemy. The skill cannot be used again until the shot comes down. If the Survivalist is incapacitated on the turn the shot comes down, it will not hit the enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "bows",
                "level": 10
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "210%"
                },
                {
                  "levelspan": "1",
                  "value": "216%"
                },
                {
                  "levelspan": "1",
                  "value": "228%"
                },
                {
                  "levelspan": "1",
                  "value": "246%"
                },
                {
                  "levelspan": "1",
                  "value": "270%"
                },
                {
                  "levelspan": "1",
                  "value": "300%"
                },
                {
                  "levelspan": "1",
                  "value": "336%"
                },
                {
                  "levelspan": "1",
                  "value": "378%"
                },
                {
                  "levelspan": "1",
                  "value": "426%"
                },
                {
                  "levelspan": "1",
                  "value": "480%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "82%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "10",
                  "value": "200%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "1st_turn",
            "name": "1st Turn",
            "description": "Forces the targeted party member to act first. This skill is bugged. What was supposed to happen was that levels 1 through 7 would have a chance of failure, but the game does not check for the success rate at all. Meaning that by default, the success rate is 100% at all levels.",
            "max_level": 10,
            "uses": "Legs",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "slowstep",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Success Rate"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ],
              "Success Rate": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "76%"
                },
                {
                  "levelspan": "1",
                  "value": "78%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "3",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "slowstep",
            "name": "Slowstep",
            "description": "Forces the targeted party member to act last. This skill is bugged. What was supposed to happen was that levels 1 through 7 would have a chance of failure, but the game does not check for the success rate at all. Meaning that by default, the success rate is 100% at all levels.",
            "max_level": 10,
            "uses": "Legs",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "velocity",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Success Rate"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ],
              "Success Rate": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "76%"
                },
                {
                  "levelspan": "1",
                  "value": "78%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "3",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "baitstep",
            "name": "Baitstep",
            "description": "Increases the Survivalist's evasion and the chance of being targeted by enemies for 5 turns.",
            "max_level": 10,
            "uses": "Legs",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "agi_up",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Evasion Increase",
              "Provoke Rate",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                }
              ],
              "Evasion Increase": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "2",
                  "value": "16%"
                },
                {
                  "levelspan": "2",
                  "value": "21%"
                }
              ],
              "Provoke Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "4",
                  "value": "100%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "166%"
                },
                {
                  "levelspan": "1",
                  "value": "182%"
                },
                {
                  "levelspan": "1",
                  "value": "200%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "velocity",
            "name": "Velocity",
            "description": "Increases the Survivalist's AGI for 5 turns.",
            "max_level": 5,
            "uses": "Legs",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "agi_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "AGI Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "AGI Increase": [
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "39%"
                },
                {
                  "levelspan": "1",
                  "value": "48%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(s)_patrol",
            "name": "(S) Patrol",
            "description": "Can only be used on the field. Lowers damage taken from damage tiles for a set number of steps.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Damage Reduction",
              "Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                }
              ],
              "Damage Reduction": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Duration": [
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "50"
                },
                {
                  "levelspan": "1",
                  "value": "75"
                },
                {
                  "levelspan": "1",
                  "value": "100"
                },
                {
                  "levelspan": "1",
                  "value": "125"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "stalker",
            "name": "Stalker",
            "description": "Can only be used on the field. Lowers the encounter rate by lowering the danger value of tiles for a set number of steps.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Danger Value Multiplier",
              "Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                }
              ],
              "Danger Value Multiplier": [
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "57%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ],
              "Duration": [
                {
                  "levelspan": "1",
                  "value": "30"
                },
                {
                  "levelspan": "1",
                  "value": "50"
                },
                {
                  "levelspan": "1",
                  "value": "70"
                },
                {
                  "levelspan": "1",
                  "value": "90"
                },
                {
                  "levelspan": "1",
                  "value": "110"
                },
                {
                  "levelspan": "1",
                  "value": "120"
                },
                {
                  "levelspan": "1",
                  "value": "150"
                },
                {
                  "levelspan": "1",
                  "value": "170"
                },
                {
                  "levelspan": "1",
                  "value": "190"
                },
                {
                  "levelspan": "1",
                  "value": "250"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "foesense",
            "name": "Foesense",
            "description": "Can only be used on the field. Reveals all FOEs on the map for a set number of steps.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                }
              ],
              "Duration": [
                {
                  "levelspan": "1",
                  "value": "30"
                },
                {
                  "levelspan": "1",
                  "value": "50"
                },
                {
                  "levelspan": "1",
                  "value": "70"
                },
                {
                  "levelspan": "1",
                  "value": "90"
                },
                {
                  "levelspan": "1",
                  "value": "110"
                },
                {
                  "levelspan": "1",
                  "value": "120"
                },
                {
                  "levelspan": "1",
                  "value": "150"
                },
                {
                  "levelspan": "1",
                  "value": "170"
                },
                {
                  "levelspan": "1",
                  "value": "190"
                },
                {
                  "levelspan": "1",
                  "value": "250"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_airwalk",
            "name": "Airwalk",
            "description": "Increases the party's evasion by 50% for 5 turns. Has a speed modifier of 200%.",
            "max_level": 0,
            "uses": "Legs",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Protector",
    "branches": [
      {
        "branch_name": "Protector",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "shields",
            "name": "Shields",
            "description": "Needed to learn shield skills. Passively decreases the damage the Protector takes from all damage types.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Reduction"
            ],
            "growth": {
              "Damage Reduction": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "aegis",
            "name": "Aegis",
            "description": "If the Protector dies, this passive has a chance to revive them with 1 HP. Only works once per battle. Won't activate if the Protector gets killed by instant death.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "hp_regen",
                "level": 5
              },
              {
                "_id": "riskwall",
                "level": 5
              }
            ],
            "growth_order": [
              "Activation Rate"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(p)_en_garde",
            "name": "(P) En Garde",
            "description": "Passively gives the Protector a chance to reduce any instance of damage they take by 50%.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "shields",
                "level": 5
              }
            ],
            "growth_order": [
              "Activation Rate"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "hp_regen",
            "name": "HP Regen",
            "description": "Passively restores the Protector's HP at the end of each turn.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "hp_up",
                "level": 1
              }
            ],
            "growth_order": [
              "HP Restored"
            ],
            "growth": {
              "HP Restored": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "riskwall",
            "name": "Riskwall",
            "description": "Passively decreases the amount of damage the Protector takes from all damage types. The damage reduction increases when the Protector's HP falls under certain thresholds.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "hp_up",
                "level": 3
              }
            ],
            "growth_order": [
              "Damage Reduction (100% to 76%)",
              "Damage Reduction (75% to 51%)",
              "Damage Reduction (50% to 26%)",
              "Damage Reduction (25% to 11%)",
              "Damage Reduction (10 to 1%)"
            ],
            "growth": {
              "Damage Reduction (100% to 76%)": [
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                }
              ],
              "Damage Reduction (75% to 51%)": [
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                }
              ],
              "Damage Reduction (50% to 26%)": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                }
              ],
              "Damage Reduction (25% to 11%)": [
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                }
              ],
              "Damage Reduction (10 to 1%)": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "smite",
            "name": "Smite",
            "description": "Deals melee STR-based Bash damage to one enemy. Has a chance to inflict arm bind. The defense value on the Protector's shield is used for Weapon Attack in the damage formula.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "shields",
                "level": 10
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "300%"
                },
                {
                  "levelspan": "1",
                  "value": "310%"
                },
                {
                  "levelspan": "1",
                  "value": "330%"
                },
                {
                  "levelspan": "1",
                  "value": "360%"
                },
                {
                  "levelspan": "1",
                  "value": "400%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "5",
                  "value": "200%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "f._guard/b._guard",
            "name": "F. Guard/B. Guard",
            "description": "At the start of the turn, the Protector prepares to reduces the amount of damage the front/back row takes from physical attacks for the current turn. Remains active until the turn ends or the Protector dies. Every time the skill activates, the chance of it activating again is reduced. The base activation rate is 100% at all levels.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "shields",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage Reduction",
              "Chance Reduction",
              "Max Activations"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                }
              ],
              "Damage Reduction": [
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "36%"
                },
                {
                  "levelspan": "1",
                  "value": "43%"
                },
                {
                  "levelspan": "1",
                  "value": "51%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "91%"
                },
                {
                  "levelspan": "1",
                  "value": "82%"
                },
                {
                  "levelspan": "1",
                  "value": "73%"
                },
                {
                  "levelspan": "1",
                  "value": "64%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                }
              ],
              "Max Activations": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "5",
                  "value": "2"
                },
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "a._guard",
            "name": "A. Guard",
            "description": "At the start of the turn, the Protector prepares to reduces the amount of damage the entire party takes from physical attacks for the current turn. Remains active until the turn ends or the Protector dies. Every time the skill activates, the chance of it activating again is reduced. The base activation rate is 100% at all levels.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "f._guard",
                "level": 5
              },
              {
                "_id": "b._guard",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage Reduction",
              "Chance Reduction",
              "Max Activations"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                }
              ],
              "Damage Reduction": [
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "49%"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "68%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "32%"
                }
              ],
              "Max Activations": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "3",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "1_guard",
            "name": "1 Guard",
            "description": "At the start of the turn, the Protector prepares to reduces the amount of damage one party member takes from physical attacks for the current turn. Remains active until the turn ends or the Protector dies. Every time the skill activates, the chance of it activating again is reduced. The base activation rate is 100% at all levels.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "shields",
                "level": 7
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage Reduction",
              "Chance Reduction",
              "Max Activations"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                }
              ],
              "Damage Reduction": [
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "48%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                }
              ],
              "Max Activations": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "antifire/anticold/antivolt",
            "name": "Antifire/Anticold/Antivolt",
            "description": "At the start of the turn, the Protector prepares to reduces the amount of damage the entire party takes from fire/ice/volt attacks for the current turn. Remains active until the turn ends or the Protector dies. From levels 1 through 9, every time the skill activates, the chance of it activating again is reduced. The base activation rate is 100% at all levels. At level 10, the skill will always activate. At levels 1 through 7, the damage is simply reduced. At levels 8 through 10, the effects of the attack are completely nullified, meaning that any status effects attached to those attacks will not take effect. At levels 9 and 10, the damage is not nullified, but ends up being absorbed and heals the party instead.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "shields",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage Reduction",
              "Damage Absorption",
              "Chance Reduction",
              "Max Activations"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                }
              ],
              "Damage Reduction": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "68%"
                },
                {
                  "levelspan": "1",
                  "value": "76%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "2",
                  "value": "0%"
                }
              ],
              "Damage Absorption": [
                {
                  "levelspan": "8",
                  "value": "0%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "0%"
                }
              ],
              "Max Activations": [
                {
                  "levelspan": "5",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "Infinite"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "antiall",
            "name": "Antiall",
            "description": "At the start of the turn, the Protector prepares to reduces the amount of damage the entire party takes from elemental attacks for the current turn. Remains active until the turn ends or the Protector dies. Every time the skill activates, the chance of it activating again is reduced. The base activation rate is 100% at all levels. At levels 1 through 4, the damage is simply reduced. At level 5, the effects of the attack are completely nullified, meaning that any status effects attached to those attacks will not take effect.The damage taken is also absorbed and heals the party instead.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "tec_up",
                "level": 10
              },
              {
                "_id": "shields",
                "level": 10
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage Reduction",
              "Damage Absorption",
              "Chance Reduction",
              "Max Activations"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                }
              ],
              "Damage Reduction": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "68%"
                },
                {
                  "levelspan": "1",
                  "value": "0%"
                }
              ],
              "Damage Absorption": [
                {
                  "levelspan": "4",
                  "value": "0%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "82%"
                },
                {
                  "levelspan": "1",
                  "value": "64%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                }
              ],
              "Max Activations": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "fortify",
            "name": "Fortify",
            "description": "Increases the Protector's physical defense for 5 turns.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "vit_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Defense Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Defense Increase": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "36%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "200%"
                },
                {
                  "levelspan": "1",
                  "value": "210%"
                },
                {
                  "levelspan": "1",
                  "value": "230%"
                },
                {
                  "levelspan": "1",
                  "value": "260%"
                },
                {
                  "levelspan": "1",
                  "value": "300%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "provoke",
            "name": "Provoke",
            "description": "Increases the Protector's physical defense and the chance of being targeted by enemies for 5 turns.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Defense Increase",
              "Provoke Rate",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                }
              ],
              "Defense Increase": [
                {
                  "levelspan": "1",
                  "value": "0%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                }
              ],
              "Provoke Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "4",
                  "value": "100%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "163%"
                },
                {
                  "levelspan": "1",
                  "value": "184%"
                },
                {
                  "levelspan": "1",
                  "value": "208%"
                },
                {
                  "levelspan": "1",
                  "value": "235%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "parry",
            "name": "Parry",
            "description": "At the start of the turn, the Protector prepares to any damage they take from any melee physical attacks for the current turn. Remains active until the turn ends or the Protector dies. Every time the skill activates, the chance of it activating again is reduced. The base activation rate is 100% at all levels.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "provoke",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Chance Reduction",
              "Max Activations"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                }
              ],
              "Max Activations": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(p)_refresh",
            "name": "(P) Refresh",
            "description": "Dispels certain status ailments from one party member. Which ailments are dispelled depends on the skill's level. Cannot dispel petrification, no matter how high its level is.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "provoke",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Ailments Dispelled",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Ailments Dispelled": [
                {
                  "levelspan": "1",
                  "value": "Blind"
                },
                {
                  "levelspan": "1",
                  "value": "PoisonSleep"
                },
                {
                  "levelspan": "1",
                  "value": "FearParalyze"
                },
                {
                  "levelspan": "1",
                  "value": "CurseConfuse"
                },
                {
                  "levelspan": "1",
                  "value": "N/A"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "flee",
            "name": "Flee",
            "description": "When used, the Protector has a chance to escape from the battle at the start of the turn. If you visited multipled floors during one trip to the Labyrinth, there is a chance to warp back to the previous floor and the last set of stairs used. Otherwise the skill only functions as another escape method. The warp aspect works even if you get cornered by an FOE. If the skill is used on the first turn of a preemptive attack, the escape and warp activation rate is always 100%, no matter what level the skill is at. The escape rate and warp activation rates have separate checks. Cannot work in boss battles, no matter what the circumstances.",
            "max_level": 5,
            "uses": "Legs",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Escape/Warp Activation Rate"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Escape/Warp Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "64%"
                },
                {
                  "levelspan": "1",
                  "value": "72%"
                },
                {
                  "levelspan": "1",
                  "value": "84%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_painless",
            "name": "Painless",
            "description": "The Protector sets up the perfect defense at the start of the turn, nullifying any damage taken and prevents any status effects or binds from landing until the end of the turn. Does not affect debuffs or buff dispels.",
            "max_level": 0,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Dark Hunter",
    "branches": [
      {
        "branch_name": "Dark Hunter",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "whips",
            "name": "Whips",
            "description": "Needed to learn whip skills. Passively increases damage dealt with whips.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(d)_swords",
            "name": "(D) Swords",
            "description": "Needed to learn sword skills. Passively increases damage dealt with swords.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "antisick/antibind",
            "name": "Antisick/Antibind",
            "description": "Passively increases the Dark Hunter's resistance to ailments/binds.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "unbind",
                "level": 3
              }
            ],
            "growth_order": [
              "Resistance Increase"
            ],
            "growth": {
              "Resistance Increase": [
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "viper",
            "name": "Viper",
            "description": "Deals melee STR-based Cut damage to one enemy. Has a chance to inflict poison.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "whips",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Poison Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "202%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                }
              ],
              "Poison Damage": [
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "32"
                },
                {
                  "levelspan": "1",
                  "value": "56"
                },
                {
                  "levelspan": "1",
                  "value": "92"
                },
                {
                  "levelspan": "1",
                  "value": "140"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "shackles/cuffs/gag",
            "name": "Shackles/Cuffs/Gag",
            "description": "Deals melee STR-based Cut damage to one enemy. Has a chance to inflict leg bind/arm bind/head bind.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(shackles):_whips",
                "level": 2
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "157%"
                },
                {
                  "levelspan": "1",
                  "value": "171%"
                },
                {
                  "levelspan": "1",
                  "value": "187%"
                },
                {
                  "levelspan": "1",
                  "value": "205%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "48%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "ecstasy",
            "name": "Ecstasy",
            "description": "If used against an enemy that is fully bound, a massive amount of melee STR-based Cut damage is dealt. Otherwise, the Dark Hunter only deals 100% damage.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "whips",
                "level": 8
              },
              {
                "_id": "str_up",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "500%"
                },
                {
                  "levelspan": "1",
                  "value": "525%"
                },
                {
                  "levelspan": "1",
                  "value": "575%"
                },
                {
                  "levelspan": "1",
                  "value": "650%"
                },
                {
                  "levelspan": "1",
                  "value": "750%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "83%"
                },
                {
                  "levelspan": "1",
                  "value": "89%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "climax",
            "name": "Climax",
            "description": "Targets one enemy. If they are under a certain HP threshold, they are instantly killed, and the Dark Hunter is healed for any HP they had remaining. If the enemy is over the HP threshold, the skill will always miss. If the enemy is under the HP threshold, but is immune to instant death, the Dark Hunter only deals 100% melee STR-based Cut damage to them instead. Accuracy is only checked for in that case. Climax does not have a success rate. It cannot miss if the target is under the HP threshold and is not immune to instant death.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "whips",
                "level": 6
              }
            ],
            "growth_order": [
              "TP Cost",
              "HP Threshold",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "HP Threshold": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "38%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "hypnos/nerve",
            "name": "Hypnos/Nerve",
            "description": "Deals melee STR-based Cut damage to one enemy. Has a chance to inflict sleep/paralysis.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(hypnos):_swords",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "141%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "177%"
                },
                {
                  "levelspan": "1",
                  "value": "191%"
                },
                {
                  "levelspan": "1",
                  "value": "187%"
                },
                {
                  "levelspan": "1",
                  "value": "225%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "48%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "mirage",
            "name": "Mirage",
            "description": "Deals melee STR-based Cut damage to one enemy. Has a chance to inflict confusion.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "drain",
            "name": "Drain",
            "description": "Deals melee STR-based Cut damage to one enemy. The Dark Hunter is healed for a portion of the damage they deal.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 4
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Damage as Healing",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "180%"
                }
              ],
              "Damage as Healing": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "petrify",
            "name": "Petrify",
            "description": "Deals melee STR-based Cut damage to one enemy. Has a chance to inflict petrification.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(nerve):_swords",
                "level": 6
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "141%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "177%"
                },
                {
                  "levelspan": "1",
                  "value": "191%"
                },
                {
                  "levelspan": "1",
                  "value": "187%"
                },
                {
                  "levelspan": "1",
                  "value": "225%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "38%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "bait/magibait",
            "name": "Bait/Magibait",
            "description": "At the start of the turn, the Dark Hunter sets up a trap. If they or any party member adjacent to them get attacked with a physical/elemental attack, the Dark Hunter has a chance of dealing melee STR-based Cut damage to the attacker. The counters will still activate even if the damage taken was nullified through the use of methods such as Painless.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "swords",
                "level": 8
              },
              {
                "_id": "whips",
                "level": 8
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Counter Chance",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "175%"
                },
                {
                  "levelspan": "1",
                  "value": "225%"
                },
                {
                  "levelspan": "1",
                  "value": "300%"
                },
                {
                  "levelspan": "1",
                  "value": "400%"
                }
              ],
              "Counter Chance": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "107%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(d)_unbind",
            "name": "(D) Unbind",
            "description": "Removes binds from one party member.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "tec_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Binds Removed",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Binds Removed": [
                {
                  "levelspan": "2",
                  "value": "1"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "racket",
            "name": "Racket",
            "description": "Can only be used on the field. Any non-red FOEs within a certain range will be lured to the tile this skill gets used on. Once they reach that tile, they will be stunned for a set duration.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Lure Radius",
              "Stun Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Lure Radius": [
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "2",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ],
              "Stun Duration": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_dominate",
            "name": "Dominate",
            "description": "Binds an enemy's head, arms, and legs with a 10000% success rate. Nothing in the game is immune to any bind, so it is guaranteed to work. Has a 1% speed modifier.",
            "max_level": 0,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Medic",
    "branches": [
      {
        "branch_name": "Medic",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "healer",
            "name": "Healer",
            "description": "Needed to learn healing skills. Passively increases the amount of HP restored through non-fixed sources.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Heal Increase"
            ],
            "growth": {
              "Heal Increase": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "38%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "patch_up",
            "name": "Patch Up",
            "description": "Passively restores a percentage of each party members max HP at the end of each battle.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "% of HP Restored"
            ],
            "growth": {
              "% of HP Restored": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "tp_regen",
            "name": "TP Regen",
            "description": "Passively restores the Medic's TP at the end of each turn.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "tp_up",
                "level": 10
              },
              {
                "_id": "tec_up",
                "level": 10
              }
            ],
            "growth_order": [
              "TP Restored"
            ],
            "growth": {
              "TP Restored": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_scavenge",
            "name": "(M) Scavenge",
            "description": "Passively increases the drop rate for each item the enemy has. The increase is additive and stacks with other instances of Scavenge.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Drop Rate Increase"
            ],
            "growth": {
              "Drop Rate Increase": [
                {
                  "levelspan": "1",
                  "value": "+1%"
                },
                {
                  "levelspan": "1",
                  "value": "+5%"
                },
                {
                  "levelspan": "1",
                  "value": "+13%"
                },
                {
                  "levelspan": "1",
                  "value": "+25%"
                },
                {
                  "levelspan": "1",
                  "value": "+41%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_cure",
            "name": "(M) Cure",
            "description": "Restores one party member's HP.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "35"
                },
                {
                  "levelspan": "1",
                  "value": "38"
                },
                {
                  "levelspan": "1",
                  "value": "44"
                },
                {
                  "levelspan": "1",
                  "value": "53"
                },
                {
                  "levelspan": "1",
                  "value": "65"
                },
                {
                  "levelspan": "1",
                  "value": "80"
                },
                {
                  "levelspan": "1",
                  "value": "98"
                },
                {
                  "levelspan": "1",
                  "value": "119"
                },
                {
                  "levelspan": "1",
                  "value": "143"
                },
                {
                  "levelspan": "1",
                  "value": "170"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_cure_2",
            "name": "(M) Cure 2",
            "description": "Restores one party member's HP.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "130"
                },
                {
                  "levelspan": "1",
                  "value": "134"
                },
                {
                  "levelspan": "1",
                  "value": "142"
                },
                {
                  "levelspan": "1",
                  "value": "154"
                },
                {
                  "levelspan": "1",
                  "value": "170"
                },
                {
                  "levelspan": "1",
                  "value": "190"
                },
                {
                  "levelspan": "1",
                  "value": "214"
                },
                {
                  "levelspan": "1",
                  "value": "242"
                },
                {
                  "levelspan": "1",
                  "value": "274"
                },
                {
                  "levelspan": "1",
                  "value": "310"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_cure_3",
            "name": "(M) Cure 3",
            "description": "Fully restores one party member's HP.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "38"
                },
                {
                  "levelspan": "1",
                  "value": "34"
                },
                {
                  "levelspan": "1",
                  "value": "30"
                },
                {
                  "levelspan": "1",
                  "value": "26"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "54%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_salve",
            "name": "(M) Salve",
            "description": "Restores the entire party's HP.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 3
              },
              {
                "_id": "cure",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                },
                {
                  "levelspan": "1",
                  "value": "27"
                },
                {
                  "levelspan": "1",
                  "value": "30"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "35"
                },
                {
                  "levelspan": "1",
                  "value": "43"
                },
                {
                  "levelspan": "1",
                  "value": "59"
                },
                {
                  "levelspan": "1",
                  "value": "83"
                },
                {
                  "levelspan": "1",
                  "value": "115"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "54%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_salve_2",
            "name": "(M) Salve 2",
            "description": "Restores the entire party's HP.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 6
              },
              {
                "_id": "cure_2",
                "level": 4
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "36"
                },
                {
                  "levelspan": "1",
                  "value": "39"
                },
                {
                  "levelspan": "1",
                  "value": "42"
                },
                {
                  "levelspan": "1",
                  "value": "45"
                },
                {
                  "levelspan": "1",
                  "value": "48"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "130"
                },
                {
                  "levelspan": "1",
                  "value": "140"
                },
                {
                  "levelspan": "1",
                  "value": "160"
                },
                {
                  "levelspan": "1",
                  "value": "190"
                },
                {
                  "levelspan": "1",
                  "value": "230"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "54%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "salve_3",
            "name": "Salve 3",
            "description": "Fully restores the entire party's HP.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 10
              },
              {
                "_id": "cure_3",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "74"
                },
                {
                  "levelspan": "1",
                  "value": "68"
                },
                {
                  "levelspan": "1",
                  "value": "62"
                },
                {
                  "levelspan": "1",
                  "value": "56"
                },
                {
                  "levelspan": "1",
                  "value": "50"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "54%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "revive",
            "name": "Revive",
            "description": "Brings a dead party member back to life.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "23"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "31"
                },
                {
                  "levelspan": "1",
                  "value": "46"
                },
                {
                  "levelspan": "1",
                  "value": "64"
                },
                {
                  "levelspan": "1",
                  "value": "85"
                },
                {
                  "levelspan": "1",
                  "value": "109"
                },
                {
                  "levelspan": "1",
                  "value": "136"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "53%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_unbind",
            "name": "(M) Unbind",
            "description": "Removes binds from one party member.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Binds Removed",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "2",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Binds Removed": [
                {
                  "levelspan": "2",
                  "value": "1"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "6",
                  "value": "3"
                }
              ],
              "Speed": [
                {
                  "levelspan": "10",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "freedom",
            "name": "Freedom",
            "description": "Removes binds from the entire party.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "unbind",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Binds Removed",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                }
              ],
              "Binds Removed": [
                {
                  "levelspan": "2",
                  "value": "1"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                }
              ],
              "Speed": [
                {
                  "levelspan": "5",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_refresh",
            "name": "(M) Refresh",
            "description": "Dispels certain status ailments from the entire party. Which ailments are dispelled depends on the skill's level. The higher the skill's level, the more ailments that can be dispelled. ",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Ailments Dispelled",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Ailments Dispelled": [
                {
                  "levelspan": "1",
                  "value": "Blind"
                },
                {
                  "levelspan": "1",
                  "value": "Poison"
                },
                {
                  "levelspan": "1",
                  "value": "Sleeep"
                },
                {
                  "levelspan": "1",
                  "value": "Fear"
                },
                {
                  "levelspan": "1",
                  "value": "Paralyze"
                },
                {
                  "levelspan": "1",
                  "value": "Curse"
                },
                {
                  "levelspan": "1",
                  "value": "Confuse"
                },
                {
                  "levelspan": "1",
                  "value": "Petrify"
                },
                {
                  "levelspan": "2",
                  "value": "N/A"
                }
              ],
              "Speed": [
                {
                  "levelspan": "10",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "purify",
            "name": "Purify",
            "description": "Dispels certain status ailments from the entire party. Which ailments are dispelled depends on the skill's level. The higher the skill's level, the more ailments that can be dispelled. Cannot dispel petrification, no matter how high its level is.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "refresh",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Ailments Dispelled",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                }
              ],
              "Ailments Dispelled": [
                {
                  "levelspan": "1",
                  "value": "Blind"
                },
                {
                  "levelspan": "1",
                  "value": "PoisonSleep"
                },
                {
                  "levelspan": "1",
                  "value": "FearParalyze"
                },
                {
                  "levelspan": "1",
                  "value": "CurseConfuse"
                },
                {
                  "levelspan": "1",
                  "value": "N/A"
                }
              ],
              "Speed": [
                {
                  "levelspan": "5",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "caduceus",
            "name": "Caduceus",
            "description": "Deals melee STR-based Bash damage to one enemy. Has a chance to inflict stun.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "str_up",
                "level": 10
              },
              {
                "_id": "vit_up",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "23"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                },
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "26"
                },
                {
                  "levelspan": "1",
                  "value": "27"
                },
                {
                  "levelspan": "1",
                  "value": "28"
                },
                {
                  "levelspan": "1",
                  "value": "29"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "200%"
                },
                {
                  "levelspan": "1",
                  "value": "205%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                },
                {
                  "levelspan": "1",
                  "value": "230%"
                },
                {
                  "levelspan": "1",
                  "value": "250%"
                },
                {
                  "levelspan": "1",
                  "value": "275%"
                },
                {
                  "levelspan": "1",
                  "value": "305%"
                },
                {
                  "levelspan": "1",
                  "value": "340%"
                },
                {
                  "levelspan": "1",
                  "value": "380%"
                },
                {
                  "levelspan": "1",
                  "value": "425%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "19%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "91%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "169%"
                },
                {
                  "levelspan": "1",
                  "value": "217%"
                },
                {
                  "levelspan": "1",
                  "value": "271%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "83%"
                },
                {
                  "levelspan": "1",
                  "value": "86%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "108%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "125%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "cpr",
            "name": "CPR",
            "description": "Places a buff on the entire party that has a chance of reviving them with 1 HP when they die. The buff lasts for 5 turns. Once the party member gets revived, the buff is dispelled.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "revive",
                "level": 10
              }
            ],
            "growth_order": [
              "TP Cost",
              "Activation Rate",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "23"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                }
              ],
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "38%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "phoenix",
            "name": "Phoenix",
            "description": "When used, the Medic's life is sacrificed to heal and revive the rest of the party.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "healer",
                "level": 10
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "46"
                },
                {
                  "levelspan": "1",
                  "value": "37"
                },
                {
                  "levelspan": "1",
                  "value": "29"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "200"
                },
                {
                  "levelspan": "1",
                  "value": "208"
                },
                {
                  "levelspan": "1",
                  "value": "224"
                },
                {
                  "levelspan": "1",
                  "value": "248"
                },
                {
                  "levelspan": "1",
                  "value": "280"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(m)_patrol",
            "name": "(M) Patrol",
            "description": "Can only be used on the field. Lowers damage taken from damage tiles for a set number of steps.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Damage Reduction",
              "Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                }
              ],
              "Damage Reduction": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Duration": [
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "50"
                },
                {
                  "levelspan": "1",
                  "value": "75"
                },
                {
                  "levelspan": "1",
                  "value": "100"
                },
                {
                  "levelspan": "1",
                  "value": "125"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_h._touch",
            "name": "H. Touch",
            "description": "Fully heals and revives the entire party, along with dispelling any status ailments they have. Has no effect on binds or stuns. Has a speed modifier of 1%.",
            "max_level": 0,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Alchemist",
    "branches": [
      {
        "branch_name": "Alchemist",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "fire_up",
            "name": "Fire Up",
            "description": "Needed to learn Fire spells. Passively increases damage dealt with Fire spells.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "ice_up",
            "name": "Ice Up",
            "description": "Needed to learn Ice spells. Passively increases damage dealt with Ice spells.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "volt_up",
            "name": "Volt Up",
            "description": "Needed to learn Volt spells. Passively increases damage dealt with Volt spells.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "phys_up",
            "name": "Phys Up",
            "description": "Needed to learn physical spells. Passively increases damage dealt with physical spells.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "str_up",
                "level": 3
              }
            ],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "analysis",
            "name": "Analysis",
            "description": "When the Alchemist strikes a weakness with one of their spells, the enemies in question take even more damage. Only affects spells. A weakness is counted as a damage resistance of 110% or above.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "tp_up",
                "level": 5
              },
              {
                "_id": "tec_up",
                "level": 5
              }
            ],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "fire/ice/volt",
            "name": "Fire/Ice/Volt",
            "description": "Deals ranged TEC-based Fire/Ice/Volt damage to one enemy.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(fire):_fire_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Spell Power",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                },
                {
                  "levelspan": "1",
                  "value": "26"
                }
              ],
              "Spell Power": [
                {
                  "levelspan": "1",
                  "value": "23"
                },
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "29"
                },
                {
                  "levelspan": "1",
                  "value": "35"
                },
                {
                  "levelspan": "1",
                  "value": "43"
                },
                {
                  "levelspan": "1",
                  "value": "53"
                },
                {
                  "levelspan": "1",
                  "value": "65"
                },
                {
                  "levelspan": "1",
                  "value": "79"
                },
                {
                  "levelspan": "1",
                  "value": "95"
                },
                {
                  "levelspan": "1",
                  "value": "113"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "151%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "171%"
                },
                {
                  "levelspan": "1",
                  "value": "178%"
                },
                {
                  "levelspan": "1",
                  "value": "186%"
                },
                {
                  "levelspan": "1",
                  "value": "195%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "flame/freeze/thunder",
            "name": "Flame/Freeze/Thunder",
            "description": "Deals ranged TEC-based Fire/Ice/Volt damage to one enemy. A 1.5x damage multiplier is applied to the Alchemist's base damage when using these skills.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(flame):_fire_up",
                "level": 5
              },
              {
                "_id": "fire",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Spell Power",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                },
                {
                  "levelspan": "1",
                  "value": "26"
                },
                {
                  "levelspan": "1",
                  "value": "28"
                },
                {
                  "levelspan": "1",
                  "value": "30"
                },
                {
                  "levelspan": "1",
                  "value": "32"
                },
                {
                  "levelspan": "1",
                  "value": "34"
                },
                {
                  "levelspan": "1",
                  "value": "36"
                }
              ],
              "Spell Power": [
                {
                  "levelspan": "1",
                  "value": "23"
                },
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "29"
                },
                {
                  "levelspan": "1",
                  "value": "35"
                },
                {
                  "levelspan": "1",
                  "value": "43"
                },
                {
                  "levelspan": "1",
                  "value": "53"
                },
                {
                  "levelspan": "1",
                  "value": "65"
                },
                {
                  "levelspan": "1",
                  "value": "79"
                },
                {
                  "levelspan": "1",
                  "value": "95"
                },
                {
                  "levelspan": "1",
                  "value": "113"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "82%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "151%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "171%"
                },
                {
                  "levelspan": "1",
                  "value": "178%"
                },
                {
                  "levelspan": "1",
                  "value": "186%"
                },
                {
                  "levelspan": "1",
                  "value": "195%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "inferno/cocytus/thor",
            "name": "Inferno/Cocytus/Thor",
            "description": "Deals ranged TEC-based Fire/Ice/Volt damage to all enemies.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(inferno):_fire_up",
                "level": 5
              },
              {
                "_id": "fire",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Spell Power",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "28"
                },
                {
                  "levelspan": "1",
                  "value": "36"
                },
                {
                  "levelspan": "1",
                  "value": "44"
                },
                {
                  "levelspan": "1",
                  "value": "52"
                }
              ],
              "Spell Power": [
                {
                  "levelspan": "1",
                  "value": "23"
                },
                {
                  "levelspan": "1",
                  "value": "29"
                },
                {
                  "levelspan": "1",
                  "value": "43"
                },
                {
                  "levelspan": "1",
                  "value": "65"
                },
                {
                  "levelspan": "1",
                  "value": "95"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "171%"
                },
                {
                  "levelspan": "1",
                  "value": "186%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "blades/gravity/piercing",
            "name": "Blades/Gravity/Piercing",
            "description": "Deals ranged TEC-based Cut/Bash/Stab damage to all enemies.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "phys_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Spell Power",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "28"
                },
                {
                  "levelspan": "1",
                  "value": "36"
                },
                {
                  "levelspan": "1",
                  "value": "44"
                },
                {
                  "levelspan": "1",
                  "value": "52"
                }
              ],
              "Spell Power": [
                {
                  "levelspan": "1",
                  "value": "23"
                },
                {
                  "levelspan": "1",
                  "value": "29"
                },
                {
                  "levelspan": "1",
                  "value": "43"
                },
                {
                  "levelspan": "1",
                  "value": "65"
                },
                {
                  "levelspan": "1",
                  "value": "95"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "171%"
                },
                {
                  "levelspan": "1",
                  "value": "186%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "megido",
            "name": "Megido",
            "description": "Deals ranged TEC-based untyped damage to one enemy. Has no damage type, so it ignores damage resistances altogether. A 1.5x damage multiplier is applied to the Alchemist's base damage when using this skill.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "tec_up",
                "level": 10
              },
              {
                "_id": "analysis",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Spell Power",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "29"
                },
                {
                  "levelspan": "1",
                  "value": "38"
                },
                {
                  "levelspan": "1",
                  "value": "47"
                },
                {
                  "levelspan": "1",
                  "value": "56"
                }
              ],
              "Spell Power": [
                {
                  "levelspan": "1",
                  "value": "30"
                },
                {
                  "levelspan": "1",
                  "value": "45"
                },
                {
                  "levelspan": "1",
                  "value": "75"
                },
                {
                  "levelspan": "1",
                  "value": "120"
                },
                {
                  "levelspan": "1",
                  "value": "180"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "51%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "171%"
                },
                {
                  "levelspan": "1",
                  "value": "186%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "return",
            "name": "Return",
            "description": "Can only be used in the field. Teleports the party to the last Geomagnetic Field they used. Has no effect if they came in from the entrance of the Labyrinth.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "30"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_eschaton",
            "name": "Eschaton",
            "description": "Deals ranged TEC-based untyped damage to all enemies. Has no damage type, so it ignores damage resistances altogether. A 1.5x damage multiplier is applied to the Alchemist's base damage when using this skill. Has a spell power of 200. Has a speed modifier of 300%. Has an accuracy modifier of 300%.",
            "max_level": 0,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Troubadour",
    "branches": [
      {
        "branch_name": "Troubadour",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "songs",
            "name": "Songs",
            "description": "Needed to learn song skills. Passively increases speed of song skills.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Speed Increase"
            ],
            "growth": {
              "Speed Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "divinity",
            "name": "Divinity",
            "description": "Passively increases the amount of EXP the party gains after battle. Stacks with other instances of Divinity.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "luc_up",
                "level": 10
              }
            ],
            "growth_order": [
              "EXP Increase"
            ],
            "growth": {
              "EXP Increase": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "bravery",
            "name": "Bravery",
            "description": "Increases the party's damage output for the duration of the battle. The damage buff is applied directly to the party members' base damage, so untyped attacks such as the Alchemist's Megido skill are also affected.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "songs",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "17%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                },
                {
                  "levelspan": "1",
                  "value": "32%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "67%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "shelter",
            "name": "Shelter",
            "description": "Decreases the amount of damage the party takes for the duration of the battle.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "songs",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Defense Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "Defense Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "67%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "mercury",
            "name": "Mercury",
            "description": "Increases the party's AGI for the duration of the battle.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "songs",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "AGI Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "AGI Increase": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "67%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "stamina",
            "name": "Stamina",
            "description": "Increases the party's maximum HP for the duration of the battle. When cast, the party's current HP will not be set to the new maximum.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "songs",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Max HP Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "Max HP Increase": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "67%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "blaze/frost/shock",
            "name": "Blaze/Frost/Shock",
            "description": "Imbues one party member's weapon with Fire/Ice/Volt, enabling them to deal Fire/Ice/Volt damage with their normal attacks.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "songs",
                "level": 7
              }
            ],
            "growth_order": [
              "TP Cost",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                },
                {
                  "levelspan": "1",
                  "value": "250%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "ifrit/ymir/taranis",
            "name": "Ifrit/Ymir/Taranis",
            "description": "Places a buff on the entire party that increases their resistance to Fire/Ice/Volt and places a debuff on all enemies that decreases their resistance to Fire/Ice/Volt. The buff lasts for the duration of the battle, while the debuff lasts for 5 turns. This is multiplier actually applied directly to their damage resistances, so the Alchemist's Analysis skill can activate on certain enemies that have this debuff.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(inferno):_songs",
                "level": 10
              },
              {
                "_id": "blaze",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Resistance Increase",
              "Resistance Decrease",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                }
              ],
              "Resistance Increase": [
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                }
              ],
              "Resistance Decrease": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "erasure",
            "name": "Erasure",
            "description": "Dispels buffs from one enemy.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "songs",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Buffs Dispelled",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Buffs Dispelled": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "3",
                  "value": "3"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "200%"
                },
                {
                  "levelspan": "1",
                  "value": "202%"
                },
                {
                  "levelspan": "1",
                  "value": "206%"
                },
                {
                  "levelspan": "1",
                  "value": "212%"
                },
                {
                  "levelspan": "1",
                  "value": "220%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "nihilo",
            "name": "Nihilo",
            "description": "Dispels buffs from all enemies.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "songs",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Buffs Dispelled",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                }
              ],
              "Buffs Dispelled": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "3",
                  "value": "3"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "health",
            "name": "Health",
            "description": "Places a buff on the entire party that reduces the chances of enemies inflicting status ailments on the party for the entire battle. Works against instant death but does not affect binds and stuns.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Chance Reduction",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "44%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "59%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "79%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "67%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "recovery",
            "name": "Recovery",
            "description": "Places a buff on the entire party that increases the rate at which they recover from status effects. This is added onto their Recovery Chance. Does not work against binds.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "songs",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Recovery Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                }
              ],
              "Recovery Increase": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "44%"
                },
                {
                  "levelspan": "1",
                  "value": "68%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "danger",
            "name": "Danger",
            "description": "Can only be used on the field. Increases the encounter rate by increasing the danger value of tiles for a set number of steps.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Danger Value Multiplier",
              "Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                }
              ],
              "Danger Value Multiplier": [
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "144%"
                },
                {
                  "levelspan": "1",
                  "value": "168%"
                },
                {
                  "levelspan": "1",
                  "value": "200%"
                }
              ],
              "Duration": [
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "40"
                },
                {
                  "levelspan": "1",
                  "value": "60"
                },
                {
                  "levelspan": "1",
                  "value": "80"
                },
                {
                  "levelspan": "1",
                  "value": "100"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "luring",
            "name": "Luring",
            "description": "Can only be used on the field. Any non-red FOEs within a certain range will be lured to the tile this skill gets used on. Once they reach that tile, they will be stunned for a set duration.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Lure Radius",
              "Stun Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Lure Radius": [
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "2",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ],
              "Stun Duration": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "slumber",
            "name": "Slumber",
            "description": "Can only be used on the field. Any non-red FOEs within a certain range will be stunned for a set duration.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Stun Radius",
              "Stun Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Stun Radius": [
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "2",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ],
              "Stun Duration": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_crusade",
            "name": "Crusade",
            "description": "When cast, the party has their attack and defense increased by 50%, and their maximum HP is doubled for the duration of the battle. The attack up, defense up, and maximum HP components all count as 3 separate buffs. For the purposes of overriding buffs, the ATK Up buff is placed first, the DEF Up buff is placed second, and the HP MAX Up buff is placed last. Meaning that any new buff will immediately override the ATK Up buff first. Has a speed modifier of 200%.",
            "max_level": 0,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Ronin",
    "branches": [
      {
        "branch_name": "Ronin",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "shiraha",
            "name": "Shiraha",
            "description": "Passively gives the Ronin a chance to nullify any damage they take. Does not count as evasion, and is completely independent of the Ronin's stats or any evasion boosts they may have.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "agi_up",
                "level": 8
              },
              {
                "_id": "luc_up",
                "level": 8
              }
            ],
            "growth_order": [
              "Activation Rate"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "overhead",
            "name": "Overhead",
            "description": "Needed to learn Overhead stance skills. Passively increases damage dealt with Overhead skills.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "seigan",
            "name": "Seigan",
            "description": "Needed to learn Seigan stance skills. Passively increases damage dealt with Seigan skills.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "iai",
            "name": "Iai",
            "description": "Needed to learn Iai stance skills. Passively increases damage dealt with Iai skills.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "clarity",
            "name": "Clarity",
            "description": "Passively increases the Ronin's evasion. The evasion boost increases when the Ronin's HP falls under certain thresholds.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "str_up",
                "level": 5
              }
            ],
            "growth_order": [
              "Evasion Increase (100% to 76%)",
              "Evasion Increase (75% to 51%)",
              "Evasion Increase (50% to 26%)",
              "Evasion Increase (25% to 2%)",
              "Evasion Increase (1%)"
            ],
            "growth": {
              "Evasion Increase (100% to 76%)": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                }
              ],
              "Evasion Increase (75% to 51%)": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                }
              ],
              "Evasion Increase (50% to 26%)": [
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "32%"
                }
              ],
              "Evasion Increase (25% to 2%)": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "32%"
                },
                {
                  "levelspan": "1",
                  "value": "36%"
                }
              ],
              "Evasion Increase (1%)": [
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "32%"
                },
                {
                  "levelspan": "1",
                  "value": "36%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "43%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "sayageki",
            "name": "Sayageki",
            "description": "Deals melee STR-based Bash damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "166%"
                },
                {
                  "levelspan": "1",
                  "value": "182%"
                },
                {
                  "levelspan": "1",
                  "value": "200%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "82%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "zamba",
            "name": "Zamba",
            "description": "Deals melee STR-based Cut damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "overhead",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "141%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "177%"
                },
                {
                  "levelspan": "1",
                  "value": "191%"
                },
                {
                  "levelspan": "1",
                  "value": "207%"
                },
                {
                  "levelspan": "1",
                  "value": "225%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "43%"
                },
                {
                  "levelspan": "1",
                  "value": "57%"
                },
                {
                  "levelspan": "1",
                  "value": "73%"
                },
                {
                  "levelspan": "1",
                  "value": "91%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "midareba",
            "name": "Midareba",
            "description": "Deals multiple instances of melee STR-based Cut damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "overhead",
                "level": 10
              },
              {
                "_id": "dead_law",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Number of Hits",
              "Total Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "72%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "132%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ],
              "Number of Hits": [
                {
                  "levelspan": "9",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                }
              ],
              "Total Damage": [
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "124%"
                },
                {
                  "levelspan": "1",
                  "value": "132%"
                },
                {
                  "levelspan": "1",
                  "value": "144%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                },
                {
                  "levelspan": "1",
                  "value": "180%"
                },
                {
                  "levelspan": "1",
                  "value": "204%"
                },
                {
                  "levelspan": "1",
                  "value": "232%"
                },
                {
                  "levelspan": "1",
                  "value": "264%"
                },
                {
                  "levelspan": "1",
                  "value": "420%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "43%"
                },
                {
                  "levelspan": "1",
                  "value": "57%"
                },
                {
                  "levelspan": "1",
                  "value": "73%"
                },
                {
                  "levelspan": "1",
                  "value": "91%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "koteuchi",
            "name": "Koteuchi",
            "description": "Deals melee STR-based Stab damage to one enemy. Has a chance to inflict arm bind.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "seigan",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "157%"
                },
                {
                  "levelspan": "1",
                  "value": "171%"
                },
                {
                  "levelspan": "1",
                  "value": "187%"
                },
                {
                  "levelspan": "1",
                  "value": "205%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "67%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "getsuei",
            "name": "Getsuei",
            "description": "Deals melee STR-based Stab damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "seigan",
                "level": 3
              },
              {
                "_id": "koteuchi",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "167%"
                },
                {
                  "levelspan": "1",
                  "value": "181%"
                },
                {
                  "levelspan": "1",
                  "value": "197%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "200%"
                },
                {
                  "levelspan": "1",
                  "value": "201%"
                },
                {
                  "levelspan": "1",
                  "value": "203%"
                },
                {
                  "levelspan": "1",
                  "value": "206%"
                },
                {
                  "levelspan": "1",
                  "value": "210%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                },
                {
                  "levelspan": "1",
                  "value": "221%"
                },
                {
                  "levelspan": "1",
                  "value": "228%"
                },
                {
                  "levelspan": "1",
                  "value": "236%"
                },
                {
                  "levelspan": "1",
                  "value": "245%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "kubiuchi",
            "name": "Kubiuchi",
            "description": "Deals melee STR-based Stab damage to one enemy. Has a chance to inflict instant death.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "iai",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "133%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "151%"
                },
                {
                  "levelspan": "1",
                  "value": "166%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "67%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "nukechi",
            "name": "Nukechi",
            "description": "Deals melee STR-based Cut damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "iai",
                "level": 3
              },
              {
                "_id": "kubiuchi",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "138%"
                },
                {
                  "levelspan": "1",
                  "value": "144%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "180%"
                },
                {
                  "levelspan": "1",
                  "value": "198%"
                },
                {
                  "levelspan": "1",
                  "value": "219%"
                },
                {
                  "levelspan": "1",
                  "value": "243%"
                },
                {
                  "levelspan": "1",
                  "value": "270%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "51%"
                },
                {
                  "levelspan": "1",
                  "value": "53%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "71%"
                },
                {
                  "levelspan": "1",
                  "value": "78%"
                },
                {
                  "levelspan": "1",
                  "value": "86%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "orochi/raizuki/hyosetsu",
            "name": "Orochi/Raizuki/Hyosetsu",
            "description": "Deals melee STR-based Cut+Fire/Volt+Stab/Cut+Ice to one enemy.",
            "max_level": 5,
            "uses": "Arm",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(orochi):_overhead",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "144%"
                },
                {
                  "levelspan": "1",
                  "value": "168%"
                },
                {
                  "levelspan": "1",
                  "value": "200%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "67%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "kienzan/minakata/hosoyuki",
            "name": "Kienzan/Minakata/Hosoyuki",
            "description": "Deals melee STR-based Cut+Fire/Volt+Stab/Cut+Ice to all enemies.",
            "max_level": 5,
            "uses": "Arm",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(orochi):_overhead",
                "level": 7
              },
              {
                "_id": "orochi",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "26"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "107%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "43%"
                },
                {
                  "levelspan": "1",
                  "value": "73%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "dead_law",
            "name": "Dead Law",
            "description": "Increases the Ronin's damage output at the cost of decreasing their defenses for 5 turns.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "str_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Attack Increase",
              "Defense Decrease",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "5",
                  "value": "2"
                }
              ],
              "Attack Increase": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                }
              ],
              "Defense Decrease": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "5",
                  "value": "100%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_issen",
            "name": "Issen",
            "description": "Deals 500% melee STR-based Cut damage to all enemies. Has a 50% chance to inflict instant death. Has a 1% speed modifier. Has a 100% accuracy modifier.",
            "max_level": 0,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Hexer",
    "branches": [
      {
        "branch_name": "Hexer",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "curses",
            "name": "Curses",
            "description": "Needed to learn curse skills. Has absolutely no effect otherwise.",
            "max_level": 0,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(h)_scavenge",
            "name": "(H) Scavenge",
            "description": "Passively increases the drop rate for each item the enemy has. The increase is additive and stacks with other instances of Scavenge.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "tp_up",
                "level": 5
              },
              {
                "_id": "tec_up",
                "level": 5
              }
            ],
            "growth_order": [
              "Drop Rate Increase"
            ],
            "growth": {
              "Drop Rate Increase": [
                {
                  "levelspan": "1",
                  "value": "+1%"
                },
                {
                  "levelspan": "1",
                  "value": "+5%"
                },
                {
                  "levelspan": "1",
                  "value": "+13%"
                },
                {
                  "levelspan": "1",
                  "value": "+25%"
                },
                {
                  "levelspan": "1",
                  "value": "+41%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "sapping",
            "name": "Sapping",
            "description": "Decreases all enemies' damage output for 5 turns.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "curses",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Attack Reduction",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "Attack Reduction": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "frailty",
            "name": "Frailty",
            "description": "Decreases all enemies' defense for 5 turns. This is multiplier actually applied directly to their damage resistances, so the Alchemist's Analysis skill can activate on certain enemies that have this debuff. Since it is a resistance multiplier, untyped attacks will not deal more damage against enemies with this debuff.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "curses",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Defense Reduction",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "Defense Reduction": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "17%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                },
                {
                  "levelspan": "1",
                  "value": "32%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "leaden",
            "name": "Leaden",
            "description": "Decreases all enemies agility for 5 turns.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "curses",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "AGI Reduction",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "AGI Reduction": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "39%"
                },
                {
                  "levelspan": "1",
                  "value": "48%"
                },
                {
                  "levelspan": "1",
                  "value": "58%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "dampen",
            "name": "Dampen",
            "description": "Adjusts an enemy's damage resistances to remove any resistances or immunities they have for 5 turns. This is not a multiplier. Any damage resistances on the enemy that are lower than the values listed here will be set to those values. Does not stack with Frailty, Ifrit, Ymir, or Taranis, as during damage calculation, this debuff is the last thing checked for.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "curses",
                "level": 10
              },
              {
                "_id": "scavenge",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Minimum Resistance",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "27"
                },
                {
                  "levelspan": "1",
                  "value": "29"
                },
                {
                  "levelspan": "1",
                  "value": "31"
                },
                {
                  "levelspan": "1",
                  "value": "33"
                }
              ],
              "Minimum Resistance": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "cranial/abdomen/immobile",
            "name": "Cranial/Abdomen/Immobile",
            "description": "Attempts to inflict head bind/arm bind/leg bind on one enemy.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "curses",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Infliction Rate",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "43%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "68%"
                },
                {
                  "levelspan": "1",
                  "value": "76%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "blinding/torpor/evil_eye/paralysis/corrupt",
            "name": "Blinding/Torpor/Evil Eye/Paralysis/Corrupt",
            "description": "Attempts to inflict blind/sleep/fear/paralysis/curse on all enemies.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(blinding):_curses",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Infliction Rate",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "57%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "poison",
            "name": "Poison",
            "description": "Attempts to inflict poison on all enemies.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "curses",
                "level": 2
              }
            ],
            "growth_order": [
              "TP Cost",
              "Infliction Rate",
              "Poison Damage",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "17%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "27%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "57%"
                },
                {
                  "levelspan": "1",
                  "value": "71%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                }
              ],
              "Poison Damage": [
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "31"
                },
                {
                  "levelspan": "1",
                  "value": "43"
                },
                {
                  "levelspan": "1",
                  "value": "61"
                },
                {
                  "levelspan": "1",
                  "value": "85"
                },
                {
                  "levelspan": "1",
                  "value": "115"
                },
                {
                  "levelspan": "1",
                  "value": "151"
                },
                {
                  "levelspan": "1",
                  "value": "193"
                },
                {
                  "levelspan": "1",
                  "value": "241"
                },
                {
                  "levelspan": "1",
                  "value": "295"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "suicide/betrayal/paralyze",
            "name": "Suicide/Betrayal/Paralyze",
            "description": "Targets one enemy at the start of the turn. If that enemy is inflicted with fear, they will attack themselves a number of times/attack a random enemy once/do nothing for the turn. Otherwise, the skill will have no effect.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "evil_eye",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Suicide Attacks"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                }
              ],
              "Suicide Attacks": [
                {
                  "levelspan": "2",
                  "value": "1"
                },
                {
                  "levelspan": "2",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "revenge",
            "name": "Revenge",
            "description": "Deals ranged untyped damage to one enemy. Damage depends on how much HP the Hexer is missing and is completely fixed. The skill has its own damage formula, which is equal to (MaxHP - CurrentHP) * SkillPower = Damage. Any defensive stats on the target such as VIT, TEC, or resistances are completely ignored. The skill's damage cannot be boosted by damage buffs or defensive debuffs. If the Hexer is at full HP, Revenge will always miss. For the purposes of accuracy only, this skill is counted as a TEC-based attack.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "curses",
                "level": 7
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "138%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                },
                {
                  "levelspan": "1",
                  "value": "183%"
                },
                {
                  "levelspan": "1",
                  "value": "204%"
                },
                {
                  "levelspan": "1",
                  "value": "228%"
                },
                {
                  "levelspan": "1",
                  "value": "255%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "162%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                },
                {
                  "levelspan": "1",
                  "value": "180%"
                },
                {
                  "levelspan": "1",
                  "value": "192%"
                },
                {
                  "levelspan": "1",
                  "value": "206%"
                },
                {
                  "levelspan": "1",
                  "value": "222%"
                },
                {
                  "levelspan": "1",
                  "value": "240%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_caprice",
            "name": "Caprice",
            "description": "Attempts to inflict every single status ailment at once on all enemies. How this skill works is that there is a priority system in place. First, the skill tries to inflict stun. Afterward, whether the attempt was successful or not, the skill then attempts to inflict all status ailments in this order: Instant death > Petrify > Fear > Curse > Poison > Sleep > Confuse > Paralyze > Blind. The game will continue checking for each status effect until one is applied, or none get applied, and repeats the process for the next enemy. If poison is the ailment chosen, it will deal 350 poison damage. Has an infliction rate of 95%. Has a speed modifier of 500%.",
            "max_level": 0,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Gunner",
    "branches": [
      {
        "branch_name": "Gunner",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "guns",
            "name": "Guns",
            "description": "Needed to learn gun skills. Passively increases damage dealt with guns.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(g)_2-hit",
            "name": "(G) 2-Hit",
            "description": "Normal attacks have a chance of hitting twice.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "guns",
                "level": 10
              }
            ],
            "growth_order": [
              "Activation Rate"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "24%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "weakshot",
            "name": "Weakshot",
            "description": "Passively increases the chance that a normal attack will become a critical hit. The chance from this passive is added onto the Gunner's critical hit rate.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Critical Increase"
            ],
            "growth": {
              "Critical Increase": [
                {
                  "levelspan": "1",
                  "value": "+1%"
                },
                {
                  "levelspan": "1",
                  "value": "+2%"
                },
                {
                  "levelspan": "1",
                  "value": "+4%"
                },
                {
                  "levelspan": "1",
                  "value": "+6%"
                },
                {
                  "levelspan": "1",
                  "value": "+9%"
                },
                {
                  "levelspan": "1",
                  "value": "+12%"
                },
                {
                  "levelspan": "1",
                  "value": "+16%"
                },
                {
                  "levelspan": "1",
                  "value": "+20%"
                },
                {
                  "levelspan": "1",
                  "value": "+25%"
                },
                {
                  "levelspan": "1",
                  "value": "+30%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "legshot/armshot/headshot",
            "name": "Legshot/Armshot/Headshot",
            "description": "Deals ranged STR-based Stab damage to one enemy. Has a chance to inflict leg bind/arm bind/head bind.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(legshot):_guns",
                "level": 2
              },
              {
                "_id": "agi_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "138%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "36%"
                },
                {
                  "levelspan": "1",
                  "value": "38%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "riskshot",
            "name": "Riskshot",
            "description": "At the start of the turn, the Gunner prepares to deal ranged STR-based Stab damage to one enemy. Until they fire the shot, they will take extra damage from all attacks.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "guns",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Self-Damage Multiplier",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "250%"
                },
                {
                  "levelspan": "1",
                  "value": "256%"
                },
                {
                  "levelspan": "1",
                  "value": "270%"
                },
                {
                  "levelspan": "1",
                  "value": "292%"
                },
                {
                  "levelspan": "1",
                  "value": "322%"
                }
              ],
              "Self-Damage Multiplier": [
                {
                  "levelspan": "1",
                  "value": "520%"
                },
                {
                  "levelspan": "1",
                  "value": "418%"
                },
                {
                  "levelspan": "1",
                  "value": "340%"
                },
                {
                  "levelspan": "1",
                  "value": "286%"
                },
                {
                  "levelspan": "1",
                  "value": "256%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "5",
                  "value": "1%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "stunshot",
            "name": "Stunshot",
            "description": "Deals ranged STR-based Stab damage to one enemy. Has a chance to inflict stun.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "guns",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "167%"
                },
                {
                  "levelspan": "1",
                  "value": "197%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "47%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "78%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "111%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "132%"
                },
                {
                  "levelspan": "1",
                  "value": "162%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "snipe",
            "name": "Snipe",
            "description": "Deals ranged STR-based Stab damage to one enemy. Cannot miss under any circumstances, even if the Gunner has their head bound or is blind.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "guns",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "200%"
                },
                {
                  "levelspan": "1",
                  "value": "210%"
                },
                {
                  "levelspan": "1",
                  "value": "230%"
                },
                {
                  "levelspan": "1",
                  "value": "260%"
                },
                {
                  "levelspan": "1",
                  "value": "300%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "5",
                  "value": "10000%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "fireshot/iceshot/voltshot",
            "name": "Fireshot/Iceshot/Voltshot",
            "description": "Deals ranged STR-based Fire/Ice/Volt damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "guns",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "167%"
                },
                {
                  "levelspan": "1",
                  "value": "181%"
                },
                {
                  "levelspan": "1",
                  "value": "197%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "48%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "riskfire/riskice/riskvolt",
            "name": "Riskfire/Riskice/Riskvolt",
            "description": "At the start of the turn, the Gunner prepares to deal ranged STR-based Fire/Ice/Volt damage to one enemy. Until they fire the shot, they will take extra damage from all attacks.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(riskfire):_guns",
                "level": 5
              },
              {
                "_id": "fireshot",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Self-Damage Multiplier",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "250%"
                },
                {
                  "levelspan": "1",
                  "value": "252%"
                },
                {
                  "levelspan": "1",
                  "value": "256%"
                },
                {
                  "levelspan": "1",
                  "value": "262%"
                },
                {
                  "levelspan": "1",
                  "value": "270%"
                },
                {
                  "levelspan": "1",
                  "value": "280%"
                },
                {
                  "levelspan": "1",
                  "value": "292%"
                },
                {
                  "levelspan": "1",
                  "value": "306%"
                },
                {
                  "levelspan": "1",
                  "value": "322%"
                },
                {
                  "levelspan": "1",
                  "value": "340%"
                }
              ],
              "Self-Damage Multiplier": [
                {
                  "levelspan": "1",
                  "value": "520%"
                },
                {
                  "levelspan": "1",
                  "value": "466%"
                },
                {
                  "levelspan": "1",
                  "value": "418%"
                },
                {
                  "levelspan": "1",
                  "value": "376%"
                },
                {
                  "levelspan": "1",
                  "value": "340%"
                },
                {
                  "levelspan": "1",
                  "value": "310%"
                },
                {
                  "levelspan": "1",
                  "value": "286%"
                },
                {
                  "levelspan": "1",
                  "value": "268%"
                },
                {
                  "levelspan": "1",
                  "value": "256%"
                },
                {
                  "levelspan": "1",
                  "value": "250%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "10",
                  "value": "1%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "wildshot",
            "name": "Wildshot",
            "description": "Deals ranged STR-based Stab damage to all enemies.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "guns",
                "level": 7
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "ricochet",
            "name": "Ricochet",
            "description": "Deals several instances of ranged STR-based Stab damage to random enemies. Can hit the same enemy multiple times. The targets are predetermined when the Gunner attacks. If an enemy was targeted to take multiple hits, but dies before the rest of those hits come out, they will simply disappear and will not get redirected to other enemies.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "guns",
                "level": 10
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Number of Hits",
              "Speed",
              "Accuracy",
              "Chance of 1 Hit",
              "Chance of 2 Hits",
              "Chance of 3 Hits",
              "Chance of 4 Hits",
              "Chance of 5 Hits"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "125%"
                }
              ],
              "Number of Hits": [
                {
                  "levelspan": "1",
                  "value": "1-3"
                },
                {
                  "levelspan": "3",
                  "value": "2-4"
                },
                {
                  "levelspan": "1",
                  "value": "3-5"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ],
              "Chance of 1 Hit": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "4",
                  "value": "0%"
                }
              ],
              "Chance of 2 Hits": [
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "3",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "0%"
                }
              ],
              "Chance of 3 Hits": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "3",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                }
              ],
              "Chance of 4 Hits": [
                {
                  "levelspan": "1",
                  "value": "0%"
                },
                {
                  "levelspan": "3",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ],
              "Chance of 5 Hits": [
                {
                  "levelspan": "4",
                  "value": "0%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "medishot",
            "name": "Medishot",
            "description": "Dispels certain status ailments from the entire party. Which ailments are dispelled depends on the skill's level. The higher the skill's level, the more ailments that can be dispelled. Cannot dispel petrification, no matter how high its level is.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "tec_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Ailments Dispelled",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                }
              ],
              "Ailments Dispelled": [
                {
                  "levelspan": "1",
                  "value": "Blind"
                },
                {
                  "levelspan": "1",
                  "value": "PoisonSleep"
                },
                {
                  "levelspan": "1",
                  "value": "FearParalyze"
                },
                {
                  "levelspan": "1",
                  "value": "CurseConfuse"
                },
                {
                  "levelspan": "1",
                  "value": "N/A"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "haltshot",
            "name": "Haltshot",
            "description": "Can only be used on the field. Any non-red FOEs within a certain range will be stunned for a set duration.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Stun Radius",
              "Stun Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Stun Radius": [
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "2",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ],
              "Stun Duration": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_riot_gun",
            "name": "Riot Gun",
            "description": "Deals 525% melee STR-based Stab damage to one enemy, and has a 10000% chance to inflict Stun. Has a 500% speed modifier. Has a 150% accuracy modifier.",
            "max_level": 0,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "War Magus",
    "branches": [
      {
        "branch_name": "War Magus",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "war_edge",
            "name": "War Edge",
            "description": "Needed to learn sword skills. Passively increases damage dealt with swords.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Damage Increase"
            ],
            "growth": {
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "war_lore",
            "name": "War Lore",
            "description": "Needed to learn healing skills. Passively increases the amount of HP restored through non-fixed sources.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Heal Increase"
            ],
            "growth": {
              "Heal Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "regenall",
            "name": "Regenall",
            "description": "Passively restores the entire party's HP at the end of each turn.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "HP Restored"
            ],
            "growth": {
              "HP Restored": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "blindcut/venomcut/stuncut",
            "name": "Blindcut/Venomcut/Stuncut",
            "description": "Deals melee STR-based untyped damage to one enemy. Has no damage type, so it ignores damage resistances altogether. If the enemy is inflicted with blind/poison/paralysis, they have a chance to be inflicted with head bind/leg bind/arm bind.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "requirements_(blindcut):_war_edge",
                "level": 1
              },
              {
                "_id": "str_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "127%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "155%"
                },
                {
                  "levelspan": "1",
                  "value": "167%"
                },
                {
                  "levelspan": "1",
                  "value": "181%"
                },
                {
                  "levelspan": "1",
                  "value": "197%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "63%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "88%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "sleepcut",
            "name": "Sleepcut",
            "description": "Deals melee STR-based untyped damage to one enemy. Has no damage type, so it ignores damage resistances altogether. If the enemy is inflicted with sleep, they will take extra damage.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_edge",
                "level": 3
              },
              {
                "_id": "str_up",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Sleep Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "126%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "146%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "161%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                }
              ],
              "Sleep Damage": [
                {
                  "levelspan": "1",
                  "value": "250%"
                },
                {
                  "levelspan": "1",
                  "value": "253%"
                },
                {
                  "levelspan": "1",
                  "value": "259%"
                },
                {
                  "levelspan": "1",
                  "value": "268%"
                },
                {
                  "levelspan": "1",
                  "value": "280%"
                },
                {
                  "levelspan": "1",
                  "value": "295%"
                },
                {
                  "levelspan": "1",
                  "value": "313%"
                },
                {
                  "levelspan": "1",
                  "value": "334%"
                },
                {
                  "levelspan": "1",
                  "value": "358%"
                },
                {
                  "levelspan": "1",
                  "value": "385%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "fearcut",
            "name": "Fearcut",
            "description": "Deals melee STR-based untyped damage to one enemy. Has no damage type, so it ignores damage resistances altogether. If the enemy is inflicted with fear, the War Magus is healed for a portion of the damage they deal.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_edge",
                "level": 4
              },
              {
                "_id": "str_up",
                "level": 4
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Damage as Healing",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "126%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "146%"
                },
                {
                  "levelspan": "1",
                  "value": "153%"
                },
                {
                  "levelspan": "1",
                  "value": "161%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                }
              ],
              "Damage as Healing": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "51%"
                },
                {
                  "levelspan": "1",
                  "value": "53%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "71%"
                },
                {
                  "levelspan": "1",
                  "value": "78%"
                },
                {
                  "levelspan": "1",
                  "value": "86%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "cursecut",
            "name": "Cursecut",
            "description": "Deals melee STR-based untyped damage to one enemy. Has no damage type, so it ignores damage resistances altogether. If the enemy is inflicted with curse, the War Magus restores some TP equal to a portion of the damage they deal.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_edge",
                "level": 10
              },
              {
                "_id": "str_up",
                "level": 6
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Damage as TP",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "125%"
                },
                {
                  "levelspan": "1",
                  "value": "126%"
                },
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "135%"
                }
              ],
              "Damage as TP": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "51%"
                },
                {
                  "levelspan": "1",
                  "value": "53%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(w)_cure",
            "name": "(W) Cure",
            "description": "Restores one party member's HP.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "35"
                },
                {
                  "levelspan": "1",
                  "value": "37"
                },
                {
                  "levelspan": "1",
                  "value": "41"
                },
                {
                  "levelspan": "1",
                  "value": "47"
                },
                {
                  "levelspan": "1",
                  "value": "55"
                },
                {
                  "levelspan": "1",
                  "value": "65"
                },
                {
                  "levelspan": "1",
                  "value": "77"
                },
                {
                  "levelspan": "1",
                  "value": "91"
                },
                {
                  "levelspan": "1",
                  "value": "107"
                },
                {
                  "levelspan": "1",
                  "value": "125"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(w)_cure_2",
            "name": "(W) Cure 2",
            "description": "Restores one party member's HP.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "130"
                },
                {
                  "levelspan": "1",
                  "value": "133"
                },
                {
                  "levelspan": "1",
                  "value": "139"
                },
                {
                  "levelspan": "1",
                  "value": "148"
                },
                {
                  "levelspan": "1",
                  "value": "160"
                },
                {
                  "levelspan": "1",
                  "value": "175"
                },
                {
                  "levelspan": "1",
                  "value": "193"
                },
                {
                  "levelspan": "1",
                  "value": "214"
                },
                {
                  "levelspan": "1",
                  "value": "238"
                },
                {
                  "levelspan": "1",
                  "value": "265"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "77%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "117%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "165%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(w)_cure_3",
            "name": "(W) Cure 3",
            "description": "Fully restores one party member's HP.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "38"
                },
                {
                  "levelspan": "1",
                  "value": "34"
                },
                {
                  "levelspan": "1",
                  "value": "30"
                },
                {
                  "levelspan": "1",
                  "value": "26"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "54%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(w)_salve",
            "name": "(W) Salve",
            "description": "Restores the entire party's HP.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 7
              },
              {
                "_id": "cure",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                },
                {
                  "levelspan": "1",
                  "value": "27"
                },
                {
                  "levelspan": "1",
                  "value": "30"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "47"
                },
                {
                  "levelspan": "1",
                  "value": "55"
                },
                {
                  "levelspan": "1",
                  "value": "65"
                },
                {
                  "levelspan": "1",
                  "value": "77"
                },
                {
                  "levelspan": "1",
                  "value": "91"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "54%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(w)_salve_2",
            "name": "(W) Salve 2",
            "description": "Restores the entire party's HP.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 10
              },
              {
                "_id": "cure_2",
                "level": 4
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "36"
                },
                {
                  "levelspan": "1",
                  "value": "39"
                },
                {
                  "levelspan": "1",
                  "value": "42"
                },
                {
                  "levelspan": "1",
                  "value": "45"
                },
                {
                  "levelspan": "1",
                  "value": "48"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "148"
                },
                {
                  "levelspan": "1",
                  "value": "160"
                },
                {
                  "levelspan": "1",
                  "value": "175"
                },
                {
                  "levelspan": "1",
                  "value": "193"
                },
                {
                  "levelspan": "1",
                  "value": "214"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "54%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "warmight",
            "name": "Warmight",
            "description": "Increases one party member's damage output for 5 turns. The damage buff is applied directly to the party members' base damage, so untyped attacks such as the Alchemist's Megido skill are also affected.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 2
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                }
              ],
              "Damage Increase": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "rockskin",
            "name": "Rockskin",
            "description": "Decreases the amount of damage one party member takes for 5 turns.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 2
              }
            ],
            "growth_order": [
              "TP Cost",
              "Defense Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                }
              ],
              "Defense Increase": [
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "elkspeed",
            "name": "Elkspeed",
            "description": "Increases one party member's AGI takes for 5 turns.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 2
              }
            ],
            "growth_order": [
              "TP Cost",
              "AGI Increase",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                }
              ],
              "AGI Increase": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "erase",
            "name": "Erase",
            "description": "Dispels buffs from one enemy.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "war_lore",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Buffs Dispelled",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "1"
                }
              ],
              "Buffs Dispelled": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "3",
                  "value": "3"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "200%"
                },
                {
                  "levelspan": "1",
                  "value": "202%"
                },
                {
                  "levelspan": "1",
                  "value": "206%"
                },
                {
                  "levelspan": "1",
                  "value": "212%"
                },
                {
                  "levelspan": "1",
                  "value": "220%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "transfer",
            "name": "Transfer",
            "description": "Spends some of the War Magus' TP to restore one party member's TP.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "tp_up",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "TP Restored",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "25"
                },
                {
                  "levelspan": "1",
                  "value": "36"
                }
              ],
              "TP Restored": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "28"
                },
                {
                  "levelspan": "1",
                  "value": "40"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "200%"
                },
                {
                  "levelspan": "1",
                  "value": "202%"
                },
                {
                  "levelspan": "1",
                  "value": "206%"
                },
                {
                  "levelspan": "1",
                  "value": "212%"
                },
                {
                  "levelspan": "1",
                  "value": "220%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_invoke",
            "name": "Invoke",
            "description": "Fully restores the entire party's HP and places a buff on the party that increases their resistances to all damage types, other than untyped, by 50% for 5 turns. Does not revive dead allies or dispels ailments or binds. Has a speed modifier of 200%.",
            "max_level": 0,
            "uses": "Legs",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Beast",
    "branches": [
      {
        "branch_name": "Beast",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "loyalty",
            "name": "Loyalty",
            "description": "Passively gives the Beast a chance to take damage in another party member's place. Can activate multiple times per turn. When Loyalty activates, the defensive stats and buffs on the party member being defended get applied to the Beast, not their own. Has priority over the Protector's guarding skills, meaning that the Beast will take damage before those skills can mitigate them. Since this skill is a passive, it cannot be turned off once learned.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Activation Rate",
              "Self-Damage Multiplier"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "36%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "51%"
                },
                {
                  "levelspan": "1",
                  "value": "58%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "75%"
                }
              ],
              "Self-Damage Multiplier": [
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "99%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "93%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "84%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "78%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "autocure",
            "name": "Autocure",
            "description": "Passively restores a percentage of the Beast's max HP at the end of each battle.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "hp_up",
                "level": 3
              }
            ],
            "growth_order": [
              "% of HP Restored"
            ],
            "growth": {
              "% of HP Restored": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "9%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "autoheal",
            "name": "Autoheal",
            "description": "Passively gives the Beast a chance to recover from any status effects at the start of the turn. This is not related to Recover Chance. The game checks for those separately.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "autocure",
                "level": 5
              }
            ],
            "growth_order": [
              "Activation Rate"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "(b)_en_garde",
            "name": "(B) En Garde",
            "description": "Passively gives the Protector a chance to reduce any instance of damage they take by 50%. Does not work with Loyalty activations.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "vit_up",
                "level": 10
              }
            ],
            "growth_order": [
              "Activation Rate"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "38%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "tenacity",
            "name": "Tenacity",
            "description": "If the Beast dies, this passive has a chance to revive them with 1 HP. Can activate multiple times per battle. Won't activate if the Beast gets killed by instant death. Works with Loyalty activations.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "autoheal",
                "level": 5
              }
            ],
            "growth_order": [
              "Activation Rate"
            ],
            "growth": {
              "Activation Rate": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "19%"
                },
                {
                  "levelspan": "1",
                  "value": "28%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "maul",
            "name": "Maul",
            "description": "Deals melee STR-based Bash damage to one enemy. The damage increases when the Beast's HP falls under certain thresholds. From 100% to 76%, the base damage is multiplied by 1.27. From 75% to 51%, the base damage is multiplied by 1.47. From 50% to 26%, the base damage is multiplied by 1.7. And the base damage is multiplied by 1.96 when the Beast's HP falls below that threshold.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Base Damage",
              "Damage (100% to 76%)",
              "Damage (75% to 51%)",
              "Damage (50% to 26%)",
              "Damage (25% to 1%)",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                }
              ],
              "Base Damage": [
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "104%"
                },
                {
                  "levelspan": "1",
                  "value": "107%"
                },
                {
                  "levelspan": "1",
                  "value": "111%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "137%"
                },
                {
                  "levelspan": "1",
                  "value": "146%"
                }
              ],
              "Damage (100% to 76%)": [
                {
                  "levelspan": "1",
                  "value": "128%"
                },
                {
                  "levelspan": "1",
                  "value": "129%"
                },
                {
                  "levelspan": "1",
                  "value": "132%"
                },
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "147%"
                },
                {
                  "levelspan": "1",
                  "value": "154%"
                },
                {
                  "levelspan": "1",
                  "value": "163%"
                },
                {
                  "levelspan": "1",
                  "value": "173%"
                },
                {
                  "levelspan": "1",
                  "value": "185%"
                }
              ],
              "Damage (75% to 51%)": [
                {
                  "levelspan": "1",
                  "value": "148%"
                },
                {
                  "levelspan": "1",
                  "value": "149%"
                },
                {
                  "levelspan": "1",
                  "value": "152%"
                },
                {
                  "levelspan": "1",
                  "value": "157%"
                },
                {
                  "levelspan": "1",
                  "value": "163%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                },
                {
                  "levelspan": "1",
                  "value": "179%"
                },
                {
                  "levelspan": "1",
                  "value": "189%"
                },
                {
                  "levelspan": "1",
                  "value": "201%"
                },
                {
                  "levelspan": "1",
                  "value": "214%"
                }
              ],
              "Damage (50% to 26%)": [
                {
                  "levelspan": "1",
                  "value": "171%"
                },
                {
                  "levelspan": "1",
                  "value": "173%"
                },
                {
                  "levelspan": "1",
                  "value": "176%"
                },
                {
                  "levelspan": "1",
                  "value": "181%"
                },
                {
                  "levelspan": "1",
                  "value": "188%"
                },
                {
                  "levelspan": "1",
                  "value": "197%"
                },
                {
                  "levelspan": "1",
                  "value": "207%"
                },
                {
                  "levelspan": "1",
                  "value": "219%"
                },
                {
                  "levelspan": "1",
                  "value": "232%"
                },
                {
                  "levelspan": "1",
                  "value": "248%"
                }
              ],
              "Damage (25% to 1%)": [
                {
                  "levelspan": "1",
                  "value": "197%"
                },
                {
                  "levelspan": "1",
                  "value": "199%"
                },
                {
                  "levelspan": "1",
                  "value": "203%"
                },
                {
                  "levelspan": "1",
                  "value": "209%"
                },
                {
                  "levelspan": "1",
                  "value": "217%"
                },
                {
                  "levelspan": "1",
                  "value": "227%"
                },
                {
                  "levelspan": "1",
                  "value": "239%"
                },
                {
                  "levelspan": "1",
                  "value": "252%"
                },
                {
                  "levelspan": "1",
                  "value": "268%"
                },
                {
                  "levelspan": "1",
                  "value": "286%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "115%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                },
                {
                  "levelspan": "1",
                  "value": "235%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "123%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "devour",
            "name": "Devour",
            "description": "Deals melee STR-based Bash damage to one enemy. The Beasat is healed for a portion of the damage they deal.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "maul",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Damage as Healing",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "136%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "202%"
                }
              ],
              "Damage as Healing": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "23%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "73%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "91%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "1",
                  "value": "98%"
                },
                {
                  "levelspan": "1",
                  "value": "101%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "131%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "bodyslam",
            "name": "Bodyslam",
            "description": "Deals melee STR-based Bash damage to one enemy. Has a chance to inflict stun.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Infliction Rate",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                },
                {
                  "levelspan": "1",
                  "value": "135%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                },
                {
                  "levelspan": "1",
                  "value": "210%"
                },
                {
                  "levelspan": "1",
                  "value": "255%"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "11%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "29%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "46%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "13%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "61%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "113%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "181%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "76%"
                },
                {
                  "levelspan": "1",
                  "value": "78%"
                },
                {
                  "levelspan": "1",
                  "value": "81%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "111%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "rampage",
            "name": "Rampage",
            "description": "Deals several instances of ranged STR-based Bash damage to random enemies. Can hit the same enemy multiple times. The targets are predetermined when the Beast attacks. If an enemy was targeted to take multiple hits, but dies before the rest of those hits come out, they will simply disappear and will not get redirected to other enemies.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "bodyslam",
                "level": 5
              },
              {
                "_id": "loyalty",
                "level": 10
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Number of Hits",
              "Speed",
              "Accuracy",
              "Chance of 3 Hits",
              "Chance of 4 Hits",
              "Chance of 5 Hits",
              "Chance of 6 Hits"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "16"
                },
                {
                  "levelspan": "1",
                  "value": "18"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "24"
                },
                {
                  "levelspan": "1",
                  "value": "26"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "72%"
                },
                {
                  "levelspan": "1",
                  "value": "76%"
                },
                {
                  "levelspan": "1",
                  "value": "82%"
                },
                {
                  "levelspan": "1",
                  "value": "90%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "126%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "160%"
                }
              ],
              "Number of Hits": [
                {
                  "levelspan": "1",
                  "value": "3-4"
                },
                {
                  "levelspan": "6",
                  "value": "3-5"
                },
                {
                  "levelspan": "3",
                  "value": "3-6"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "82%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "33%"
                },
                {
                  "levelspan": "1",
                  "value": "36%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "51%"
                },
                {
                  "levelspan": "1",
                  "value": "58%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                },
                {
                  "levelspan": "1",
                  "value": "75%"
                }
              ],
              "Chance of 3 Hits": [
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "4",
                  "value": "10%"
                }
              ],
              "Chance of 4 Hits": [
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "75%"
                },
                {
                  "levelspan": "1",
                  "value": "65%"
                },
                {
                  "levelspan": "1",
                  "value": "55%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                }
              ],
              "Chance of 5 Hits": [
                {
                  "levelspan": "1",
                  "value": "0%"
                },
                {
                  "levelspan": "2",
                  "value": "5%"
                },
                {
                  "levelspan": "2",
                  "value": "10%"
                },
                {
                  "levelspan": "2",
                  "value": "15%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "2",
                  "value": "25%"
                }
              ],
              "Chance of 6 Hits": [
                {
                  "levelspan": "7",
                  "value": "0%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "claw",
            "name": "Claw",
            "description": "Deals melee STR-based Cut damage to one enemy.",
            "max_level": 10,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "122%"
                },
                {
                  "levelspan": "1",
                  "value": "126%"
                },
                {
                  "levelspan": "1",
                  "value": "132%"
                },
                {
                  "levelspan": "1",
                  "value": "140%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "162%"
                },
                {
                  "levelspan": "1",
                  "value": "176%"
                },
                {
                  "levelspan": "1",
                  "value": "192%"
                },
                {
                  "levelspan": "1",
                  "value": "210%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "500%"
                },
                {
                  "levelspan": "1",
                  "value": "350%"
                },
                {
                  "levelspan": "1",
                  "value": "245%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "121%"
                },
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "42%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "116%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "108%"
                },
                {
                  "levelspan": "1",
                  "value": "104%"
                },
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "96%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                },
                {
                  "levelspan": "1",
                  "value": "88%"
                },
                {
                  "levelspan": "1",
                  "value": "84%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "wildcut",
            "name": "Wildcut",
            "description": "Deals melee STR-based Cut damage to all enemies.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "claw",
                "level": 5
              }
            ],
            "growth_order": [
              "TP Cost",
              "Damage",
              "Speed",
              "Accuracy"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "17"
                },
                {
                  "levelspan": "1",
                  "value": "19"
                },
                {
                  "levelspan": "1",
                  "value": "21"
                },
                {
                  "levelspan": "1",
                  "value": "23"
                }
              ],
              "Damage": [
                {
                  "levelspan": "1",
                  "value": "150%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "170%"
                },
                {
                  "levelspan": "1",
                  "value": "192%"
                },
                {
                  "levelspan": "1",
                  "value": "222%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "5",
                  "value": "1%"
                }
              ],
              "Accuracy": [
                {
                  "levelspan": "1",
                  "value": "85%"
                },
                {
                  "levelspan": "1",
                  "value": "87%"
                },
                {
                  "levelspan": "1",
                  "value": "91%"
                },
                {
                  "levelspan": "1",
                  "value": "97%"
                },
                {
                  "levelspan": "1",
                  "value": "105%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "bristle",
            "name": "Bristle",
            "description": "Increases the Beast's defenses against all damage types, but also lowers their damage output for 5 turns.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "loyalty",
                "level": 3
              }
            ],
            "growth_order": [
              "TP Cost",
              "Defense Increase",
              "Attack Decrease",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                }
              ],
              "Defense Increase": [
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "41%"
                },
                {
                  "levelspan": "1",
                  "value": "48%"
                },
                {
                  "levelspan": "1",
                  "value": "66%"
                }
              ],
              "Attack Decrease": [
                {
                  "levelspan": "1",
                  "value": "0%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "60%"
                },
                {
                  "levelspan": "1",
                  "value": "80%"
                },
                {
                  "levelspan": "1",
                  "value": "110%"
                },
                {
                  "levelspan": "1",
                  "value": "150%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "preen",
            "name": "Preen",
            "description": "Increases the Beast's physical defense and the chance of being targeted by enemies for 5 turns.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "loyalty",
                "level": 2
              }
            ],
            "growth_order": [
              "TP Cost",
              "Defense Increase",
              "Provoke Rate",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                }
              ],
              "Defense Increase": [
                {
                  "levelspan": "1",
                  "value": "0%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "6%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "12%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "16%"
                },
                {
                  "levelspan": "1",
                  "value": "18%"
                }
              ],
              "Provoke Rate": [
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "25%"
                },
                {
                  "levelspan": "1",
                  "value": "35%"
                },
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                },
                {
                  "levelspan": "1",
                  "value": "95%"
                },
                {
                  "levelspan": "4",
                  "value": "100%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "103%"
                },
                {
                  "levelspan": "1",
                  "value": "109%"
                },
                {
                  "levelspan": "1",
                  "value": "118%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "145%"
                },
                {
                  "levelspan": "1",
                  "value": "163%"
                },
                {
                  "levelspan": "1",
                  "value": "184%"
                },
                {
                  "levelspan": "1",
                  "value": "208%"
                },
                {
                  "levelspan": "1",
                  "value": "235%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "wildwall",
            "name": "Wildwall",
            "description": "At the start of the turn, the Beast prepares to any damage they take from melee attacks (physical or elemental) for the current turn. Remains active until the turn ends or the Beast dies. Every time the skill activates, the chance of it activating again is reduced. The base activation rate is 100% at all levels.",
            "max_level": 5,
            "uses": "Arms",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Chance Reduction",
              "Max Activations"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Chance Reduction": [
                {
                  "levelspan": "1",
                  "value": "40%"
                },
                {
                  "levelspan": "1",
                  "value": "30%"
                },
                {
                  "levelspan": "1",
                  "value": "20%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "5%"
                }
              ],
              "Max Activations": [
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "20"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "roar",
            "name": "Roar",
            "description": "Attempts to inflict fear on all enemies.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Infliction Rate",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "12"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                }
              ],
              "Infliction Rate": [
                {
                  "levelspan": "1",
                  "value": "1%"
                },
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "3%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "75%"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "50%"
                },
                {
                  "levelspan": "1",
                  "value": "52%"
                },
                {
                  "levelspan": "1",
                  "value": "56%"
                },
                {
                  "levelspan": "1",
                  "value": "62%"
                },
                {
                  "levelspan": "1",
                  "value": "70%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "saliva",
            "name": "Saliva",
            "description": "Restores one party member's HP.",
            "max_level": 10,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "10"
                },
                {
                  "levelspan": "1",
                  "value": "14"
                },
                {
                  "levelspan": "1",
                  "value": "22"
                },
                {
                  "levelspan": "1",
                  "value": "34"
                },
                {
                  "levelspan": "1",
                  "value": "50"
                },
                {
                  "levelspan": "1",
                  "value": "70"
                },
                {
                  "levelspan": "1",
                  "value": "94"
                },
                {
                  "levelspan": "1",
                  "value": "122"
                },
                {
                  "levelspan": "1",
                  "value": "154"
                },
                {
                  "levelspan": "1",
                  "value": "190"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "100%"
                },
                {
                  "levelspan": "1",
                  "value": "102%"
                },
                {
                  "levelspan": "1",
                  "value": "106%"
                },
                {
                  "levelspan": "1",
                  "value": "112%"
                },
                {
                  "levelspan": "1",
                  "value": "120%"
                },
                {
                  "levelspan": "1",
                  "value": "130%"
                },
                {
                  "levelspan": "1",
                  "value": "142%"
                },
                {
                  "levelspan": "1",
                  "value": "156%"
                },
                {
                  "levelspan": "1",
                  "value": "172%"
                },
                {
                  "levelspan": "1",
                  "value": "190%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "doze_off",
            "name": "Doze Off",
            "description": "Restores the Beast's HP at the cost of putting them to sleep.",
            "max_level": 5,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "loyalty",
                "level": 1
              }
            ],
            "growth_order": [
              "TP Cost",
              "Base Healing",
              "Speed"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "5",
                  "value": "1"
                }
              ],
              "Base Healing": [
                {
                  "levelspan": "1",
                  "value": "100"
                },
                {
                  "levelspan": "1",
                  "value": "120"
                },
                {
                  "levelspan": "1",
                  "value": "160"
                },
                {
                  "levelspan": "1",
                  "value": "220"
                },
                {
                  "levelspan": "1",
                  "value": "300"
                }
              ],
              "Speed": [
                {
                  "levelspan": "1",
                  "value": "200%"
                },
                {
                  "levelspan": "1",
                  "value": "205%"
                },
                {
                  "levelspan": "1",
                  "value": "215%"
                },
                {
                  "levelspan": "1",
                  "value": "230%"
                },
                {
                  "levelspan": "1",
                  "value": "250%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "howl",
            "name": "Howl",
            "description": "Can only be used on the field. Any non-red FOEs within a certain range will be lured to the tile this skill gets used on. Once they reach that tile, they will be stunned for a set duration.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Lure Radius",
              "Stun Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Lure Radius": [
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "2",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ],
              "Stun Duration": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "growl",
            "name": "Growl",
            "description": "Can only be used on the field. Any non-red FOEs within a certain range will be stunned for a set duration.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Cost",
              "Stun Radius",
              "Stun Duration"
            ],
            "growth": {
              "TP Cost": [
                {
                  "levelspan": "1",
                  "value": "15"
                },
                {
                  "levelspan": "1",
                  "value": "13"
                },
                {
                  "levelspan": "1",
                  "value": "11"
                },
                {
                  "levelspan": "1",
                  "value": "9"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                }
              ],
              "Stun Radius": [
                {
                  "levelspan": "2",
                  "value": "3"
                },
                {
                  "levelspan": "2",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ],
              "Stun Duration": [
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                },
                {
                  "levelspan": "1",
                  "value": "6"
                },
                {
                  "levelspan": "1",
                  "value": "7"
                },
                {
                  "levelspan": "1",
                  "value": "8"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "fetch",
            "name": "Fetch",
            "description": "Allows the party to gather from all kinds of item points a limited amount of times per day.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [
              {
                "_id": "luc_up",
                "level": 5
              },
              {
                "_id": "tec_up",
                "level": 5
              }
            ],
            "growth_order": [
              "Gathering Attempts"
            ],
            "growth": {
              "Gathering Attempts": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": true,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "force_skill:_salivall",
            "name": "Salivall",
            "description": "Heals and revives the entire party, along with dispelling any status ailments they have. Has no effect on binds or stuns. Has a base healing of 500. Has a speed modifier of 200%.",
            "max_level": 0,
            "uses": "Head",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          }
        ]
      }
    ]
  },
  {
    "source": null,
    "class": "Common Passives",
    "branches": [
      {
        "branch_name": "Common Passives",
        "skill_data": [
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "hp_up",
            "name": "HP Up",
            "description": "Increases maximum HP.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "HP Increase"
            ],
            "growth": {
              "HP Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "7%"
                },
                {
                  "levelspan": "1",
                  "value": "10%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "21%"
                },
                {
                  "levelspan": "1",
                  "value": "26%"
                },
                {
                  "levelspan": "1",
                  "value": "31%"
                },
                {
                  "levelspan": "1",
                  "value": "37%"
                },
                {
                  "levelspan": "1",
                  "value": "45%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "tp_up",
            "name": "TP Up",
            "description": "Increases maximum TP.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "TP Increase"
            ],
            "growth": {
              "TP Increase": [
                {
                  "levelspan": "1",
                  "value": "2%"
                },
                {
                  "levelspan": "1",
                  "value": "4%"
                },
                {
                  "levelspan": "1",
                  "value": "8%"
                },
                {
                  "levelspan": "1",
                  "value": "14%"
                },
                {
                  "levelspan": "1",
                  "value": "22%"
                },
                {
                  "levelspan": "1",
                  "value": "32%"
                },
                {
                  "levelspan": "1",
                  "value": "44%"
                },
                {
                  "levelspan": "1",
                  "value": "58%"
                },
                {
                  "levelspan": "1",
                  "value": "74%"
                },
                {
                  "levelspan": "1",
                  "value": "92%"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "str_up/tec_up/vit_up/agi_up/luc_up",
            "name": "STR Up/TEC Up/VIT Up/AGI Up/LUC Up",
            "description": "Increases the respective stats by 1 point per level.",
            "max_level": 10,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Stat Increase"
            ],
            "growth": {
              "Stat Increase": [
                {
                  "levelspan": "1",
                  "value": "+1"
                },
                {
                  "levelspan": "1",
                  "value": "+2"
                },
                {
                  "levelspan": "1",
                  "value": "+3"
                },
                {
                  "levelspan": "1",
                  "value": "+4"
                },
                {
                  "levelspan": "1",
                  "value": "+5"
                },
                {
                  "levelspan": "1",
                  "value": "+6"
                },
                {
                  "levelspan": "1",
                  "value": "+7"
                },
                {
                  "levelspan": "1",
                  "value": "+8"
                },
                {
                  "levelspan": "1",
                  "value": "+9"
                },
                {
                  "levelspan": "1",
                  "value": "+10"
                }
              ]
            }
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "esc_up",
            "name": "Esc Up",
            "description": "Increases the user's escape rate by 30%.",
            "max_level": 0,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [],
            "growth": {}
          },
          {
            "force_boost": false,
            "force_break": false,
            "force_skill": false,
            "transform_only": false,
            "mastery": false,
            "linked_skill": null,
            "no_level": false,
            "_id": "chop/take/mine",
            "name": "Chop/Take/Mine",
            "description": "Allows the party to gather from specific points a limited amount of times per day.",
            "max_level": 5,
            "uses": "N/A",
            "class_skill": false,
            "prerequisites": [],
            "growth_order": [
              "Gathering Attempts"
            ],
            "growth": {
              "Gathering Attempts": [
                {
                  "levelspan": "1",
                  "value": "1"
                },
                {
                  "levelspan": "1",
                  "value": "2"
                },
                {
                  "levelspan": "1",
                  "value": "3"
                },
                {
                  "levelspan": "1",
                  "value": "4"
                },
                {
                  "levelspan": "1",
                  "value": "5"
                }
              ]
            }
          }
        ]
      }
    ]
  }
];
    export default skillData;
    