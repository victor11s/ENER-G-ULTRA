import React, { Component } from 'react'
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';


export default class TarjetaProducto extends Component {
  render() {
    return (
      <div>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="1.png" style={{ width: '4rem'}}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Container style={{align: 'center'}}>
                  <Row>
                    <Col>
                    <Button variant="primary">-</Button>
                    </Col>
                    <Col>
                    <Form.Control type="number" placeholder="1" />
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
