import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'
import { useParams, Redirect, Navigate } from 'react-router-dom';
import NavBar from '../NavBar'
import Footer from '../Footer';
import { NavBtnLink } from '../NavComponent';


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
          alert('Pago Exitoso')
          // let history = useHistory();
          // // // return <Navigate to='/regresarInicio' state={{ from: location }} replace  />
          // // navigate('/regresarInicio');
          // history.push('/regresarInicio')
          // window.location='/'
        }}
        onError={(error) => {
          console.log(error)
          alert("No se realizo el Pago")
        }}
      /></Col>

      <Col>


      </Col>
    </Row>

    <Row>
      <Col></Col>
      <Col  clasName='d-flex justify-content-end'>
        <Button className='mx-3' variant='danger'>
          <NavLink to='/'>Volver a Inicio</NavLink>
        </Button>

      </Col>

      <Col></Col>
    </Row>
    <Row>
      <Footer />
    </Row>

  </>
  )
}

export default PayPal