const express = require('express');
const req = require('express/lib/request');
const router = express.Router();

const conexion = require('./database/db')

router.get('/', (req, res) => {

    conexion.query('SELECT * FROM peliculas', (error, results) => {
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