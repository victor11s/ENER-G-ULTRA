import React, { Component, useState, useEffect } from 'react'
import Axios from 'axios'
import { Button, Card, Container, Form, Row, Col } from 'react-bootstrap';

import img1 from '../assets/img/LATASF.png'

import { NavLink } from '../components/NavComponent'


//Este componente se encuentra dentro del CatalogoAdmin.js
function TarjetaProductoAdmi(props) {
  //Props contiene el usuario actual y el idProducto a mostrar en la tarjeta
  const [imagenes, setImagenes] = useState('');
  let busquedaRealizada = false;

 


 useEffect(() => {
  if(!busquedaRealizada){
  //Se consultan las imagenes del producto en la base de datos

    Axios.get('http://localhost:3001/api/getImagenes',
    {
      params: {
        idProducto: props.id,
      }
    }).then((response)  => {
      busquedaRealizada = true;
      let imgs = response.data[0].ubicacion;
      setImagenes(imgs); //Ya tenemos la imgen en el state
      
    })
  } 

  }, []);

  console.log(imagenes);

  const agregarProductoCarrito = (event) => {
    //Funcion para agregar el producto al carrito mediante el API
    Axios.post('http://localhost:3001/api/agregarCarrito',
      {
        idProducto: props.id,
        idCarrito: 1,
        cantidadProducto: 1,
      }).then((response) => {

      });
  };
  return (
    // con este componente se renderiza los productos del catalago de cada articulo, es decir en su tarjeta, donde se pueden ver las imagenes, precio y darle click, para ver el detalle del producto
    <div>
      <Container className="" style={{ align: 'center' }}>
        <Row>
          <Col>
            <Card className="mt-5 p-2" style={{ width: '18rem' }}>
              <Card.Img className="mt-2 mx-auto" variant="top" src={imagenes} style={{ maxHeight: 'auto' }} />
              <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                  {props.descripcion}
                </Card.Text>
                <Row>
                  <Col className="d-flex align-items-center">
                    <div >
                      <p><strong>MXN $ {props.precio}</strong></p>
                    </div>
                  </Col>



                  <Col className="d-grid">
                    <Form onSubmit={agregarProductoCarrito}>
                      <Button variant="danger" type='submit' disabled> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                          <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                          <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </Button>
                    </Form>


                  </Col>


                </Row>
                <Row>
                  <Col className="mt-2 d-grid" >
                    <Button size="md" variant="dark" >  <NavLink to={`/detalleProducto/${props.id}/${props.nombre}/1`} className="d-grid" >Ver producto</NavLink></Button>
                  </Col>
                </Row>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TarjetaProductoAdmi;

