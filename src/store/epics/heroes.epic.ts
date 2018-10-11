import * as heroesActions from '../actions/heroes.action'
import { ofType } from 'redux-observable'
import { map, switchMap } from 'rxjs/operators'
import { from } from 'rxjs'
import { IHero } from '../../models/hero.model'

export const fetchHeroesEpic = (action$, state$, { openDotaService }) => action$.pipe(
  ofType(heroesActions.HEROES_FETCH),
  switchMap(() =>
    from(openDotaService.getHeroes())
    .pipe(
      map(heroes => heroesActions.doFetchHeroesFulfilled(heroes))
    )
  )
)
