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
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null);
  const [tipoUsuario, setTipoUsuario] = useState('usuario');

  useEffect(() => {
    const usuarioString = window.localStorage.getItem("usuario");
    if(usuarioString){
      const user = JSON.parse(usuarioString);
      setUsuario(user);
      setTipoUsuario(user.tipo);
    }else{
      setUsuario(null);
      setTipoUsuario('usuario');
    }
  }, []);

  const renderUsuario = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/detalleProducto/:id/:nombre" element={<DetalleProductos />} />
            <Route path="/detalleProducto/:pIdProducto/:pNombreProducto/:pIdCarrito" element={<DetalleProductos />} />
            <Route path="/admiAgregarProducto/" element={<AdmiAgregarProducto />} />
            <Route path="/carrito/:pIdCarrito" element={<Carrito />} />
            <Route path="/iniciarSesion" element={<IniciarSesion pSetUsuario={setUsuario} pTipoUsuario={setTipoUsuario}/>} />
            <Route path="/registrar" element={<Registrarse />} />
            <Route path="/checkout/:amount" element={<PayPal />} />
            <Route path="/regresarInicio" element={<Pagado />} />
            <Route path="/miPerfil" element={<Profile />} />
            <Route path="/perfilAdmi" element={<PerfilAdmi />} />

            {/* Agregar rutas de perfil y noticias*/}
          </Routes>
        </BrowserRouter>
        {/* <TarjetaProducto/> */}
      </div>
    );
  }

  const renderAdmin = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPageAdmi />} />
            <Route path="/catalogo" element={<CatalogoAdmi />} />
            <Route path="/detalleProducto/:id/:nombre" element={<DetalleProductosAdmi />} />
            <Route path="/detalleProducto/:pIdProducto/:pNombreProducto/:pIdCarrito" element={<DetalleProductosAdmi />} />
            <Route path="/admiAgregarProducto/" element={<AdmiAgregarProducto />} />
            <Route path="/iniciarSesion" element={<IniciarSesion pSetUsuario={setUsuario} pTipoUsuario={setTipoUsuario} />} />
            <Route path="/registrar" element={<Registrarse />} />
            <Route path="/perfilAdmi" element={<PerfilAdmi />} />
            <Route path="/pedidosAdmi" element={<PedidosIndividualesAdmi />} />


            {/* Agregar rutas de perfil y noticias*/}
          </Routes>
        </BrowserRouter>
        {/* <TarjetaProducto/> */}
      </div>
    );
  }

  return (
    <div>
      {
        tipoUsuario == 'usuario'
          ? renderUsuario()
          : renderAdmin()
      }
    </div>
  );

};

export default App;
