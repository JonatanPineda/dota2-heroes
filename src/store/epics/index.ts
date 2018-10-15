import * as fromHeroes from './heroes.epic'
import { combineEpics } from 'redux-observable'

export const rootEpic = combineEpics(
  fromHeroes.fetchHeroesEpic
)

export * from './heroes.epic'
