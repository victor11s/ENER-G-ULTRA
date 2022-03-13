import React, { Component } from 'react'
import Productos from './Productos';

import { Col, Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

export default class FilterBar extends Component {
  render() {

   
    return (
      <div>
        <h5 className='mt-1 text-center main-heading'>Selecciona la categoría del Producto</h5>
        <div className='menu-tabs container'>
          <div className='menu-tab d-flex justify-content-around'>
            <button className='btn btn-secondary'>Bebida</button>
            <button className='btn btn-secondary'>Alimento</button>
            <button className='btn btn-secondary'>Bebida2</button>
          </div>

        </div>

        </div>
    )  
  }
}