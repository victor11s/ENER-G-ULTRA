import React, { Component, useState, useEffect } from 'react'
import Axios from 'axios'
import { Button, Card, Container, Form, Row, Col, Tooltip, OverlayTrigger } from 'react-bootstrap';

import img1 from '../assets/img/LATASF.png'

import { NavLink } from './NavComponent'



function TarjetaProducto(props) {
  const [sIdCarrito, setIdCarrito] = useState();
  const [imagenes, setImagenes] = useState('');
  const [usuario, setUsuario] = useState(props.usuario);

  let busquedaRealizada = false;

  

  useEffect(() => {
    let vIdCarrito = parseInt(window.localStorage.getItem("carrito"));
    setIdCarrito(vIdCarrito);

    if (!busquedaRealizada) {
      Axios.get('http://localhost:3001/api/getImagenes',
        {
          params: {
            idProducto: props.id,
          }
        }).then((response) => {
          busquedaRealizada = true;
          let imgs = response.data[0].ubicacion;
          setImagenes(imgs);


        })
    }

  }, []);

  console.log(imagenes);

  const agregarProductoCarrito = (event) => {
    // event.preventDefault();
    // console.log(sCantidadProducto);
    Axios.post('http://localhost:3001/api/agregarCarrito',
      {
        idProducto: props.id,
        idCarrito: sIdCarrito,
        cantidadProducto: 1,
      }).then((response) => {
        console.log(response.data);
        // setProducto(response.data[0]);
      });
  };

  // activar o desactivar el boton de carrito:
  const renderTooltipCarrito = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Inicia sesión para agregar productos al carrito
    </Tooltip>
  );

  const renderCarritoActivo = () => {
    return (
      <>
        <Button variant="danger" type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
          </svg>
        </Button>
      </>
    );
  }
  const renderCarritoInactivo = () => {
    return (
      <>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipCarrito}>
          <Button className='mx-3' variant='danger' >
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
              <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
              <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </Button>
        </ OverlayTrigger>
      </>
    );
  }

  return (
    <div>
      <Container className="" style={{ align: 'center' }}>
        <Row>
          <Col>
            <Card className="mt-5 p-2" style={{ width: '18rem' }}>
              <Card.Img className="mt-2 mx-auto" variant="top" src={imagenes} style={{ maxHeight: "auto" }} />
              <Card.Body>
                <Card.Title>{props.nombre}</Card.Title>
                <Card.Text>
                  {props.descripcion}
                </Card.Text>
                {/* <Container className="" style={{align: 'center'}}> */}
                <Row>
                  <Col className="d-flex align-items-center">
                    <div >
                      <p><strong>MXN $ {props.precio}</strong></p>
                    </div>
                  </Col>

                  <Col className="d-grid">
                    <Form onSubmit={agregarProductoCarrito}>
                      {
                        usuario
                          ? renderCarritoActivo()
                          : renderCarritoInactivo()
                      }
                    </Form>


                  </Col>


                </Row>
                <Row>
                  <Col className="mt-2 d-grid" >
                    <Button size="md" variant="dark" >  <NavLink to={`/detalleProducto/${props.id}/${props.nombre}/${sIdCarrito}`} className="d-grid" >Ver producto</NavLink></Button>
                  </Col>
                </Row>
                {/* </Container> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TarjetaProducto;

