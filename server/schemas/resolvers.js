const { Pokemon, Trainer } = require('../models')

const resolvers = {
  Query: {
    pokemon: async (parent, args, context, info) => {
      return await Pokemon.findOne({ pokemonId: args.pokemonId })
    },
    pokemons: async () => {
      return await Pokemon.find()
    },
    trainer: async (parent, args, context, info) => {
      return await Trainer.findById(args._id).populate('pokemon')
    },
    trainers: async () => {
      return await Trainer.find().populate('pokemon')
    },
  }
}

module.exports = resolvers