import React from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import PayPalCheckout from 'react-paypal-checkout-button'
import 'react-paypal-checkout-button/dist/index.css'
import { useParams, Redirect, Navigate } from 'react-router-dom';
import NavBar from '../NavBar'
import Footer from '../Footer';
import { NavBtnLink } from '../NavComponent';
import Axios from 'axios'


// componente de paypal , configurado para los pagos con tarjeta y paypal

const PayPal = () => { 


  let { nombreUsuario, idDireccion, amount, idCarrito } = useParams();
  
  return (<>
    <Row>
      <NavBar />
    </Row>

    <Row>
      <Col></Col>

      <Col><PayPalCheckout
        //Parametros para el funcionamientos del componenete:
        clientId='AXve-xxWl8FMWNmZ5vKxDar53_gClnOLVq9ezGb9XHnIQuQ5MoIwo5jGj8adGdPPRREcLWrWUdqhuah8'
        amount={amount}
        currency='MXN'

        onSuccess={(data, order) => {
          console.log("id de la orden: "+order.id)
          alert('Pago Exitoso')
          //actualizar confirmacionCompra from carrito
          Axios.put('http://localhost:3001/api/actualizarConfirmacionCompra',
          {
              idCarrito: idCarrito,
              confirmacionCompra: true,
          }).then((response) => {
              console.log(response.data);
          });
          //crear una orden del carrito correspondiente
          Axios.post('http://localhost:3001/api/agregarOrden',
          {
              idCarrito: idCarrito,
              numPedido: order.id,
              idDireccion: idDireccion,
              status: "Orden recibida"
          }).then((response) => {
              console.log("Orden generada");
              //window.location.replace("/catalogo");
          });
          //crear un nuevo carrito
          Axios.post('http://localhost:3001/api/agregarNuevoCarrito',
          {
              nombreUsuario: nombreUsuario,
          }).then((response) => {
              console.log(response.data);
              console.log("Carrito creado");
              window.location.replace("/catalogo");
          });
        }}
        //Cierra onSuccess
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
          {/*Una vez que se tiene pagado, se le da la oportunidad al usuario de volver al inicio*/ }
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