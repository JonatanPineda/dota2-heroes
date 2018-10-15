import * as fromReducers from '../../reducers'
import * as fromSelectors from '../heroes.selectors'
import { IHero } from '../../../models/hero.model'

describe('HeroesSelectors', () => {
  const hero = {
    id: 1,
    localizedName: 'Anti-Mage'
  } as IHero

  const state: fromReducers.IState = {
      heroes: {
        entities: {
          1: hero
        },
        loaded: true,
        loading: false
      }
    }

  it('getHeroesState', () => {
    const actual = fromSelectors.getHeroesState(state)
    const expected = state.heroes
    
    expect(actual).toEqual(expected)
  })

  it('getHeroesEntities', () => {
    const actual = fromSelectors.getHeroesEntities(state)
    const expected = state.heroes.entities

    expect(actual).toEqual(expected)
  })

  it('getAllHeroes', () => {
    const actual: IHero[] = fromSelectors.getAllHeroes(state)
    const expected: IHero[] = [hero]

    expect(actual).toEqual(expected)
  })

  it('getHeroesLoading', () => {
    expect(fromSelectors.getHeroesLoading(state)).toEqual(false)
  })


  it('getHeroesLoaded', () => {
    expect(fromSelectors.getHeroesLoaded(state)).toEqual(true)
  })

})
