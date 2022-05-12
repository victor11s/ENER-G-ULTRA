
import Header from "../components/Header";
import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import Feature3 from "../components/Feature3";
import Footer from "../components/Footer";

import React from "react";
import { Component } from 'react';

import { Container } from "react-bootstrap";
import NavBarAdmi from "../components/NavBarAdmi";
// Se manda llamar cada componente para la landing page del administrador

export default class LandingPage extends Component {
  render() {
    return (
      <div>

      <NavBarAdmi/>
      <Feature1/>
      <Feature2/>
      <Feature3/>
      {/* Inserte aquí mas componentes si lo desea */}
      <Footer/>
      
    </div>
    )
  }
}
