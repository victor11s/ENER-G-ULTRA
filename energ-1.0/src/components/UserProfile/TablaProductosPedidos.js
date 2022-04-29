import React, { useState, useEffect } from 'react'

import Axios from 'axios';

function TablaProductosPedidos(props) {
    let [sProductos, setProductos] = useState([]);

    useEffect(() => {
        const usuarioString = window.localStorage.getItem("usuario");
        if (usuarioString) {

            const axiosProductosPedidos = async () => {

                await Axios.get('http://localhost:3001/api/getProductosPedidos',
                    {
                        params: {
                            idCarrito: props.idCarrito,
                        }
                    }).then((response) => {
                        console.log("Recuperando productos de carrito: " + props.idCarrito)
                        if (response.data[0]) {
                            console.log(response.data);
                            setProductos(response.data);
                        }

                    });

            }
            axiosProductosPedidos();
        }
    }, []);

    return (
        <tbody>
            {
                sProductos.map((producto, index) => {
                    return (
                        <tr id={index}>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    )
}

export default TablaProductosPedidos