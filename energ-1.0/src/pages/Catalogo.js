import React, { Component } from 'react'
import Header from "../components/Header";
import FilterBar from '../components/FilterBar';
import NavBar from '../components/NavBar';

import TarjetaProducto from '../components/TarjetaProducto'
import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

export default class Catalogo extends Component {
  render() {
    return (
      <div>
        <NavBar/>


        <Container>
          <FilterBar />
          <TarjetaProducto />


        </Container>
      </div>
    )
  }
}