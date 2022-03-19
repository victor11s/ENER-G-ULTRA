'use strict'


//cargar modulos de node para crear servidor
var express=require ('express');
var bodyParser=require('body-parser');


//ejecutar express
var app =express();
//cargar ficheros


//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//convertir cualquier peticion a json
//cors

//añadir prefijos a rutas


//metodo para apiREST
app.get('/probando',(req, res) =>
{
    console.log("Hola Mundo");
});

//exportar modulos
module.exports=app;
