import React from 'react'

import { Col, Row } from 'react-bootstrap'

import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'
import { useParams } from 'react-router-dom';


import NavBar from '../NavBar'
import Footer from '../Footer';


const PayPal = () => {
  let { amount } = useParams();
  return (<>
    <Row>
      <NavBar />
    </Row>

    <Row>
      <Col></Col>

      <Col><PayPalCheckout
        clientId='AXve-xxWl8FMWNmZ5vKxDar53_gClnOLVq9ezGb9XHnIQuQ5MoIwo5jGj8adGdPPRREcLWrWUdqhuah8'
        amount={amount}
        currency='MXN'
        onSuccess={(data, order) => {
          console.log(data, order)
          window.location = "/"
          alert("Pago")
        }}
        onError={(error) => {
          console.log(error)
          alert("No se realizo el Pago")
        }}
      /></Col>

      <Col></Col>


    </Row>



  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
  <Row></Row>
    <Row>
      <Footer/>
    </Row>

  </>
  )
}

export default PayPal