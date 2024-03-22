import { Col, Row, Button } from "react-bootstrap";
import '../SearchZone/SearchZone.Module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form } from "react-bootstrap";
import profileImage from '../../assets/login.svg';
import { Link } from 'react-router-dom'
import searchIcon from '../../assets/search.svg';


export default function SearchZone() {
    return (
        <Row className="rowSearchZone">
            <Col className="col-sm-3 colLogin">

            </Col>
            <Col className="colSearch">
                <InputGroup size="lg" className="inputSearch">
                    <Form.Control />
                </InputGroup>
                <Button type='input' className='buttonInputSearch'><img src={searchIcon} className='searchImg' title="Pesquisar" /></Button>
            </Col>
            <Col className="col-sm-1 colLogin">
                <Link className="linkLogin" to="/login"><img src={profileImage} className='profileImage' title="Login" /> </Link>
            </Col>
        </Row>
    )
}