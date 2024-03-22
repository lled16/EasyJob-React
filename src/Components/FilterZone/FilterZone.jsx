import { Col, Row } from "react-bootstrap";
import '../FilterZone/FilterZone.Module.css';
import FilterAreaAtuation from "./FilterAreaAtuation/FilterAreaAtuation";
import FilterRangePrice  from '../FilterZone/FilterRangePrice/FilterRangePrice.jsx'

export default function FilterZone() {
    return (
        <Col className="filterZone" sm={2}>
            <div className="filterContent">
                <Row>
                    <span className="nameFilters">FILTROS</span>
                </Row>
                <h5 className="titleFilters"> Área de atuação </h5>
                <FilterAreaAtuation />

                <h5 className="titleFilters">Preço</h5>
                

                <FilterRangePrice />
            </div>
        </Col>
    )
}