const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require('body-parser')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'energultra'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM producto";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        // res.send("Despues de seleccionar en la DB");
    });
});


app.get("/api/getProducto", (req, res) => {

    const idProducto = req.query.idProducto;

    // console.log(idProducto);

    const sqlSelect = "SELECT * FROM producto WHERE idProducto = (?)";
    db.query(sqlSelect, [idProducto], (err, result) => {
        res.send(result);
        // res.send("Despues de seleccionar en la DB");
    });
});

app.get('/api/insert', (req, res) => {
    const sqlInsert = "INSERT INTO producto(nombre, descripcion, precio, stock, ingredientes) VALUES ('Ener G boost','bebida energetica', 17 , 21 ,'extracto de guarana')";
    db.query(sqlInsert, (err, result) => {
        res.send("Despues de insertar en la DB");
    });
});

app.post('/api/agregarCarrito', (req, res) => {

    const idCarrito = req.body.idCarrito;
    const idProducto = req.body.idProducto;
    const cantidadProducto = req.body.cantidadProducto;
    

    const sqlSelect = "SELECT * FROM productocarrito WHERE idProducto=(?) AND idCarrito=(?)";
    db.query(sqlSelect, [idProducto, idCarrito], (error, result) => {
        // console.log(result[0]);
        if (result[0]) {
            res.send("Producto ya insertado:" + result[0]);
        }else{
            const sqlInsert = "INSERT INTO productocarrito(idCarrito, idProducto, Cantidad) VALUES (?,?,?)";
            db.query(sqlInsert, [idCarrito, idProducto, cantidadProducto], (err, result) => {
                res.send("Producto insertado");
                console.log([idCarrito, idProducto, cantidadProducto]);
            });  
        }
    });


});

app.listen(3001, () => {
    console.log('corriendo en 3001');
});

module.exports = db;