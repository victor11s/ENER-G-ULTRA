import React, { Component } from 'react'
import TableProductos from '../components/Admi/TableProductos'
import NavBar from '../components/NavBar';
import NavBarAdmi from '../components/NavBarAdmi';


//Esta es la parte principal donde se manda llamar la tabla para agregrar productos y se manda a llmar a su navbar
function AdmiAgregarProducto ()  {
  
    return (
      <div>
        <NavBarAdmi/>
        <TableProductos/>
        </div>
    )
  }

  
export default AdmiAgregarProducto
