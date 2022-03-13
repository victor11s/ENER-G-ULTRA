import React, { Component } from 'react'
import Header from "../components/Header";
import FilterBar from '../components/FilterBar';

import TarjetaProducto from '../components/TarjetaProducto'
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

export default class Catalogo extends Component {
  render() {
    return (
      <div>
        <Header/>
        
        <Container>
          <TarjetaProducto/>
          <FilterBar/>
          
        </Container>
      </div>
    )
  }
}