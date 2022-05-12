import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import imgLogo from '../assets/img/Logo-Energultra.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavComponent';
import { Badge, Col } from "react-bootstrap";
import IniciarSesion from './CreacionPerfil/IniciarSesion';

function NavBarAdmi() {
  const [usuario, setUsuario] = useState(null);
  let [sNumProductosCarrito, setNumProductos] = useState(0);

  //Para cambiar el boton cerrar/iniciar Sesion
  useEffect(() => {
    const usuarioString = window.localStorage.getItem("usuario");
    if (usuarioString) {
      const user = JSON.parse(usuarioString);
      setUsuario(user);
    }
  }, []);

  //Boton de iniciar sesión que aparece si el usuario no ha hecho login
  const renderIniciarSesion = () => {
    return(
      <NavLink to='/iniciarSesion' activeStyle>Iniciar Sesión</NavLink>
    );
  }

  //Boton de cerrar sesion si el usuario ya hizo login
  const renderCerrarSesion = () => {
    return(
      <NavLink to='/catalogo' onClick={handleCerrarSesion} activeStyle>Cerrar Sesión</NavLink>
      );
  }

  //Funcion para el boton de cerrar sesión:
  const handleCerrarSesion = () => {
    window.localStorage.removeItem('usuario');
    setUsuario(null);
    window.location.replace("/catalogo");
  }
  //termina metodos para cambiar cerrar/iniciar sesion



  const actualizarNumCarrito = () =>{

  }

  return (
    // se renderiza la navbar de administrador quye cuenta con sus menus, pero sin carrito de compras, se necesita estar logeado como admi para poder acceder a esta
    <>
      <Nav>
        <NavLink to='/landing'>
          <img src={imgLogo} alt="" style={{ width: 75 }} />
          {/*Para el logo */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/catalogo' activeStyle>Cátalogo</NavLink>
          <NavLink to='/perfilAdmi' activeStyle>Mi Perfil Admi</NavLink>
          
          {/* Terna para saber si el usuario ya hizo login: */}
          {
            usuario
              ? renderCerrarSesion()
              : renderIniciarSesion()
          }

        </NavMenu>
        <div className='row'>
          <Col>
            <NavLink to='/landing'>

            <img src={imgLogo} alt="" style={{ width: 75 }} />
              
            </NavLink>
          </Col>

       



        </div>
      </Nav>
    </>
  )
}

export default NavBarAdmi
