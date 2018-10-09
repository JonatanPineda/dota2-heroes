import OpenDotaService from '../opendota'

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
    "icon": "/apps/dota2/images/heroes/antimage_icon.png", 
    "id": 1, 
    "img": "/apps/dota2/images/heroes/antimage_full.png?", 
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
       "antimage_mana_break",
       "antimage_blink",
       "antimage_spell_shield",
       "generic_hidden",
       "generic_hidden",
       "antimage_mana_void",
     ]
    }
  ]

describe('Open Dota API service', () => {
  it('Should fetch heroes camelized with abilities and talents', async () => {
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
  })
})

