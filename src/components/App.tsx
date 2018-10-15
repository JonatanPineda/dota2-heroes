import * as React from 'react'
import { Container, Header } from 'semantic-ui-react'
import HeroSearcher from '../containers/HeroSearcher';


const App = () => (
  <Container fluid={true}>
    <style>{`
      html, body {
        background-color: #2e3440 !important;
      }

      h1 {
        color: #8fbcbb !important;
      }
    `}</style>
    <Container
      text={true}
      style={{
        paddingTop: '5em'
      }}
     >
      <Header as={'h1'}>
       Dota 2
      </Header>
      <HeroSearcher />
   </Container>
  </Container>
)

export default App