import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import imgLogo from '../assets/img/Logo-Energultra.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavComponent';
import { Badge, Col } from "react-bootstrap";
import IniciarSesion from './CreacionPerfil/IniciarSesion';



function NavBar() {

  const [usuario, setUsuario] = useState(null);

  let [sNumProductosCarrito, setNumProductos] = useState(0);
  useEffect(() => {
    const axiosGet = async () => {
      // console.log(pIdCarrito);
      await Axios.get('http://localhost:3001/api/getCarrito',
        {
          params: {
            idCarrito: 1,
          }
        }).then((response) => {
          // console.log(response.data);
          setNumProductos(response.data.length);
        });
    }
    axiosGet();
  }, []);

  

  let etiquetaNumProductos;
  if (sNumProductosCarrito > 0) {
    etiquetaNumProductos = <Badge pill bg="secondary">{sNumProductosCarrito}</Badge>;
  } else {
    etiquetaNumProductos = <div></div>
  }

  //Para cambiar el boton cerrar/iniciar Sesion
  useEffect(() => {
    const usuarioString = window.localStorage.getItem("usuario");
    if (usuarioString) {
      const user = JSON.parse(usuarioString);
      setUsuario(user);
    }
  }, []);


  const renderInciarSesion = () => {
    return(
      <NavLink to='/iniciarSesion' activeStyle>Iniciar Sesion</NavLink>
    );
  }

  const renderCerrarSesion = () => {
    return(
      <NavLink onClick={handleCerrarSesion} activeStyle>Iniciar Sesion</NavLink>
      );
  }

  const handleCerrarSesion = () => {
    window.localStorage.removeItem('usuario');
    setUsuario(null);
  }
  //termina metodos para cambiar cerrar/iniciar sesion

  

  console.log("productos en carrito: " + sNumProductosCarrito);
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={imgLogo} alt="" style={{ width: 75 }} />
          {/*Para el logo */}
          {/* <img src='' alt=''/>*/}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/catalogo' activeStyle>Cátalogo</NavLink>
          <NavLink to='/miPerfil' activeStyle>Mi Perfil</NavLink>
          {/* <NavLink to='/perfilAdmi' activeStyle>Mi Perfil Admi</NavLink> */}
          {
            usuario
              ? renderCerrarSesion()
              : renderInciarSesion()
          }


        </NavMenu>
        <div className='row'>
          <Col>
            <NavLink to='/carrito/1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
              {etiquetaNumProductos}
            </NavLink>
          </Col>

        </div>
      </Nav>
    </>
  )
}

export default NavBar