import { createSelector } from 'reselect'
import * as fromState from '../reducers'
import * as fromHeroes from '../reducers/heroes.reducer'
import { IHero } from 'src/models/hero.model';

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

export const getSelectedHero = createSelector(
  getHeroesState,
  fromHeroes.getSelectedHero
)

export const getHeroVisualized = createSelector(
  getSelectedHero,
  getHeroesEntities,
  (heroId, heroesEntities): IHero => {
    const hero = heroesEntities[heroId]
    
    return hero
  }
)