import React, { useState, useEffect } from 'react'

import Axios from 'axios';
    
//props trae el idCarrito a consultar
function TablaProductosPedidosAdmi(props) {
    //State para almacenar los productos del pedido
    let [sProductos, setProductos] = useState([]);

    useEffect(() => {
        //Esta parte es para que solo se ejecute si la sesión ha sido iniciada:
        const usuarioString = window.localStorage.getItem("usuario");
        if (usuarioString) {
            //Función para Consultar los productos solicitados en el pedido:
            const axiosProductosPedidos = async () => {

                await Axios.get('http://localhost:3001/api/getProductosPedidos',
                    {
                        params: {
                            idCarrito: props.idCarrito,
                        }
                    }).then((response) => {  
                        if (response.data[0]) {
                            setProductos(response.data);
                        }

                    });

            }
            axiosProductosPedidos();
        }
    }, []);


    
    return (
        // Se agrega un renglon a la tabla con la información de cada producto que está en el carrito pedido:
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

export default TablaProductosPedidosAdmi