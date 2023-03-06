import Axios from 'axios';
import React, { Component, useEffect, useState } from 'react'
import { Button, Form, Col, Row } from "react-bootstrap"
import { FaGlasses } from 'react-icons/fa';

function EditModal(props) {

    //console.log(props.idProducto)

    //States (variables) del componente
    const [producto, setProducto] = useState([]);
    const [imagenes, setImagenes] = useState([]);
    const [idImagenes, setIdImagenes] = useState([]);
    const [botonBorrarImagen2, setBottonI2] = useState(false);
    const [botonBorrarImagen3, setBottonI3] = useState(false);


    useEffect(() => {
        const axiosGet = async () => {

            //OBTENER EL PRODUCTO SELECCIONADO MEDIANTE EL API
            await Axios.get('http://localhost:3001/api/getProducto',
                {
                    params: {
                        idProducto: props.idProducto,
                    }
                }).then((response) => {
                    console.log(response.data);
                    setProducto(response.data[0]);
                });
            
            //OBTENER LAS UBICACIONES DE LAS IMAGENES.
            await Axios.get('http://localhost:3001/api/getImagenes',
                {
                    params: {
                        idProducto: props.idProducto,
                    }
                }).then(async (response) => {
                    console.log(response.data);
                    let ubicaciones = [];
                    let idImgs = [];
                    response.data.map(fotoproducto => {
                        ubicaciones.push(fotoproducto.ubicacion);
                        idImgs.push(parseInt(fotoproducto.idFoto));
                        console.log(fotoproducto);
                    })
                    setImagenes(ubicaciones);
                    setIdImagenes(idImgs);
                    
                    //se habilitan o desabilitan los botones de borrar imagenes dependiendo si existen
                    if (ubicaciones[1] == '' || ubicaciones[1] == undefined) {
                        console.log(ubicaciones[1])
                        setBottonI2(true)
                    }
                    if (ubicaciones[2] == '' || ubicaciones[2] == undefined) {
                        console.log(ubicaciones[2])
                        setBottonI3(true)
                    }

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

                if (response.data[0]) { //Si ya existe un nombre del producto repetido no se acepta

                    alert('Nombre de producto ya usado, seleccione otro nombre');

                } else {//Si el nombre de producto no se repite se acepta la entrada

                    Axios.put('http://localhost:3001/api/actualizarProducto',//Actualizar Producto
                        {
                            idProducto: props.idProducto,
                            nombreProducto: producto.nombre,
                            descripcionProducto: producto.descripcion,
                            precioProducto: producto.precio,
                            stockProducto: producto.stock,
                            ingredientesProducto: producto.ingredientes
                        }).then(async (response) => {

                            for (var i = 0; imagenes[i] != undefined; i++) {

                                if (idImagenes[i] == undefined) { // Por si no se había agregado la imagen
                                    await Axios.post('http://localhost:3001/api/anadirImagenesProducto', {
                                        idProducto: props.idProducto,
                                        ubicacion: imagenes[i],
                                    });
                                } else { // Si la imagen ya estaba agregada se actualiza

                                    await Axios.put('http://localhost:3001/api/actualizarImagenesProducto', {
                                        idFoto: idImagenes[i],
                                        ubicacion: imagenes[i],
                                    });
                                }

                            }
                            console.log("Producto Actualizado: ");
                            console.log(response.data);
                            alert('Producto Actualizado');
                            window.location.reload();
                        });
                }
            });
    }

    const borrarImagen = (event) => { //Funcion para borrar imagen seleccionada
        if (window.confirm("¿Borrar imagen? Esto no se puede revertir")) {
            Axios.delete('http://localhost:3001/api/eliminarFotoProducto',
                {
                    params: {
                        idFoto: event.target.value,
                    }
                }).then((response) => {
                    console.log(response.data);
                    console.log(event.target.id)
                    document.getElementById('field' + event.target.id).value = "";
                    alert('Imagen eliminada');
                });
        }

    }


    //Se hace Forms para editar la descripcion del producto
    return (
        <Form onSubmit={handleBotonConfirmar}>
            <h4>Nombre:</h4>
            <Form.Group >
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    required
                    defaultValue={producto.nombre}
                    //Al realizarce un cambio cambian los valores:
                    onChange={(event) => { producto.nombre = event.target.value }} 
                />
                <h4>Descripción:</h4>
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Descripcion"
                    defaultValue={producto.descripcion}
                    //Al realizarce un cambio cambian los valores:
                    onChange={(event) => { producto.descripcion = event.target.value }}
                    rows={3}
                />
            </Form.Group>
            <h4>Precio:</h4>
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Precio"
                    pattern='^[0-9]+'
                    min='0'
                    step="any"
                    defaultValue={producto.precio}
                    //Al realizarce un cambio cambian los valores:
                    onChange={(event) => { producto.precio = event.target.value }}
                    required
                />
            </Form.Group>
            <h4>Stock:</h4>         
            <Form.Group className="mt-3">
                <Form.Control
                    type="number"
                    placeholder="Stock "
                    pattern='^[0-9]+'
                    min='0'
                    defaultValue={producto.stock}
                    //Al realizarce un cambio cambian los valores:
                    onChange={(event) => { producto.stock = event.target.value }}
                    required
                />
            </Form.Group>
            <h4>Ingredientes:</h4>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Ingredientes"
                    defaultValue={producto.ingredientes}
                    //Al realizarce un cambio cambian los valores:
                    onChange={(event) => { producto.ingredientes = event.target.value }}
                    rows={3}
                />
            </Form.Group>
            <h4>Imagenes:</h4>
            <Form.Group className="mt-3">
                <Form.Control
                    type="text"
                    placeholder="Imagen"
                    defaultValue={imagenes[0]}
                    //Al realizarce un cambio cambian los valores:
                    onChange={(event) => { imagenes[0] = event.target.value; console.log(imagenes[0]) }}
                    rows={3}
                    required
                />
            </Form.Group>
            <Form.Group className="mt-3">
                <Form.Control
                    id='fieldimagen2'
                    type="text"
                    placeholder="Imagen2"
                    defaultValue={imagenes[1]}
                    //Al realizarce un cambio cambian los valores:
                    onChange={(event) => {
                        imagenes[1] = event.target.value;
                        console.log(imagenes[1])
                    }}
                    rows={3}
                />
            </Form.Group>
            <Button
                id='imagen2'
                variant="info"
                value={idImagenes[1]}
                className="mt-3 btn text-right"
                // se agrego un boton para borrar la imagen 2 y 3 , ya que estas no son siempre necesarias, solo la 1 primera
                onClick={borrarImagen}
                //el evento del borrar la imagen se realiza cada que se hace click en el boton de borrar
                disabled={botonBorrarImagen2}>    
                Borrar Imagen 2
            </Button>
            <Form.Group className="mt-3">
                <Form.Control
                    id='fieldimagen3'
                    type="text"
                    placeholder="Imagen3"
                    defaultValue={imagenes[2]}
                    //Al realizarce un cambio cambian los valores:
                    onChange={(event) => { imagenes[2] = event.target.value; console.log(imagenes[2]) }}
                    rows={3}
                />
            </Form.Group>
            
            <Button
                id='imagen3'
                variant="info"
                value={idImagenes[2]}
                onClick={borrarImagen}
                className="mt-3 justify-content-md-end"
                //Se activa o desactiva dependiendo si existe o no la imagen 3
                disabled={botonBorrarImagen3}>
                Borrar Imagen 3
            </Button>
            
            {/* Boton para confirmar la edición: */}
            <Col>
                <Button variant="danger" type="submit" className="mt-3" block>
                    Confirmar
                </Button>

            </Col>
        </Form>
    )
}

export default EditModal;