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
    });
});


app.get("/api/getProducto", (req, res) => {

    const idProducto = req.query.idProducto;

    // console.log(idProducto);

    const sqlSelect = "SELECT * FROM producto WHERE idProducto = (?)";
    db.query(sqlSelect, [idProducto], (err, result) => {
        res.send(result);
    });
});

app.get("/api/getImagenes", (req, res) => {

    const idProducto = req.query.idProducto;

    // console.log(idProducto);

    const sqlSelect = "SELECT ubicacion, idFoto FROM fotoproducto WHERE idProducto = (?)";
    db.query(sqlSelect, [idProducto], (err, result) => {
        res.send(result);
    });
});

app.get('/api/insert', (req, res) => {
    const sqlInsert = "INSERT INTO producto(nombre, descripcion, precio, stock, ingredientes) VALUES ('Ener G boost','bebida energetica', 17 , 21 ,'extracto de guarana')";
    db.query(sqlInsert, (err, result) => {
        res.send("Despues de insertar en la DB");
    });
});

//Para agregar productos al carrito en la BD, usado en TarjetaProducto.js
app.post('/api/agregarCarrito', (req, res) => {

    const idCarrito = req.body.idCarrito;
    const idProducto = req.body.idProducto;
    const cantidadProducto = req.body.cantidadProducto;

    console.log("idCarito usado: "+idCarrito);

    const sqlSelect = "SELECT * FROM productocarrito WHERE idProducto=(?) AND idCarrito=(?)";
    db.query(sqlSelect, [idProducto, idCarrito], (error, result) => {
        // console.log(result[0]);
        if (result[0]) {
            res.send("Producto ya insertado:" + result[0]);
        } else {
            const sqlInsert = "INSERT INTO productocarrito(idCarrito, idProducto, Cantidad) VALUES (?,?,?)";
            db.query(sqlInsert, [idCarrito, idProducto, cantidadProducto], (err, result) => {
                res.send("Producto insertado");
                console.log([idCarrito, idProducto, cantidadProducto]);
            });
        }
    });
});

//Para obtener el idCarrito utilizado en el componenente NavBar.js
app.get('/api/getIdCarrito', (req, res) => {
    const nombreUsuario = req.query.nombreUsuario;
    const sqlSelect = "SELECT idCarrito FROM carrito WHERE nombreUsuario = (?) ORDER BY idCarrito ASC";
    db.query(sqlSelect, [nombreUsuario], (err, result) => {
        res.send(result);
    });
});

app.get('/api/getCarrito', (req, res) => {
    const idCarrito = req.query.idCarrito;
    const sqlSelect = "SELECT producto.idProducto, nombre, cantidad,precio,stock FROM productocarrito JOIN producto ON producto.idProducto=productocarrito.idProducto WHERE idCarrito = (?)";
    db.query(sqlSelect, [idCarrito], (err, result) => {
        res.send(result);
    });
});

app.delete('/api/eliminarItem', (req, res) => {
    const idCarrito = req.query.idCarrito;
    const idProducto = req.query.idProducto;
    console.log([idCarrito, idProducto]);
    const sqlSelect = "DELETE FROM productocarrito WHERE idCarrito = (?) AND idProducto = (?)";
    db.query(sqlSelect, [idCarrito, idProducto], (err, result) => {
        // console.log(result);
        res.send(result);
    });
});

//Usado en ProductoCarrito/Item.js:
app.put('/api/actualizarCantidad', (req, res) => {
    const idCarrito = req.body.idCarrito;
    const idProducto = req.body.idProducto;
    const cantidad = req.body.cantidad;
    if (cantidad != undefined) {
        console.log([idCarrito, idProducto]);
        const sqlSelect = "UPDATE productocarrito SET cantidad = (?) WHERE idCarrito = (?) AND idProducto = (?)";
        db.query(sqlSelect, [cantidad, idCarrito, idProducto], (err, result) => {
            // console.log(result);
            res.send(result);

            // res.send("Despues de seleccionar en la DB");
        });
    }
});

// para agregar usuarios
app.post('/api/agregarUsuario', (req, res) => {

    const nombreUsuario = req.body.nombreUsuario;
    const contraseña = req.body.contraseña;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    const sqlInsert = "INSERT INTO usuario(nombreUsuario, contraseña, nombre, apellido, tipo) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [nombreUsuario, contraseña, nombre, apellido,"usuario"], (err, result) => {
        res.send("Producto insertado");
        console.log([nombreUsuario, contraseña, nombre, apellido]);
    });
})

app.get('/api/consultarUsuario', (req, res) => {
    const nombreUsuario = req.query.nombreUsuario;
    const sqlSelect = "SELECT nombreUsuario FROM usuario WHERE nombreUsuario = (?)";
    db.query(sqlSelect, [nombreUsuario], (err, result) => {
        res.send(result);
        // res.send("Despues de seleccionar en la DB");
    });
});


//Utilizado en EditModal.js:
// para actualizar productos
app.put('/api/actualizarProducto', (req, res) => {
    
    const idProducto = req.body.idProducto;
    const nombreProducto = req.body.nombreProducto;
    const descripcionProducto = req.body.descripcionProducto;
    const precioProducto = req.body.precioProducto;
    const stockProducto = req.body.stockProducto;
    const ingredientesProducto = req.body.ingredientesProducto;

    console.log([nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto,idProducto]);

    const sqlInsert = "UPDATE producto SET nombre = (?), descripcion = (?), precio = (?), stock = (?), ingredientes = (?) WHERE idProducto = (?)";
    db.query(sqlInsert, [nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto,idProducto], (err, result) => {
        res.send("Producto actualizado");
        // console.log([nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto]);
    });
})

