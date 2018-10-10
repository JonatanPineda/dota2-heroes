import * as fromHeroes from '../heroes.action'
import { IHero } from 'src/models/hero.model';

describe('Heroes Actions', () => {
  describe('FetchHeroes Actions', () => {
    describe('FetchHeroes', () => {
      it('should create an action', () => {
        const actual = fromHeroes.doFetchHeroes()
        const expected = {
          type: fromHeroes.HEROES_FETCH
        }
        
        expect(actual).toEqual(expected)
      })
    })

    describe('FetchHeroesFulfilled', () => {
      it('should create an action', () => {
        const heroes: IHero[] = []
        const actual = fromHeroes.doFetchHeroesFulfilled(heroes)
        const expected ={
          type: fromHeroes.HEROES_FETCH_FULFILLED,
          payload: {
            heroes
          }
        }

        expect(actual).toEqual(expected)
      })
    })
  })
})