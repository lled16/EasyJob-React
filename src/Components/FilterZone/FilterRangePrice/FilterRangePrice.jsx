import { Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { InputGroup } from "react-bootstrap";
import '../FilterRangePrice/FilterRangePrice.Module.css'


export default function RangeExample() {


    return (
        <Row className='rangePrice'>

            <InputGroup size="sm" className="inputPrice">
                <span> De : <Form.Control /> </span>
            </InputGroup>


            <InputGroup size="sm" className="inputPrice">
            <span> Até : <Form.Control /> </span>
            </InputGroup>

        </Row>
    );
}