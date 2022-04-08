import React from 'react'


import { NavLink } from 'react-router-dom';

import { Button, Card, Col, Container, Form, Row, Table } from 'react-bootstrap'


import NavBar from '../NavBar'
import Footer from '../Footer';

function Pagado() {
  return (
   <>
   <NavBar/>

   <Row>Pagado con Exito!!!</Row>
   <Row>
       <Col>

       <Button className='mx-3' variant='danger'> 
            <NavLink>Volver a Inicio</NavLink>
        </Button>
       </Col>
        

    </Row>
    <Row>

        <Col>
        <Button className='mx-3' variant='danger'> 
            <NavLink>Ver mis Compras</NavLink>
        </Button>

        </Col>
        
    </Row>


    <Footer/>
   
   
   
   </>

    

  )
}

export default Pagado