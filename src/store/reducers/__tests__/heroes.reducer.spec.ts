import * as fromHeroes from '../heroes.reducer'
import * as fromActions from '../../actions/heroes.action'
import { IHero } from '../../../models/hero.model'

describe('HeroesReducer', () => {
  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromHeroes
      const action = {} as any
      const state = fromHeroes.reducer(undefined, action) 
  
      expect(state).toBe(initialState)
    })
  })

  describe('HEROES_FETCH action', () => {
    it('should set loading to true', () => {
      const { initialState } = fromHeroes
      const action = fromActions.doFetchHeroes()
      const state = fromHeroes.reducer(initialState, action)
  
      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    })
  })

  describe('HEROES_FETCH_FULFILLED action', () => {
    const heroes: IHero[] = [
      {
        '1Pick': 3663,
        '1Win': 1825,
        '2Pick': 3663,
        '2Win': 1825,
        '3Pick': 3663,
        '3Win': 1825,
        '4Pick': 3663,
        '4Win': 1825,
        '5Pick': 3663,
        '5Win': 1825,
        '6Pick': 3663,
        '6Win': 1825,
        '7Pick': 3663,
        '7Win': 1825,
        '8Pick': 3663,
        '8Win': 1825,
        agiGain: 2.8,
        attackRange: 150,
        attackRate: 1.4,
        attackType: 'Melee',
        baseAgi: 22,
        baseArmor: -1,
        baseAttackMax: 33,
        baseAttackMin: 29,
        baseHealth: 200,
        baseHealthRegen: 1.75,
        baseInt: 12,
        baseMana: 75,
        baseManaRegen: 0.9,
        baseMr: 25,
        baseStr: 28,
        cmEnabled: true,
        heroId: 1,
        icon: 'https://api.opendota.com/apps/dota2/images/heroes/antimage_icon.png',
        id: 1,
        img: 'https://api.opendota.com/apps/dota2/images/heroes/antimage_full.png?', 
        intGain: 1.8,
        legs: 2,
        localizedName: 'Anti-Mage',
        moveSpeed: 310,
        name: 'npc_dota_hero_antimage',
      }
    ]

    const entities = {
      1: heroes[0]
    }
  })
})