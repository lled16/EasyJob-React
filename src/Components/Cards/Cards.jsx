import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import imageCard from '../../assets/images/aleatory/img-1.png'
import '../Cards/Cards.Module.css'

export default function Cards() {
    return (
        <>
      
            <Col className='colCard'>
                <Card style={{ width: '18rem' }} className='cardPrincipal' >
                    <Card.Img variant="top" src={imageCard} />
                    <Card.Body className='card'>
                        <Card.Title>João Simão</Card.Title>
                        <Card.Text>
                            Este é o meu primeiro card
                        </Card.Text>
                        <Button variant="primary">Ver Anúncio</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    )
}