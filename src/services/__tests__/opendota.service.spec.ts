import OpenDotaService from '../opendota.service'
import { TestScheduler } from 'rxjs/testing'
import { ajax } from 'rxjs/ajax'
import { of } from 'rxjs'

const heroesResponse = [
  {
    "id": 1,
    "name": "npc_dota_hero_antimage",
    "localized_name": "Anti-Mage",
    "primary_attr": "agi",
    "attack_type": "Melee",
    "roles": [
      "Carry",
      "Escape",
      "Nuker"
    ],
    "img": "/apps/dota2/images/heroes/antimage_full.png?",
    "icon": "/apps/dota2/images/heroes/antimage_icon.png",
    "base_health": 200,
    "base_health_regen": 1.75,
    "base_mana": 75,
    "base_mana_regen": 0.9,
    "base_armor": -1,
    "base_mr": 25,
    "base_attack_min": 29,
    "base_attack_max": 33,
    "base_str": 23,
    "base_agi": 22,
    "base_int": 12,
    "str_gain": 1.3,
    "agi_gain": 2.8,
    "int_gain": 1.8,
    "attack_range": 150,
    "projectile_speed": 0,
    "attack_rate": 1.4,
    "move_speed": 310,
    "turn_rate": 0.5,
    "cm_enabled": true,
    "legs": 2,
    "pro_ban": 25,
    "hero_id": 1,
    "pro_win": 16,
    "pro_pick": 30,
    "5_pick": 39178,
    "5_win": 20847,
    "8_pick": 144,
    "8_win": 80,
    "2_pick": 17197,
    "2_win": 8686,
    "6_pick": 10681,
    "6_win": 5712,
    "4_pick": 53642,
    "4_win": 28022,
    "1_pick": 3663,
    "1_win": 1825,
    "3_pick": 36842,
    "3_win": 19139,
    "7_pick": 1583,
    "7_win": 838
  }
]

