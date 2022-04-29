
import React, { Component , useState, useEffect} from 'react'

import { Button, Card, Col, Container, Form, Row, Table, Accordion } from 'react-bootstrap'
import AcordionChiquito from './AcordionChiquito';
import Axios from 'axios'


 
function AccordionPedido(props) { 
    
    let [varPedidos, setVarPedido] = useState(props.pedidos);

    useEffect(() => { 
        const usuarioString = window.localStorage.getItem("usuario");
        if (usuarioString) {
            const user = JSON.parse(usuarioString);
            const varNombreUsuario = user.nombreUsuario;
            console.log("Pedidos del usuario: "+varNombreUsuario);

            
        }
    }, []);
    return (<>
        

        <AcordionChiquito pedidos={props.pedidos}/>

    </>)
}
export default AccordionPedido;