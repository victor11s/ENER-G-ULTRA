const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const conexion = require('./db')

router.get('/', (req, res) => {
    const sqlInsert = "INSERT INTO producto(nombre, descripcion, precio, stock, ingredientes) VALUES ('Ener G boost','bebida energetica', 17 , 20 ,'extracto de guarana')";
    conexion.query(sqlInsert,(err, result)=>{
        if(err){
            throw err;
        }else
        res.send("Hola Axel, despues de insertar en la DB");
    });
    conexion.query('SELECT * FROM producto', (error, results) => {
        if (error) {
            throw error;
        } else {
            res.render('index', { results: results });
        }
    })

})
const crud = require('./crud');
router.post('/save', crud.save)


module.exports = router;