import React, { Component, useState } from 'react'
import { Button, Form } from "react-bootstrap"
import Axios from 'axios';




const FormModal = () => {

    const [sNombreProducto, setNombreProducto] = useState('');
    const [sDescripcionProducto, setDescripcionProducto] = useState('');
    const [sPrecioProducto, setPrecioProducto] = useState(1);
    const [sStockProducto, setStockProducto] = useState(1);
    const [sIngredientesProducto, setIngredientesProducto] = useState('');
    const [sImagen1Producto, setImagen1Producto] = useState('');
    const [sImagen2Producto, setImagen2Producto] = useState('');
    const [sImagen3Producto, setImagen3Producto] = useState('');

    const handleBotonConfirmar = async (event) => {//La siguiente sección se utiliza para insertar un nuevo producto através del API
        event.preventDefault();
        await Axios.get('http://localhost:3001/api/consultarNuevoProducto',//para verificar que el nombre del producto no haya sido usado
            {
                params: {
                    nombreProducto: sNombreProducto,
                }
            }).then(async (response) => {//Respuesta de la consulta sobre la disponibilidad del nombre

                if (response.data[0]) {//Si no regresa nada entonces el nombre está disponible

                    alert('Nombre de producto ya usado, seleccione otro nombre');
                    // console.log("Handle Modal:");
                    // console.log(response.data);

                } else {

                    await Axios.post('http://localhost:3001/api/anadirProducto',//Añadir producto si el nombre no esta repetido
                        {
                            nombreProducto: sNombreProducto,
                            descripcionProducto: sDescripcionProducto,
                            precioProducto: parseFloat (sPrecioProducto),
                            stockProducto: parseInt(sStockProducto),
                            ingredientesProducto: sIngredientesProducto,
                        }).then(async (response) => {
                            console.log(response)
                            await Axios.get('http://localhost:3001/api/consultarNuevoProducto',//para recuperar el idProducto del que acabamos de añadir
                                {
                                    params: {
                                        nombreProducto: sNombreProducto,
                                    }
                                }).then((response) => {
                                    let imagenProductos = [sImagen1Producto, sImagen2Producto, sImagen3Producto]
                                    for (var i = 0; imagenProductos[i] != undefined && imagenProductos[i] != ''; i++) {
                                        Axios.post('http://localhost:3001/api/anadirImagenesProducto', {
                                            idProducto: response.data[0].idProducto,
                                            ubicacion: imagenProductos[i],
                                        });
                                    }
                                });// cierre de Axios consultarIdProducto
                            console.log("Producto Agregado: ");
                            alert('Producto Agregado');
                            window.location.reload();
                        });//cierre de Axios añadirProducto
                }
            });// cierre de Axios consultarNombreNuevoProducto
    }

    return (
        <Form onSubmit={handleBotonConfirmar}>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    onChange={(event) => { setNombreProducto(event.target.value) }}//Guardamos la información del campo en el state
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Descripcion"
                    rows={3}
                    onChange={(event) => { setDescripcionProducto(event.target.value) }}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Precio"
                    onChange={(event) => { setPrecioProducto(event.target.value) }}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Stock"
                    onChange={(event) => { setStockProducto(event.target.value) }}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Ingredientes"
                    rows={3}
                    onChange={(event) => { setIngredientesProducto(event.target.value) }}
                    required
                />
            </Form.Group>
            {<Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Imagen1"
                    rows={3}
                    onChange={(event) => { setImagen1Producto(event.target.value) }}
                    required
                />
            </Form.Group>}
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Imagen2"
                    onChange={(event) => { setImagen2Producto(event.target.value) }}
                    rows={3}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Imagen3"
                    onChange={(event) => { setImagen3Producto(event.target.value) }}
                    rows={3}
                />
            </Form.Group>


            <Button variant="danger" type="submit" className="mt-3" block>
                Agregar Producto
            </Button>

        </Form>
    )
}

export default FormModal;