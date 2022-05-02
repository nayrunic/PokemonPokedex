const { Schema, model } = require('mongoose');

const pokemonSchema = new Schema({
    name: {
        type: String,
        requrie: true
    },
    ability: {
        type: String,
        requrie: true
    },
    hidenAbility: {
        type: String,
        requrie: true
    },
    moves: {
        type: Array,
        requrie: true
    },
    evolutions: {
        type: Array,
        requrie: true
    },
}, 
{
    timestamp: true
})

const pokemonModel = model('pokemons', pokemonSchema)

module.exports = pokemonModel