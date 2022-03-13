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
              <button className='btn btn-warning'>Bebida</button>
              <button className='btn btn-warning'>Alimento</button>
              <button className='btn btn-warning'>Bebida2</button>
              </div>

      </div>
      {/* Seccion de Prodcutos*/}
      <div className='menu-items container-fluid mt-1'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <div className='row my-5'>
              <div className='item1 col-12 col-md-6 col-lg-6 col-sl-4'>
                <div className='row Item-inside'>
                  {/*Para las imagenes */}
                  <div className='col-12 col-md-12 col-lg-4 img-div'>
                      <img src="" alt="productosFoto" className='img-fluid'/>
                  </div>
                  {/*Descripcion de los productos */}
                  <div className='col-12 col-md-12 col-lg-8'>
                    <div>
                      <h1>Maggi</h1>
                      <p>Prueba de Texto</p>
                    </div>
                    <div className='menu-precio'>
                      <div className='precio-libro d-flex'>
                        <h2>Precio : $12</h2>
                        <a href='#'><button className='btn btn-primary'>Agregar</button></a>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

      </div>

      </div>

    
    </div>)
  }
}