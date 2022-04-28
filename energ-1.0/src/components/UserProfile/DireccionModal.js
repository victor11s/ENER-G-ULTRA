import React, { Component, useState } from 'react'
import { Button, Form } from "react-bootstrap"




const DireccionModal = (props) => {
    
    return (
        <Form>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Calle"
                    defaultValue={props.calle}
                    required
                />
            </Form.Group>
            <Form.Group className='mt-3'>
                <Form.Control
                    type="text"
                    placeholder="Colonia"
                    defaultValue={props.colonia}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Ciudad"
                    defaultValue={props.ciudad}
                    rows={3}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Select aria-label="Default select example" 
                defaultValue={props.idEstado}
                defaultChecked={props.estado}>
                    <option>Selecciona tu Estado</option>
                    <option value="1">Nuevo León</option>
                    <option value="2">Campeche</option>
                    <option value="5">Tamaulipas</option>
                    <option value="7">Aguascalientes</option>
                    <option value="8">Baja California</option>
                    <option value="11">Chiapas</option>
                    <option value="14">Chihuahua</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Número Casa"
                    defaultValue={props.noCasa}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    defaultValue={props.codigoPostal}
                    type="number"
                    placeholder="Codigo Postal"
                    required
                />
            </Form.Group>


            <Button variant="danger" type="submit" className="mt-3" block>
                Guardar
            </Button>

        </Form>
    )
}

export default DireccionModal;