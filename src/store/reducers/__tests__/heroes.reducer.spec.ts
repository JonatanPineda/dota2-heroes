import * as fromActions from '../../actions/heroes.action'
import { IHero } from '../../../models/hero.model'
import * as fromHeroes from '../heroes.reducer'

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
    it('should populate the heroes array', () => {
      const heroes: IHero[] = [
        { id: 1, localizedName: "Anti-Mage" }
      ] as IHero[]

      const entities = {
        1: heroes[0]
      }
      const { initialState } = fromHeroes
      const action = fromActions.doFetchHeroesFulfilled(heroes)
      const state = fromHeroes.reducer(initialState, action)

      expect(state.loaded).toEqual(true)
      expect(state.loading).toEqual(false)
      expect(state.entities).toEqual(entities)
    })
  })

  describe('HeroesReducer Selectors', () => {
    describe('getHeroesEntities', () => {
      it('should return .entities', () => {
        const entities: { [key: number]: IHero } = {
          1: { id: 1, localizedName: "Anti-Mage"} as IHero,
          2: { id: 2, localizedName: "Tinker"} as IHero
        }
        const { initialState } = fromHeroes
        const previousState = { ...initialState, entities }
        const slice = fromHeroes.getHeroesEntities(previousState)
        expect(slice).toEqual(entities)
      })
    })

    describe('getHeroesLoading', () => {
      it('should return .loading', () => {
        const { initialState } = fromHeroes
        const previousState = { ...initialState, loading: true }
        const slice = fromHeroes.getHeroesLoading(previousState)

        expect(slice).toEqual(true)
      })
    })

    describe('getHeroesLoaded', () => {
      it('should return .loaded', () => {
        const { initialState } = fromHeroes
        const previousState = { ...initialState, loaded: true }
        const slice = fromHeroes.getHeroesLoaded(previousState)

        expect(slice).toEqual(true)
      })
    })
  })
})
