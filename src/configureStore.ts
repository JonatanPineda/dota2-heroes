import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { composeWithDevTools } from 'redux-devtools-extension';
import opendota from './services/opendota.service'
import * as fromStore from './store'

const epicMiddleware = createEpicMiddleware<
  fromStore.HeroAction,
  fromStore.HeroAction,
  fromStore.IState
>({
  dependencies: {
    heroesService: opendota
  }
})

export default function configureStore() {
  const store = createStore(
    fromStore.reducers,
    composeWithDevTools(
      applyMiddleware(epicMiddleware)
    )
  )

  epicMiddleware.run(fromStore.rootEpic)

  return store
}