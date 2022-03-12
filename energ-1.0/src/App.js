import Catalogo from "./pages/Catalogo.js";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import React from "react";
// aqui se importan todos los componentes creados


//Se llaman los componentes para incluirlos en el app.js
const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
    {/* <TarjetaProducto/> */}
  </div>
  );
};

export default App;
