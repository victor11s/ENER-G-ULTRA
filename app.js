const express = require('express');
const { JSON } = require('mysql/lib/protocol/constants/types');
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}));
app.use(express(JSON));

app.use('/', require('./server/router'));

app.listen(5000, () => {
    console.log('SERVER RUNNING on http://localhost:5000/%27'); 

});