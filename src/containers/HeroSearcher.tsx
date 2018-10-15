import * as React from 'react'
import * as fromStore from '../store'
import { Search } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { IHero } from 'src/models/hero.model';
import { Container } from 'semantic-ui-react'

interface IProps {
  heroes: IHero[],
  onVisualizeHero: (heroId: number) => void
}

interface IState {
  searchText: string
}

class HeroSearcher extends React.Component<IProps, IState> {
  public state = {
    searchText: ''
  }

  public handleSearchChange = (e: any) => {
    this.setState({
      searchText: e.currentTarget.value
    })
  }

  public handleResultSelect = (e: any, data: any) => {
    this.setState({
      searchText: data.result.title
    })
    this.props.onVisualizeHero(data.result.id)
  }

  public render() {
    const { heroes } = this.props
    const { searchText } = this.state

    const searchedHeroes = heroes.filter(
      hero => hero.localizedName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    )
    .map(
      hero => ({
        title: hero.localizedName,
        image: hero.icon,
        id: hero.id
      })
    )
    
    return (
      <Container text={true}>
        <Search 
          input={{ fluid: true }}
          fluid={true}
          results={searchedHeroes}
          onSearchChange={this.handleSearchChange}
          size={'mini'}
          onResultSelect={this.handleResultSelect}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state: fromStore.IState)  => ({
  heroes: fromStore.getAllHeroes(state)
})

const mapDispatchToProps = (dispatch: Dispatch<fromStore.HeroAction>) => ({
  onVisualizeHero: (heroId: number) => dispatch(fromStore.doVisualizeHero(heroId)) 
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroSearcher)