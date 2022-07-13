const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Pokemon {
    _id: ID
    pokemonId: Int
    name: String
    height: Int
    weight: Int
    base_experience: Int
    image: String
    moves: [String]
  }

  type Trainer {
    _id: ID
    username: String
    email: String
    pokemon: [Pokemon]
  }

  type Query {
    pokemon(pokemonId: Int): Pokemon
    pokemons: [Pokemon]
    trainer(_id: ID): Trainer
    trainers: [Trainer]
  }

`

module.exports = typeDefs