import React, { Component, useState } from 'react'
import { Button, Form } from "react-bootstrap"

const InfoPersonalModal = () => {
    return (
        <Form>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Apellido"
                    rows={3}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Día"
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Mes"
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Año"
                    required
                />
            </Form.Group>
           


            <Button variant="danger" type="submit"  className="mt-3"block>
                Guardar
            </Button>
            
        </Form>
    )
}

export default InfoPersonalModal;