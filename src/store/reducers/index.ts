import * as fromHeroes from './heroes.reducer'
import { combineReducers } from 'redux'

export interface IState {
  heroes: fromHeroes.IHeroesState
}

export const reducers = combineReducers<IState>({
  heroes: fromHeroes.reducer
})
