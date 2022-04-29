import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import imgLogo from '../assets/img/Logo-Energultra.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavComponent';
import { Badge, Col } from "react-bootstrap";
import IniciarSesion from './CreacionPerfil/IniciarSesion';



function NavBar() {

  const [usuario, setUsuario] = useState(null);
  const [sIdCarrito, setIdCarrito] = useState(null);
  let [sNumProductosCarrito, setNumProductos] = useState(0);

  useEffect(() => {
    const usuarioString = window.localStorage.getItem("usuario");
    if (usuarioString) {
      const user = JSON.parse(usuarioString);
      setUsuario(user);//Ya tenemos el usuario

      const axiosGetIdCarrito = async () => {
        await Axios.get('http://localhost:3001/api/getIdCarrito',
          {
            params: {
              nombreUsuario: user.nombreUsuario,
            }
          }).then(async (response) => {
            // console.log(response.data);
            console.log("id carrito de usuario: -> "+ user.nombreUsuario);
            console.log("idCarrito: "+ response.data[response.data.length-1].idCarrito);
            let vIdCarrito = parseInt(response.data[response.data.length-1].idCarrito);//nos da el ultimo carrito que se asigno al usuario
            setIdCarrito(vIdCarrito);
            window.localStorage.setItem("carrito",vIdCarrito);

            //Este Axios es para sacar el numero de productos en el carrito
            console.log("Recuperando proudctos del carrito: " + vIdCarrito + " ...");
            await Axios.get('http://localhost:3001/api/getCarrito',
              {
                params: {
                  idCarrito: vIdCarrito,
                }
              }).then((response) => {
                console.log("Productos en carritos despues de useEffect: "+response.data.length);
                setNumProductos(response.data.length);
              });

          });
      }
      axiosGetIdCarrito();
    }
  }, []);




  //Para cambiar el boton cerrar/iniciar Sesion
  const renderIniciarSesion = () => {
    return (
      <NavLink to='/iniciarSesion' activeStyle>Iniciar Sesión</NavLink>
    );
  }

  const renderCerrarSesion = () => {
    return (
      <NavLink to='/catalogo' onClick={handleCerrarSesion} activeStyle>Cerrar Sesión</NavLink>
    );
  }

  const handleCerrarSesion = () => {
    window.localStorage.removeItem('usuario');
    setUsuario(null);
  }
  //termina metodos para cambiar cerrar/iniciar sesion

  let etiquetaNumProductos; //Esto es para agregar la burbuja al carrito con el num de productos
  if (sNumProductosCarrito > 0) {
    etiquetaNumProductos = <Badge pill bg="secondary">{sNumProductosCarrito}</Badge>;
  } else {
    etiquetaNumProductos = <div></div>
  }

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
              : renderIniciarSesion()
          }


        </NavMenu>
        <div className='row'>
          <Col>
            <NavLink to={`/carrito/${sIdCarrito}`}> 
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