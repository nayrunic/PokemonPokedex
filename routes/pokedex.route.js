const express = require('express');
const pokedexRouter = express.Router();
const Pokemon = require('../models/pokemon.model')

pokedexRouter.get('/', async (req, res) => {
    const pokemon = await Pokemon.find({});
    res.status(200).json(pokemon);
})

pokedexRouter.get('/:pokemonName', async (req, res) => {
    let name = req.params.pokemonName;
    name = name.toLowerCase();
    name = name.charAt(0).toUpperCase() + name.slice(1);
    const pokemon = await Pokemon.find({ name: name });
    res.status(200).json(pokemon);
})

module.exports = pokedexRouter;