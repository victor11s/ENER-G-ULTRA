'use strict'

var mongoose= require('mongoose');




//uso de promesas
var mongoose=require('mongoose');

var app= require('./app')
var port=3900;
//dejar de usar metodos antiguos de moongoose
// mongoose.set('useFindAndModify',false);
mongoose.Promise=global.Promise;
//url,opciones en el connect

mongoose.connect('mongodb://localhost:27017/energultra',{useNewUrlParser: true})
.then(()=>
{
    console.log('La conexion se realizo de manera correcta')

    //crear servidor
    app.listen(port,()=>
    {
        console.log('servidor corriendo en http://localhost:'+port)
    })

});