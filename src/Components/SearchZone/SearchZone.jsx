import { Col, Row } from "react-bootstrap";
import '../SearchZone/SearchZone.Module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Form } from "react-bootstrap";


export default function SearchZone() {
    return (
            <Row className="rowSearchZone">
                <Col className="colSearch">
                    <InputGroup size="lg" className="inputSearch">
                        <Form.Control />
                    </InputGroup>
                </Col>
            </Row>
    )
}