app.get('/api/consultarNombreProducto', (req, res) => { //Consultra si el nombre del producto esta disponible
                                                        //Excepto el nombre del producto a editar
    const idProducto = req.query.idProducto;
    const nombreProducto = req.query.nombreProducto;
    const sqlSelect = "SELECT nombre FROM producto WHERE nombre = (?) EXCEPT (SELECT nombre FROM producto WHERE idProducto = (?))";
    db.query(sqlSelect, [nombreProducto, idProducto], (err, result) => {
        res.send(result);
    });
});

// app.get("/api/geImagenes", (req, res) => {

//     const idProducto = req.query.idProducto;
//     // console.log(idProducto);

//     const sqlSelect = "SELECT ubicacion, idFoto FROM fotoproducto WHERE idProducto = (?)";
//     db.query(sqlSelect, [idProducto], (err, result) => {
//         res.send(result);
//     });
// });

app.put('/api/actualizarImagenesProducto', (req, res) => {
    const ubicacion = req.body.ubicacion;
    const idFoto = req.body.idFoto;

    console.log([ubicacion, idFoto]);

    const sqlUpdate = "UPDATE fotoproducto SET ubicacion = (?) WHERE idFoto = (?)";
    db.query(sqlUpdate, [ubicacion, idFoto], (err, result) => {
        res.send(result);
        // console.log([nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto]);
    });
});

//Para un nuevo producto
app.get('/api/consultarNuevoProducto', (req, res) => {
    const nombreProducto = req.query.nombreProducto;
    const sqlSelect = "SELECT idProducto FROM producto WHERE nombre = (?)";
    db.query(sqlSelect, [nombreProducto], (err, result) => {
        res.send(result);
    });
});

app.post('/api/anadirProducto', (req, res) => {
    
    const nombreProducto = req.body.nombreProducto;
    const descripcionProducto = req.body.descripcionProducto;
    const precioProducto = req.body.precioProducto;
    const stockProducto = req.body.stockProducto;
    const ingredientesProducto = req.body.ingredientesProducto;

    console.log([nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto]);

    const sqlInsert = "INSERT INTO producto(nombre, descripcion, precio, stock, ingredientes) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto], (err, result) => {
        res.send("Producto agregado");
        console.log([nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto]);
    });
})

app.post('/api/anadirImagenesProducto', (req, res) => {//Registra la ubicación de las imagenes pertencientes al producto

    const ubicacion = req.body.ubicacion;
    const idProducto = req.body.idProducto;

    const sqlInsert = "INSERT INTO fotoproducto(ubicacion, idProducto) VALUES (?,?)";
    db.query(sqlInsert, [ubicacion, idProducto], (err, result) => {
        res.send("Imagen insertada");
        console.log([ubicacion, idProducto]);
    });
})
//Para borrar productos
app.delete('/api/eliminarProducto', (req, res) => {
    const idProducto = req.query.idProducto;
    console.log([idProducto]);
    const sqlDelete = "DELETE FROM producto WHERE idProducto = (?)";
    db.query(sqlDelete, [idProducto], (err, result) => {
        // console.log(result);
        res.send(result);

    });
});

//Para borrar imagen de producto
app.delete('/api/eliminarFotoProducto', (req, res) => {
    const idFoto = req.query.idFoto;
    console.log([idFoto]);
    const sqlDelete = "DELETE FROM fotoproducto WHERE idFoto = (?)";
    db.query(sqlDelete, [idFoto], (err, result) => {

        res.send(result);

    });
});
app.listen(3001, () => {
    console.log('corriendo en 3001');
});
//Para verfificar el usuario en IniciarSesion.js
app.get('/api/verificarUsuario', (req, res) => {
    const nombreUsuario = req.query.nombreUsuario;
    const sqlSelect = "SELECT * FROM usuario WHERE nombreUsuario = (?)";
    db.query(sqlSelect, [nombreUsuario], (err, result) => {
        res.send(result);
    });
});

//Para editar información del usuario
app.put('/api/actualizarUsuario', (req, res) => {
    
    const nombreUsuario = req.body.nombreUsuario;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    console.log([nombre, apellido, nombreUsuario]);

    const sqlInsert = "UPDATE usuario SET nombre = (?), apellido = (?) WHERE nombreUsuario = (?)";
    db.query(sqlInsert, [nombre, apellido, nombreUsuario], (err, result) => {
        res.send(result);
    });
})

//Para recuperar la dirección del usuario, Usando en Direccion.js
app.get('/api/getDireccion', (req, res) => {
    const nombreUsuario = req.query.nombreUsuario;
    const sqlSelect = "SELECT calle, colonia, noCasa, codigoPostal, ciudad, estado.idEstado AS idEstado, estado.nombre AS estado FROM direccion JOIN estado ON estado.idEstado=direccion.idEstado WHERE nombreUsuario = (?)";
    db.query(sqlSelect, [nombreUsuario], (err, result) => {
        res.send(result);
    });
});

module.exports = db;