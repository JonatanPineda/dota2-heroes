import { connect } from 'react-redux'
import * as fromStore from '../store'
import Hero from '../components/Hero'

const mapStateToProps = (state: fromStore.IState) => ({
  hero: fromStore.getHeroVisualized(state)
})

export default connect(
  mapStateToProps,
  null
)(Hero)