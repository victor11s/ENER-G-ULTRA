import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo.js";

import React from "react";
import DetalleProductos from "./pages/DetalleProductos";
import AdmiAgregarProducto from "./pages/AdmiAgregarProducto";
import ModalProducto from "./components/Admi/ModalProducto";

// aqui se importan todos los componentes creados



//Se llaman los componentes para incluirlos en el app.js
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/detalleProducto/:id" element={<DetalleProductos />} />
        <Route path="/admiAgregarProducto/" element={<AdmiAgregarProducto />} />
        <Route path="/admiAgregarProducto/modalProducto" element={<ModalProducto />} />

        
        
        {/* Agregar rutas de perfil y noticias*/}
      </Routes>
    </BrowserRouter>
    {/* <TarjetaProducto/> */}
  </div>
  );
};

export default App;
