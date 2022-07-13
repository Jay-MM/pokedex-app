const { Pokemon, Trainer } = require('../models')

const resolvers = {
  Query: {
    pokemons: async () => {
      return await Pokemon.find()
    },
    trainers: async () => {
      return await Trainer.find()
    },
  }
}

module.exports = resolvers