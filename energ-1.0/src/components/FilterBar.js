import React, { Component } from 'react'
import Productos from './Productos';

import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

export default class FilterBar extends Component {
  render() {
    return (
      <div className='bg-light p-3'>
        <Container className='alig-items-center'>
          <h5 className='mb-2 text-center main-heading'>Selecciona la categoría del Producto</h5>
          <div className='menu-tabs container'>
            <div className='menu-tab d-flex justify-content-around'>
              <button className='btn btn-secondary'>Categoría 1</button>
              <button className='btn btn-secondary'>Categoría 2</button>
              <button className='btn btn-secondary'>Categoría 3</button>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}