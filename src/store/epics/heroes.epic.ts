import * as heroesActions from '../actions/heroes.action'
import * as fromReducer from '../reducers'
import { ofType, ActionsObservable, StateObservable } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import { Observable }  from 'rxjs'
import { IHero } from '../../models/hero.model'

interface IFetchHeroesEpicDependencies {
  heroesService: {
    getHeroes: () => Observable<IHero[]>
  }
}

export const fetchHeroesEpic = (
  action$: ActionsObservable<heroesActions.HeroAction>, 
  state$: StateObservable<fromReducer.IState>, 
  { heroesService }: IFetchHeroesEpicDependencies
) => 
action$.pipe(
  ofType(heroesActions.HEROES_FETCH),
  switchMap(() => {
    return heroesService
      .getHeroes()
      .pipe(
        map(heroes => heroesActions.doFetchHeroesFulfilled(heroes))
      )
  })
)
