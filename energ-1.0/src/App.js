import Header from "./components/Header";
import Feature1 from "./components/Feature1";
import Feature2 from "./components/Feature2";
import Feature3 from "./components/Feature3";
import Footer from "./components/Footer";
import React from "react";
// aqui se importan todos los componentes creados


//Se llaman los componentes para incluirlos en el app.js
const App = () => {
  return (
    <div>
      <Header/>
      <Feature1/>
      <Feature2/>
      <Feature3/>
      <Footer/>
    </div>
    

    
  );
};

export default App;
