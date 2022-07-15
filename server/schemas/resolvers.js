const { Pokemon, Trainer } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

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
  },
  Mutation: {
    login: async (parent, { email, password }, context, info) => {
      // find trainer in database, based on email
      const trainer = await Trainer.findOne({ email })
      
      // if not found, respond with an error
      if (!trainer) {
        throw new AuthenticationError("No user found with that email")
      }
      // verify password
      const isCorrectPW = await trainer.isCorrectPassword(password)
      console.log(isCorrectPW)

      // if not correct, respond with an error
      if (!isCorrectPW) {
        throw new AuthenticationError("Password is incorrect")
      }
      
      // if all good...
      // sign token
      const token = signToken(trainer)

      // send back an Auth object
      return {
        token,
        trainer
      } 
    },
    addPokemon: async (parent, args, context, info) => {
      const pokemon = await Pokemon.create(args)
      if (args.trainerId) {
        await Trainer.findByIdAndUpdate(args.trainerId, {
          $addToSet: {
            pokemon: pokemon._id
          }
        })
      }
      return pokemon
    },
    addTrainer: async (parent, args, context, info) => {
      return await (await Trainer.create(args)).populate('pokemon')
    }
  },
}

module.exports = resolvers