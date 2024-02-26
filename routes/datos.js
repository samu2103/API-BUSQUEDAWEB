const { Router } = require('express');
const { check } = require('express-validator');

//!Importar controller data
const { dataGet} = require('../controllers/data.controller');


const router = Router();


router.get('/', dataGet);






module.exports = router;   