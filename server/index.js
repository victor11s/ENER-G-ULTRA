const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'energultra'
});

app.use(cors());
// app.use(express.json());
app.get('/api/get',(req, res)=>{
    const sqlSelect = "SELECT * FROM producto";
    db.query(sqlSelect,(err, result)=>{
        res.send(result);
        // res.send("Despues de seleccionar en la DB");
    });
});

app.get('/api/insert',(req, res)=>{
    const sqlInsert = "INSERT INTO producto(nombre, descripcion, precio, stock, ingredientes) VALUES ('Ener G boost','bebida energetica', 17 , 21 ,'extracto de guarana')";
    db.query(sqlInsert,(err, result)=>{
        res.send("Despues de insertar en la DB");
    });
});

app.listen(3001,() =>{
  console.log('corriendo en 3001');
});

module.exports=db;