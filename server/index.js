const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'energultra'
});

db.connect((error) => {
    if (error) {
        console.error('Error de conexion es: ' + error);
        return
    }
    console.log('Conectado a BD energultra')
})

module.exports=db;