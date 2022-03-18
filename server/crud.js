const db = require('../server/db');

exports.save = (req, res) => {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const stock = req.body.stock;
    const ingrendientes = req.body.ingrendientes;
    conexion.query('INSERT INTO producto SET ?', { 
        nombre: nombre,
        descripcion: descripcion,
        precio: precio,
        stock: stock,
        ingrendientes: ingrendientes},
    (error,results)=>{
        if(error){
            console.log(error)

        }else{
            res.redirect('/')
        }
    })
    //console.log(nombre + " - " + director + " - " + protagonista + " - " + año + " - " + duracion + " - " + categoria);

}