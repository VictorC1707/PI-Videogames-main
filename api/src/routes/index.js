const { Router } = require('express');
const express = require("express");
const videogamesRouter = require("./videogames");
const genresRouter = require("./genres");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use(express.json());
router.use("/videogames", videogamesRouter);

router.use("/genres", genresRouter);


module.exports = router;
