import * as React from 'react'
import HeroSearcher from '../containers/HeroSearcher';
import Hero from '../containers/Hero'
import { Header } from 'semantic-ui-react'
import { Loader, Dimmer, Container } from 'semantic-ui-react'


interface IProps {
  onFetchHeroes: () => void
  loadingHeroes: boolean
}

class App extends React.Component<IProps> {
  public componentDidMount() {
    this.props.onFetchHeroes()
  }

  public render() {
    const { loadingHeroes } = this.props
    return (
      <Container fluid={true}>
        <style>
          {`
            html, body {
              background-color: #2e3440 !important;
            }
      
            h1 {
              color: #8fbcbb !important;
            }
          `}
        </style>
        <Container
          style={{
           paddingTop: '5em'
          }}
        >
          {!loadingHeroes ? 
          <>
            <Header as={'h1'} textAlign={'center'}>Dota 2</Header>
            <HeroSearcher /> 
            <Hero />
          </> :
          <Dimmer active={true}>
            <Loader size={'massive'}>Loading...</Loader> 
          </Dimmer> }
        </Container>
      </Container>
    )
  }
}

export default App