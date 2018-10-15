import { createSelector } from 'reselect'
import * as fromState from '../reducers'
import * as fromHeroes from '../reducers/heroes.reducer'

export const getHeroesState = createSelector(
  fromState.getState,
  (state: fromState.IState) => state.heroes
)

export const getHeroesEntities = createSelector(
  getHeroesState,
  fromHeroes.getHeroesEntities
)

export const getAllHeroes = createSelector(
  getHeroesEntities,
  entities => {
    return Object.keys(entities).map(id => entities[id])
  }
)

export const getHeroesLoaded = createSelector(
  getHeroesState,
  fromHeroes.getHeroesLoaded
)

export const getHeroesLoading = createSelector(
  getHeroesState,
  fromHeroes.getHeroesLoading
)
