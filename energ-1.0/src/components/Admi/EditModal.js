import Axios  from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Button, Form } from "react-bootstrap"

function EditModal (props) {

    console.log(props.idProducto)

    const [producto, setProducto] = useState([]);


    useEffect(() => {
        const axiosGet = async () => {
            
            await Axios.get('http://localhost:3001/api/getProducto',
                {
                    params: {
                        idProducto: props.idProducto,
                    }
                }).then((response) => {
                    console.log(response.data);
                    setProducto(response.data[0]);                    
                });
        }
        axiosGet();
    }, []);

    const handleBotonConfirmar = async (event) => {
        event.preventDefault();
        await Axios.get('http://localhost:3001/api/consultarNombreProducto',//para verificar que el nombre del producto no haya sido usado
            {
                params: {
                    nombreProducto: producto.nombre,
                    idProducto: props.idProducto,
                }
            }).then((response) => {
                

                if (response.data[0]) {

                    alert('Nombre de producto ya usado, seleccione otro nombre');

                    console.log("Handle Modal:");
                    console.log(response.data);

                } else {
                    
                    Axios.put('http://localhost:3001/api/actualizarProducto',
                        {
                            idProducto: props.idProducto,
                            nombreProducto: producto.nombre,
                            descripcionProducto:  producto.descripcion,
                            precioProducto: producto.precio,
                            stockProducto: producto.stock,
                            ingredientesProducto: producto.ingredientes
                        }).then((response) => {
                            console.log("Producto Actualizado: ");
                            console.log(response.data);
                            alert('Producto Actualizado');
                            // window.location.reload();
                            
                        });
                }
            });
    }    

    return (
        <Form onSubmit={handleBotonConfirmar}>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    required
                    defaultValue={producto.nombre}
                    onChange={(event)=>{producto.nombre=event.target.value}}
                />
            </Form.Group>
            <Form.Group className="mt-3"> 
                <Form.Control
                    type="text"
                    placeholder="Descripcion"
                    defaultValue={producto.descripcion}
                    onChange={(event)=>{producto.descripcion=event.target.value}}
                    rows={3}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Precio"
                    defaultValue={producto.precio}
                    onChange={(event)=>{producto.precio=event.target.value}}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Stock"
                    defaultValue={producto.stock}
                    onChange={(event)=>{producto.stock=event.target.value}}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Ingredientes"
                    defaultValue={producto.ingredientes}
                    onChange={(event)=>{producto.ingredientes=event.target.value}}
                    rows={3}
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Imagen"
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