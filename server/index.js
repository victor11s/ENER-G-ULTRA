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

    console.log("idCarito usado: " + idCarrito);

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

//Para obtener los productos del carrito, usado en pages/Carrito.js
app.get('/api/getCarrito', (req, res) => {
    const idCarrito = req.query.idCarrito;
    const sqlSelect = "SELECT producto.idProducto, nombre, cantidad,precio,stock FROM productocarrito JOIN producto ON producto.idProducto=productocarrito.idProducto WHERE idCarrito = (?)";
    db.query(sqlSelect, [idCarrito], (err, result) => {
        res.send(result);
    });
});
//Para obtener el idDireccion, usado en pages/Carrito.js
app.get('/api/getIdDireccion', (req, res) => {
    const nombreUsuario = req.query.nombreUsuario;
    const sqlSelect = "SELECT idDireccion FROM direccion WHERE nombreUsuario = (?)";
    db.query(sqlSelect, [nombreUsuario], (err, result) => {
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

// para agregar usuarios, usado en Registrarse.js
app.post('/api/agregarUsuario', (req, res) => {

    const nombreUsuario = req.body.nombreUsuario;
    const contraseña = req.body.contraseña;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;

    const sqlInsert = "INSERT INTO usuario(nombreUsuario, contraseña, nombre, apellido, tipo) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [nombreUsuario, contraseña, nombre, apellido, "usuario"], (err, result) => {
        res.send("Producto insertado");
        console.log([nombreUsuario, contraseña, nombre, apellido]);
    });
})
//Para agregar un nuevo carrito despues de agregar un perfil, usado en Registrarse.js
app.post('/api/agregarNuevoCarrito', (req, res) => {
    const nombreUsuario = req.body.nombreUsuario;

    const sqlInsert = "INSERT INTO carrito(nombreUsuario, confirmacionCompra) VALUES (?,?)";
    db.query(sqlInsert, [nombreUsuario, false], (err, result) => {
        res.send("Producto insertado");
        console.log([nombreUsuario, false]);
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

    console.log([nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto, idProducto]);

    const sqlInsert = "UPDATE producto SET nombre = (?), descripcion = (?), precio = (?), stock = (?), ingredientes = (?) WHERE idProducto = (?)";
    db.query(sqlInsert, [nombreProducto, descripcionProducto, precioProducto, stockProducto, ingredientesProducto, idProducto], (err, result) => {
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

// para actualizar Direccion, usado en DireccionModal.js
app.put('/api/actualizarDireccion', (req, res) => {

    const nombreUsuario = req.body.nombreUsuario;
    const calle = req.body.calle;
    const colonia = req.body.colonia;
    const noCasa = req.body.noCasa;
    const codigoPostal = req.body.codigoPostal;
    const idEstado = req.body.idEstado;

    console.log([calle, colonia, noCasa, codigoPostal, idEstado, nombreUsuario]);

    const sqlInsert = "UPDATE direccion SET calle = (?), colonia = (?), noCasa = (?), codigoPostal = (?), idEstado = (?) WHERE nombreUsuario = (?)";
    db.query(sqlInsert, [calle, colonia, noCasa, codigoPostal, idEstado, nombreUsuario], (err, result) => {
        res.send("Producto actualizado");
        console.log([calle, colonia, noCasa, codigoPostal, idEstado, nombreUsuario]);
    });
})

// para agregar direccion, usado en DireccionModal.js
app.post('/api/agregarDireccion', (req, res) => {

    const nombreUsuario = req.body.nombreUsuario;
    const calle = req.body.calle;
    const colonia = req.body.colonia;
    const noCasa = req.body.noCasa;
    const codigoPostal = req.body.codigoPostal;
    const idEstado = req.body.idEstado;

    const sqlInsert = "INSERT INTO direccion(calle, colonia, noCasa, codigoPostal, idEstado, nombreUsuario) VALUES (?,?,?,?,?,?)";
    db.query(sqlInsert, [calle, colonia, noCasa, codigoPostal, idEstado, nombreUsuario], (err, result) => {
        res.send("Producto insertado");
        console.log([calle, colonia, noCasa, codigoPostal, idEstado, nombreUsuario]);
    });
})

//Usado en PayPalCheckOut/PayPal.js:
app.put('/api/actualizarConfirmacionCompra', (req, res) => {
    const idCarrito = req.body.idCarrito;
    const confirmacionCompra = req.body.confirmacionCompra;

    console.log([confirmacionCompra, idCarrito]);
    const sqlSelect = "UPDATE carrito SET confirmacionCompra = (?) WHERE idCarrito = (?)";
    db.query(sqlSelect, [confirmacionCompra, idCarrito], (err, result) => {
        // console.log(result);
        res.send(result);

        // res.send("Despues de seleccionar en la DB");
    });
});
//Para agregar una nueva orden de un carrito, usado en PayPalCheckOut/PayPal.js:
app.post('/api/agregarOrden', (req, res) => {
    const idCarrito = req.body.idCarrito;
    const numPedido = req.body.numPedido;
    const idDireccion = req.body.idDireccion;
    const status = req.body.status;

    const sqlInsert = "INSERT INTO orden(idCarrito, numPedido,idDireccion,status) VALUES (?,?,?,?)";
    db.query(sqlInsert, [idCarrito, numPedido,idDireccion,status], (err, result) => {
        res.send("Orden insertada en la tabla orden de la BD");
        console.log([idCarrito, numPedido,idDireccion,status]);
    });
})

//Para recuperar los pedidos del usario, Usando en UserProfile/AccordionPedido.js
app.get('/api/getPedidos', (req, res) => {
    const nombreUsuario = req.query.nombreUsuario;
    const sqlSelect = "SELECT numPedido, carrito.idCarrito AS idCarrito FROM orden JOIN carrito ON orden.idCarrito=carrito.idCarrito WHERE carrito.nombreUsuario = (?) AND confirmacionCompra = (?)";
    db.query(sqlSelect, [nombreUsuario, true], (err, result) => {
        res.send(result);
    });
});

//Para recuperar los productos pedidos en un carrito con confirmacion de compra, Usando en AcordionChiquito.js
app.get('/api/getProductosPedidos', (req, res) => {
    const idCarrito = req.query.idCarrito;
    const sqlSelect = "SELECT producto.nombre AS nombre, cantidad FROM productocarrito JOIN producto ON productocarrito.idProducto=producto.idProducto WHERE idCarrito = (?)";
    db.query(sqlSelect, [idCarrito], (err, result) => {
        res.send(result); 
    });
});
//Para recuperar los usuarios con pedidos, usado en PedidosAdmi.js
app.get('/api/getUsuariosPedidos', (req, res) => {
    const sqlSelect = "SELECT DISTINCT nombreUsuario FROM carrito JOIN orden ON orden.idCarrito=carrito.idCarrito";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        // res.send("Despues de seleccionar en la DB");
    });
});
//Para recuperar los pedidos de un usuariousado en PedidosIndividualesAdmi.js
app.get('/api/getPedidosIndividuales', (req, res) => {
    const nombreUsuario = req.query.nombreUsuario;
    const sqlSelect = "SELECT producto.nombre AS nombre, cantidad FROM productocarrito JOIN producto ON productocarrito.idProducto=producto.idProducto WHERE idCarrito = (?)";
    db.query(sqlSelect, [idCarrito], (err, result) => {
        res.send(result); 
    });
});

module.exports = db;