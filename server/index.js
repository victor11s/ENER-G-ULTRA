const express = require('express');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'energultra'
});


app.get('/',(req, res)=>{
    const sqlInsert = "INSERT INTO producto(nombre, descripcion, precio, stock, ingrendientes) VALUES ('Ener G boost','bebida energetica', 17 , 20 ,'extracto de guarana');";
    db.query(sqlInsert,(err, result)=>{
        res.send("Hola Axel, despues de insertar en la DB");
    });
    
});

app.listen(3001,() =>{
  console.log('corriendo en 3001');
});