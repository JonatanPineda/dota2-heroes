import { ActionsObservable, StateObservable } from "redux-observable"
import { IHero } from "src/models/hero.model";
import { fetchHeroesEpic } from '../heroes.epic'
import * as heroesActions from '../../actions/heroes.action'
import * as fromReducer from '../../reducers'
import { Subject } from 'rxjs';
import { toArray } from 'rxjs/operators';


describe('HeroesEpics', () => {
  describe('fetchHeroesEpic', () => {
    it('should return fetchHeroesFulfilled',  () => {
      const mockResponse = [] as IHero[]
      const state$ = new StateObservable<fromReducer.IState>(
        new Subject(), 
        fromReducer.initialState
      )
      const actions$ = ActionsObservable.of(heroesActions.doFetchHeroes())
      const dependencies = {
        heroesService: {
          getHeroes: () => Promise.resolve(mockResponse)
        }
      } 
      const result$ = fetchHeroesEpic(actions$, state$, dependencies).pipe(
        toArray()
      )

      result$.forEach(actions => {
        expect(actions).toEqual([{
          type: heroesActions.HEROES_FETCH_FULFILLED,
          payload: {
            heroes: []
          }
        }])
      })
    })
  })
})