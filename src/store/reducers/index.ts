import * as fromHeroes from './heroes.reducer'
import { combineReducers } from 'redux'

export interface IState {
  heroes: fromHeroes.IHeroesState
}

export const initialState: IState = {
  heroes: fromHeroes.initialState
}

export const reducers = combineReducers<IState>({
  heroes: fromHeroes.reducer
})

export const getState = (state: IState) => state
