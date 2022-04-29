import React, { Component, useState } from 'react'
import { Button, Form } from "react-bootstrap"

const InfoPersonalAdmiModal = () => {
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
           
            <Button variant="danger" type="submit"  className="mt-3"block>
                Guardar
            </Button>
            
        </Form>
    )
}

export default InfoPersonalAdmiModal;