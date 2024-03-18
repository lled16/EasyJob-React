import SearchZone from '../src/Components/SearchZone/SearchZone.jsx'
import './App.css'
import { Row, Container, Col } from 'react-bootstrap'
// import Cards from '../src/Components/Cards/Cards.jsx'
import MultipleCards from './Components/Cards/MultipleCards.jsx'
import FilterZone from './Components/FilterZone/FilterZone.jsx'
function App() {

  return (
    <>
      <Container fluid="md">
        <SearchZone />
        <Row className='rowCards'>
          <FilterZone />
          <Col sm={10}>
            <MultipleCards qtd={23} />
          </Col>
        </Row>
      </Container>
    </>

  )
}

export default App
