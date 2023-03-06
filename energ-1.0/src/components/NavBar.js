import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import imgLogo from '../assets/img/Logo-Energultra.png';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavComponent';
import { Badge, Col, Tooltip, OverlayTrigger } from "react-bootstrap";
import IniciarSesion from './CreacionPerfil/IniciarSesion';



function NavBar() {

  //States para almacenar información del usuario, carrito actual, direccion del usuario y numero de productos en carrito
  const [usuario, setUsuario] = useState(null);
  const [sIdCarrito, setIdCarrito] = useState(null);
  const [sDireccion, setDireccion] = useState(null);
  let [sNumProductosCarrito, setNumProductos] = useState(0);

  useEffect(() => {
    //Procedimiento para recuperar la información del usuario incluyendo su carrito de producto
    const usuarioString = window.localStorage.getItem("usuario");
    if (usuarioString) {

      const user = JSON.parse(usuarioString);
      setUsuario(user);//Ya tenemos el usuario

      const axiosGetIdCarrito = async () => {
        //Se hace una consultra a traves del API para recuperar el idCarrito
        await Axios.get('http://localhost:3001/api/getIdCarrito',
          {
            params: {
              nombreUsuario: user.nombreUsuario,
            }
          }).then(async (response) => {

            let vIdCarrito = parseInt(response.data[response.data.length - 1].idCarrito);//nos da el ultimo carrito que se asigno al usuario
            setIdCarrito(vIdCarrito);
            window.localStorage.setItem("carrito", vIdCarrito);//

            //Este Axios es para sacar el numero de productos en el carrito
            console.log("Recuperando proudctos del carrito: " + vIdCarrito + " ...");
            await Axios.get('http://localhost:3001/api/getCarrito',
              {
                params: {
                  idCarrito: vIdCarrito,
                }
              }).then((response) => {
                console.log("Productos en carritos despues de useEffect: " + response.data.length);
                setNumProductos(response.data.length);
              });
            //Este Axios es para sacar la direccion del usuario
            await Axios.get('http://localhost:3001/api/getDireccion',
              {
                params: {
                  nombreUsuario: user.nombreUsuario,
                }
              }).then((response) => {
                if (response.data[0])
                  setDireccion(response.data[0]);
              });
          });


      }
      axiosGetIdCarrito();
    }
  }, []);


  //Aviso que va sobre el boton de perfil si el usuario no ha inicado sesion:
  const renderTooltipPerfil = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Inicia sesión para ver tu perfil
    </Tooltip>
  );

  //Para cambiar el boton cerrar/iniciar Sesion
  const renderIniciarSesion = () => {
    return (
      <>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipPerfil}>
          <NavLink to='/iniciarSesion' disabled>Mi Perfil</NavLink>
        </OverlayTrigger>
        <NavLink to='/iniciarSesion' activeStyle>Iniciar Sesión</NavLink>
      </>
    );
  }

  const renderCerrarSesion = () => {
    return (<>
      <NavLink to='/miPerfil' activeStyle>Mi Perfil</NavLink>
      <NavLink to='/catalogo' onClick={handleCerrarSesion} activeStyle>Cerrar Sesión</NavLink>
    </>
    );
  }

  //Para quitar o habilitar el carrito solo si el usuario inició sesión:
  //Aviso que va sobre el boton de carrito si el usuario no ha inicado sesion:
  const renderTooltipCarritoNoUsuario = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Inicia sesión para agregar productos al carrito
    </Tooltip>
  );

  //Carrito para cuando todo esté en orden (sesión iniciada y dirección agregada)
  const renderCarritoActivo = () => {
    return (
      <>
        <NavLink to={`/carrito/${sIdCarrito}`}>
          <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
          </svg>
          {etiquetaNumProductos}
        </NavLink>
      </>
    );
  }

  //Boton de carrito pero con toltip activo por si el usuario no ha iniciado sesión 
  const renderCarritoUsuarioInactivo = () => {
    return (
      <>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipCarritoNoUsuario}>
          <NavLink to='/iniciarSesion'>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </NavLink>
        </OverlayTrigger>
      </>
    );
  }

  //Aviso que va sobre el boton de carrito si el usuario no ha agregado su dirección:
  const renderTooltipCarritoNoDireccion = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Agrega tu direccion para ver el carrito
    </Tooltip>
  );

  //Boton de carrito pero con toltip activo por si el usuario no ha agregado su dirección
  const renderCarritoDireccionInactiva = () => {
    return (
      <>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltipCarritoNoDireccion}>
          <NavLink to='/miPerfil'>
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
            {etiquetaNumProductos}
          </NavLink>
        </OverlayTrigger>
      </>
    );
  }

  //Funcion para el boton de cerrar sesión:
  const handleCerrarSesion = () => {
    window.localStorage.removeItem('usuario');
    window.localStorage.removeItem('carrito');
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

    // aqui se incoporaron los disntintos componentes del navbar, donde se le coloco una imagen que es la del logo, ademas de los menus, que este contiene y finalmente un boton de carrito
    // tambien aqui se encuentra configurado como se va a ver la navbar segun que tipo de usuario, ya se administrador, usuario con cuenta o usuario sin cuenta
    <>
      <Nav>
        <NavLink to='/'>
          <img src={imgLogo} alt="" style={{ width: 75 }} />
          {/*Para el logo */}
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/catalogo' activeStyle>Cátalogo</NavLink>
          {/* <NavLink to='/perfilAdmi' activeStyle>Mi Perfil Admi</NavLink> */}
          {
            usuario
              ? renderCerrarSesion()
              : renderIniciarSesion()
          }


        </NavMenu>
        <div className='row'>
          <Col>
            {
              usuario
                ? (sDireccion
                    ? renderCarritoActivo()
                    : renderCarritoDireccionInactiva()
                  )
                : renderCarritoUsuarioInactivo()
            }
          </Col>

        </div>
      </Nav>
    </>
  )
}

export default NavBar