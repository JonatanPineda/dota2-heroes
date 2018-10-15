import * as React from 'react'
import * as fromStore from '../store'
import { Search, Container } from 'semantic-ui-react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { IHero } from 'src/models/hero.model';

interface IProps {
  onFetchHeroes: () => void
  heroes: IHero[]
}

interface IState {
  searchText: string
}

class HeroSearcher extends React.Component<IProps, IState> {
  public state = {
    searchText: ''
  }

  public componentDidMount() {
    this.props.onFetchHeroes()
  }

  public handleSearchChange = (e: any) => {
    this.setState({
      searchText: e.currentTarget.value
    })
  }

  public render() {
    const { heroes } = this.props
    const { searchText } = this.state

    const searchedHeroes = heroes.filter(
      hero => hero.localizedName.toLowerCase().includes(searchText.toLowerCase())
    )
    .map(
      hero => ({
        title: hero.localizedName,
        image: hero.icon
      })
    )
    
    return (
      <Container 
        text={true}
        style={{
          paddingTop: '5em'
        }}
      >
        <Search 
          input={{ fluid: true }}
          fluid={true}
          results={searchedHeroes}
          onSearchChange={this.handleSearchChange}
          size={'large'}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state: fromStore.IState)  => ({
  heroes: fromStore.getAllHeroes(state)
})

const mapDispatchToProps = (dispatch: Dispatch<fromStore.HeroAction>) => ({
  onFetchHeroes: () => dispatch(fromStore.doFetchHeroes())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroSearcher)