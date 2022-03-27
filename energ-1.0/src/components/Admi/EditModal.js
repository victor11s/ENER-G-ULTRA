import React, { Component, useState } from 'react'
import { Button, Form } from "react-bootstrap"

const EditModal = () => {
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
                    placeholder="Descripcion"
                    rows={3}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Precio"
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Stock"
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Ingredientes"
                    rows={3}
                />
            </Form.Group>

            <Button variant="danger" type="submit"  className="mt-3"block>
                Confirmar
            </Button>
            
        </Form>
    )
}

export default EditModal;