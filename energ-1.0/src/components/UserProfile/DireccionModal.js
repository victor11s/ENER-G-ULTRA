import React, { Component, useState } from 'react'
import { Button, Form } from "react-bootstrap"

const DireccionModal = () => {
    
    return (
        <Form>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Calle"
                    required
                />
            </Form.Group>
            <Form.Group className='mt-3'>
                <Form.Control
                    type="text"
                    placeholder="Colonia"
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Ciudad"
                    rows={3}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Select aria-label="Default select example">
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
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
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