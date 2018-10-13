import { ActionsObservable, StateObservable } from "redux-observable"
import { fetchHeroesEpic } from '../heroes.epic'
import * as heroesActions from '../../actions/heroes.action'
import * as fromReducer from '../../reducers'
import { Subject, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing'
 
const testScheduler = new TestScheduler((actual, expected) => {
  expect(actual).toEqual(expected)
});

describe('HeroesEpics', () => {
  describe('fetchHeroesEpic', () => {
    it('should return fetchHeroesFulfilled', () => {
      testScheduler.run(
        ({ hot, cold, expectObservable }) => {
          const state$ = new StateObservable<fromReducer.IState>(
            new Subject(),
            fromReducer.initialState
          )
          const actions$ = ActionsObservable.from(
            hot('-a', { a: heroesActions.doFetchHeroes() })
          )

          const dependencies = {
            heroesService: {
              getHeroes: () => cold('--a', { a: []})
            }
          }

          const output$ = fetchHeroesEpic(actions$, state$, dependencies)

          expectObservable(output$).toBe('---a', {
            a: heroesActions.doFetchHeroesFulfilled([])
          })
        }
      )
    })
    /*it('should return fetchHeroesFulfilled',  () => {
      const state$ = new StateObservable<fromReducer.IState>(
        new Subject(),
        fromReducer.initialState
      )
      const actions$ = ActionsObservable.of(heroesActions.doFetchHeroes())
      const dependencies = {
        heroesService: {
          getHeroes: () => Promise.resolve([])
        }
      } 
      const result$ = fetchHeroesEpic(actions$, state$, dependencies).pipe(
        toArray()
      )

      result$.forEach(actions => {
        expect(actions).toEqual([
          heroesActions.doFetchHeroesFulfilled([])
        ])
      })
    })*/
  })
})
