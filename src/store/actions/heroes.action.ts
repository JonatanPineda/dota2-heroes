import { IHero } from '../../models/hero.model'

export const HEROES_FETCH = 'HEROES_FETCH'
export const HEROES_FETCH_FULFILLED = 'HEROES_FETCH_FULFILLED'
export const HERO_VISUALIZE = 'HERO_VISUALIZE'

export interface IFetchHeroes {
  type: typeof HEROES_FETCH
}

export const doFetchHeroes = (): IFetchHeroes => ({
  type: HEROES_FETCH
})

export interface IFetchHeroesFulfilled {
  type: typeof HEROES_FETCH_FULFILLED
  payload: {
    heroes: IHero[]
  }
}

export const doFetchHeroesFulfilled = (heroes: IHero[]): IFetchHeroesFulfilled => ({
  type: HEROES_FETCH_FULFILLED,
  payload: {
    heroes
  }
})

export interface IVisualizeHero {
  type: typeof HERO_VISUALIZE
  payload: {
    heroId: number
  }
}

export const doVisualizeHero = (heroId: number): IVisualizeHero => ({
  type: HERO_VISUALIZE,
  payload: {
    heroId
  }
})

export type HeroAction = IFetchHeroes | IFetchHeroesFulfilled | IVisualizeHero