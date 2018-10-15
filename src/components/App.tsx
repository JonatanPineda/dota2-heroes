import * as React from 'react'
import { Container } from 'semantic-ui-react'
import HeroSearcher from '../containers/HeroSearcher';

const App = () => (
  <Container fluid={true}>
    <HeroSearcher />
  </Container>
)

export default App