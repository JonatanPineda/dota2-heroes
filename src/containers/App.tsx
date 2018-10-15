import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import * as fromStore from '../store'
import App from '../components/App'

const mapStateToProps = (state: fromStore.IState) => ({
  loadingHeroes: fromStore.getHeroesLoading(state)
})

const mapDispatchToProps = (dispatch: Dispatch<fromStore.HeroAction>) => ({
  onFetchHeroes: () => dispatch(fromStore.doFetchHeroes())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)