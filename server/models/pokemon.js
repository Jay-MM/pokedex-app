const { Schema, DataTypes, model } = require('mongoose')

const pokemonSchema = new Schema({
  pokemonId: Number,
  name: {
    type: String,
    required: 'A name is required',
    trim: true,
  },
  height: Number,
  weight: Number, 
  image: String,
  base_experience: Number,
  moves: [DataTypes.Mixed]
})

const Pokemon = model('Pokemon', pokemonSchema)

module.exports = Pokemon