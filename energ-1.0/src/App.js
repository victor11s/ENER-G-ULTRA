import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo.js";
import CatalogoAdmi from "./PagesAdmi/CatalogoAdmi.js";
import React, { useState, useEffect } from "react";
import DetalleProductos from "./pages/DetalleProductos";
import AdmiAgregarProducto from "./pages/AdmiAgregarProducto";
import ModalProducto from "./components/Admi/ModalProducto";
import Carrito from "./pages/Carrito";
import IniciarSesion from "./components/CreacionPerfil/IniciarSesion";
import Registrarse from "./components/CreacionPerfil/Registrarse";
import PayPal from "./components/PayPalCheckOut/PayPal";
import Pagado from "./components/PayPalCheckOut/Pagado";
import Profile from "./components/UserProfile/Profile";
import PerfilAdmi from "./components/Admi/PerfilAdmi";
import LandingPageAdmi from "./PagesAdmi/LandingPagesAdmi";
import DetalleProductosAdmi from "./PagesAdmi/DetalleProductosAdmi";
import PedidosIndividualesAdmi from "./components/Admi/PedidosIndividualesAdmi";

// aqui se importan todos los componentes creados

// crear nuevos componentes de navBar ya en proceso
//quitarle al admi el carrito y paypal

//Se llaman los componentes para incluirlos en el app.js
const App = () => { 
  //States para guardar la información del usuario actual
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);
  const [tipoUsuario, setTipoUsuario] = useState('usuario');

  useEffect(() => {
    const usuarioString = window.localStorage.getItem("usuario");
    if(usuarioString){
      //Si existe el usuario existe se actualiza el state
      const user = JSON.parse(usuarioString);
      setUsuario(user);
      setTipoUsuario(user.tipo);
    }else{
      //Sino se coloca en null
      setUsuario(null);
      setTipoUsuario('usuario');
    }
  }, []);


  // Componentes renderizados si es usuario tipo cliente
  const renderUsuario = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/detalleProducto/:id/:nombre" element={<DetalleProductos />} />
            <Route path="/detalleProducto/:pIdProducto/:pNombreProducto/:pIdCarrito" element={<DetalleProductos />} />
            <Route path="/carrito/:pIdCarrito" element={<Carrito />} />
            <Route path="/iniciarSesion" element={<IniciarSesion pSetUsuario={setUsuario} pTipoUsuario={setTipoUsuario}/>} />
            <Route path="/registrar" element={<Registrarse />} />
            <Route path="/checkout/:nombreUsuario/:idDireccion/:amount/:idCarrito" element={<PayPal />} />
            <Route path="/regresarInicio" element={<Pagado />} />
            <Route path="/miPerfil" element={<Profile />} /> 
            {/* Agregar rutas de perfil y noticias*/}
          </Routes>
        </BrowserRouter>
        {/* <TarjetaProducto/> */}
      </div>
    );
  }
// Componentes renderizados si es usuario tipo administrador
  const renderAdmin = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/landing" element={<LandingPageAdmi />} />
            <Route path="/catalogo" element={<CatalogoAdmi />} />
            <Route path="/detalleProducto/:id/:nombre" element={<DetalleProductosAdmi />} />
            <Route path="/detalleProducto/:pIdProducto/:pNombreProducto/:pIdCarrito" element={<DetalleProductosAdmi />} />
            <Route path="/admiAgregarProducto/" element={<AdmiAgregarProducto />} />
            <Route path="/iniciarSesion" element={<IniciarSesion pSetUsuario={setUsuario} pTipoUsuario={setTipoUsuario} />} />
            <Route path="/registrar" element={<Registrarse />} />
            <Route path="/perfilAdmi" element={<PerfilAdmi />} />
            <Route path="/pedidosAdmi/:nombreUsuario" element={<PedidosIndividualesAdmi />} />
            {/* Agregar rutas de perfil y noticias*/}
          </Routes>
        </BrowserRouter>
        {/* <TarjetaProducto/> */}
      </div>
    );
  }

  return (
    <div>
      {/* Aqui se intercambian las rutas por tipo de usuario */}
      {
        tipoUsuario == 'admi'
          ? renderAdmin()
          : renderUsuario()
      }
    </div>
  );

};

export default App;
