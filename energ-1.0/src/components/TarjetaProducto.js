import React, { Component } from 'react'
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';
import img1 from '../assets/img/1.png'


export default class TarjetaProducto extends Component {
  render() {
    return (
      <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img1} style={{ width: '4rem'}}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Container style={{align: 'center'}}>
                  <Row>
<<<<<<< Updated upstream
                    <Col>
                    <Button variant="primary">-</Button>
                    </Col>
                    <Col>
                    <Form.Control type="number" placeholder="1" />
=======
                    <Col className="d-flex align-items-center justify-content-center">
                      <div >
                        <p><strong>$ 99.00</strong></p>
                      </div>
>>>>>>> Stashed changes
                    </Col>
                    <Col>
                    <Button variant="primary">+</Button>
                    </Col>
                  </Row>
                </Container>
            </Card.Body>
        </Card></div>
    )
  }
}
