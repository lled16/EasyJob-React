import SearchZone from '../SearchZone/SearchZone.jsx'
import '../../App.css'
import { Row, Container, Col } from 'react-bootstrap'
import MultipleCards from '../Cards/MultipleCards.jsx'
import FilterZone from '../FilterZone/FilterZone.jsx'
import { Link } from 'react-router-dom'
import '../Home/Home.Module.css'


export default function Home() {

    return (
        <>
            <Container fluid="md">
                <SearchZone />
                <Row className='rowCards'>
                    <FilterZone className='zoneFilter'/>
                    <Col sm={10}>
                        <MultipleCards />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <a><Link to="/login">Login</Link></a>
                    </Col>
                </Row>
            </Container>
        </>

    )
}


