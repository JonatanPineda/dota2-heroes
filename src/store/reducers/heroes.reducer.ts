import * as fromHeroes from '../actions/heroes.action'
import { IHero } from '../../models/hero.model'

export interface IHeroesState {
  entities: { [id: number]: IHero },
  loaded: boolean,
  loading: boolean
}

export const initialState = {
  entities: {},
  loaded: false,
  loading: false
}

export function reducer(
  state: IHeroesState = initialState,
  action: fromHeroes.HeroAction
): IHeroesState {
  switch(action.type) {
    case fromHeroes.HEROES_FETCH: {
      return {
        ...state,
        loading: true
      }
    }
    case fromHeroes.HEROES_FETCH_FULFILLED: {
      const heroes = action.payload.heroes
      const entities =  heroes.reduce(
        (entities: { [id: number]: IHero }, hero: IHero) => {
          return {
            ...entities,
            [hero.id]: hero
          }
        },
        {
          ...state.entities
        }
      )

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    }
  }

  return state
}

export const getHeroesEntities = (state: IHeroesState) => state.entities
export const getHeroesLoaded = (state: IHeroesState) => state.loaded
export const getHeroesLoading = (state: IHeroesState) => state.loading