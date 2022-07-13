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
  }

  type Query {
    pokemons: [Pokemon]
    trainers: [Trainer]
  }

`

module.exports = typeDefs