const heroesResponseExpected = [
  {
    "1Pick": 3663,
    "1Win": 1825, 
    "2Pick": 17197, 
    "2Win": 8686, 
    "3Pick": 36842, 
    "3Win": 19139, 
    "4Pick": 53642, 
    "4Win": 28022, 
    "5Pick": 39178, 
    "5Win": 20847, 
    "6Pick": 10681, 
    "6Win": 5712, 
    "7Pick": 1583, 
    "7Win": 838, 
    "8Pick": 144, 
    "8Win": 80, 
    "agiGain": 2.8, 
    "attackRange": 150,
    "attackRate": 1.4, 
    "attackType": "Melee", 
    "baseAgi": 22, 
    "baseArmor": -1, 
    "baseAttackMax": 33, 
    "baseAttackMin": 29, 
    "baseHealth": 200, 
    "baseHealthRegen": 1.75, 
    "baseInt": 12, "baseMana": 75, 
    "baseManaRegen": 0.9, 
    "baseMr": 25, 
    "baseStr": 23, 
    "cmEnabled": true, 
    "heroId": 1, 
    "icon": "https://api.opendota.com/apps/dota2/images/heroes/antimage_icon.png", 
    "id": 1, 
    "img": "https://api.opendota.com/apps/dota2/images/heroes/antimage_full.png?", 
    "intGain": 1.8, 
    "legs": 2,
    "localizedName": "Anti-Mage",
     "moveSpeed": 310,
     "name": "npc_dota_hero_antimage", 
     "primaryAttr": "agi", 
     "proBan": 25, 
     "proPick": 30, 
     "proWin": 16, 
     "projectileSpeed": 0, 
     "roles": ["Carry", "Escape", "Nuker"], 
     "strGain": 1.3, 
     "turnRate": 0.5,
     "abilities":  [
       {
          "dname": "Mana Break",
          "behavior": "Passive",
          "dmgType": "Physical",
          "bkbpierce": "No",
          "desc": "Burns an opponent's mana on each attack.  Mana Break deals 50% of the mana burned as damage to the target.",
          "attrib": [
            {
              "key": "damage_per_burn",
              "header": "DAMAGE PER BURN:",
              "value": "0.5",
              "generated": true
            },
            {
              "key": "mana_per_hit",
              "header": "MANA BURNED PER HIT:",
              "value": [
                "28",
                "40",
                "52",
                "64"
              ]
            }
          ],
          "img": "https://api.opendota.com/apps/dota2/images/abilities/antimage_mana_break_md.png"
       },
       {
        "dname": "Blink",
        "behavior": "Point Target",
        "desc": "Short distance teleportation that allows Anti-Mage to move in and out of combat.",
        "attrib": [
          {
            "key": "blink_range",
            "header": "RANGE:",
            "value": [
              "925",
              "1000",
              "1075",
              "1150"
            ]
          },
          {
            "key": "min_blink_range",
            "header": "MIN BLINK RANGE:",
            "value": "200",
            "generated": true
          }
        ],
        "mc": "60",
        "cd": [
          "15",
          "12",
          "9",
          "6"
        ],
        "img": "https://api.opendota.com/apps/dota2/images/abilities/antimage_blink_md.png"
      },  
      {
        "dname": "Spell Shield",
        "behavior": "Passive",
        "desc": "Increases Anti-Mage's resistance to magic damage.\n\nUpgradable by Aghanim's Scepter.",
        "attrib": [
          {
            "key": "spell_shield_resistance",
            "header": "RESISTANCE:",
            "value": [
              "20%",
              "30%",
              "40%",
              "50%"
            ]
          },
          {
            "key": "scepter_cooldown",
            "header": "SCEPTER COOLDOWN:",
            "value": "12",
            "generated": true
          }
        ],
        "img": "https://api.opendota.com/apps/dota2/images/abilities/antimage_spell_shield_md.png"
      },
      {
        "attrib": [],
        "behavior": [
          "Hidden",
          null
        ],
        "img": "https://api.opendota.com/apps/dota2/images/abilities/generic_hidden_md.png",
      },
      {
        "attrib": [],
        "behavior": [
          "Hidden",
          null
        ],
        "img": "https://api.opendota.com/apps/dota2/images/abilities/generic_hidden_md.png",
      },
      {
        "dname": "Mana Void",
        "behavior": [
          "Unit Target",
          "AOE"
        ],
        "dmgType": "Magical",
        "bkbpierce": "Yes",
        "desc": "For each point of mana missing by the target unit, damage is dealt to it and surrounding enemies.  The main target is also mini-stunned.",
        "attrib": [
          {
            "key": "mana_void_damage_per_mana",
            "header": "DAMAGE:",
            "value": [
              "0.8",
              "0.95",
              "1.1"
            ]
          },
          {
            "key": "mana_void_ministun",
            "header": "STUN DURATION:",
            "value": "0.3"
          },
          {
            "key": "mana_void_aoe_radius",
            "header": "RADIUS:",
            "value": "500"
          }
        ],
        "mc": [
          "125",
          "200",
          "275"
        ],
        "cd": "70",
        "img": "https://api.opendota.com/apps/dota2/images/abilities/antimage_mana_void_md.png"
      }
     ],
     "talents": [
       { 
         "dname": "+10 Strength",
         "level": 1
       },
       {
         "dname": "+20 Attack Speed",
         "level": 1
       },
       {
         "dname": "+400 Blink Cast Range",
         "level": 2
       },
       {
         "dname": "+15 Agility",
         "level": 2
       },
       {
         "dname": "Blink Uncontrollable Illusion",
         "level": 3
       },
       {
         "dname": "-2.5s Blink Cooldown",
         "level": 3
       },
       {
         "dname": "+25% Spell Shield",
         "level": 4
       },
       {
         "dname": "-50s Mana Void Cooldown",
         "level": 4
       }     
     ]
    }
  ]

const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected)
})

describe('Open Dota API service', () => {
  it('Should fetch heroes', () => {
    testScheduler.run(({ hot, cold, expectObservable}) => {
      ajax.getJSON = jest.fn().mockImplementationOnce(
        () => cold('-a', {
          a: heroesResponse
        })
      )

      const actual = OpenDotaService.getHeroes()
      expectObservable(actual).toBe('-b', { b: heroesResponseExpected})
    })
})

/*it('Should fetch heroes camelized with abilities and talents', async () => {
    window.fetch = jest.fn().mockImplementationOnce(() => new Promise(
      (resolve, reject) => {
        resolve({
          json: () => heroesResponse  
        })
      }
    ))

    const actual = await OpenDotaService.getHeroes()
    const expected = heroesResponseExpected

    expect(actual).toEqual(expected)
  })*/
})
