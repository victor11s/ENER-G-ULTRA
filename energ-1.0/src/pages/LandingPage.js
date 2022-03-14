
import Header from "../components/Header";
import Feature1 from "../components/Feature1";
import Feature2 from "../components/Feature2";
import Feature3 from "../components/Feature3";
import Footer from "../components/Footer";

import React from "react";
import { Component } from 'react';
import NavBar from "../components/NavBar";
import { Container } from "react-bootstrap";



export default class LandingPage extends Component {
  render() {
    return (
      <div>

      <NavBar/>
      <Feature1/>
      <Feature2/>
      <Feature3/>
      <Footer/>
      
    </div>
    )
  }
}
