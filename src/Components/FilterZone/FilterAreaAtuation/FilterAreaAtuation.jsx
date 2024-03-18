import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function FilterAreaAtuation() {
    return (
        <Row>
            <Col>
                <Form.Select size="sm">
                    <option>Desenvolvimento</option>
                    <option>Pintura</option>
                    <option>Eletricista</option>
                    <option>Pedreiro</option>
                    <option>Motoboy</option>
                    <option>Designer</option>
                </Form.Select>
            </Col>
        </Row>
    )
}