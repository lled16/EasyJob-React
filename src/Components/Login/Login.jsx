import { Row, Container, Col, Button } from 'react-bootstrap'
import '../Login/Login.Module.css'
import { InputGroup, Form } from "react-bootstrap";
import homeIcon from '../../assets/home.svg';
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <Container>
            <Row className='linhaEspacamento'>
                <Col className='colEspacamento-1'>
                    <Link className="linkLogin" to="/"><img src={homeIcon} className='homeImage' title="Home" /> </Link>
                </Col>
            </Row>


            <Row className='rowPrincipal'>
                <Col className='colPrincipal'>
                    <span className='spanLogin'>LOGIN</span>
                    <InputGroup size="lg" className="inputLogin">
                        <Form.Control />
                    </InputGroup>

                    <InputGroup size="lg" className="inputLogin">
                        <Form.Control type='password' />
                    </InputGroup>

                    <Button type='input' className='buttonInputLogin'>Entrar</Button>
                </Col>
            </Row>



            <Row className='linhaEspacamento-2'>

            </Row>
        </Container>

    )
}