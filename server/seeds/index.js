const fetch = require('node-fetch')
const connection = require('../config/connection')
const { Trainer, Pokemon } = require('../models')

connection.once('open', async () => {
  // delete existing data
  await Pokemon.deleteMany()
  await Trainer.deleteMany()

  // seed pokemon
  for (const id of [1,2,3]) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const { id: pokemonId, name, moves, sprites } = await res.json()
    await Pokemon.create({
      pokemonId,
      name,
      moves: moves.map(moveData => moveData.move.name),
      sprites: sprites.other['official-artwork'].front_default
    })
  }

  
  // seed trainer
  const allPokemon = await Pokemon.find()
  const allPokemonIds = allPokemon.map(({ _id }) => _id.toString())
  console.log(allPokemonIds)

  await Trainer.create({
    username: 'ashketchum',
    email: 'ash@gmail.com',
    password: 'masterball',
    pokemon: allPokemonIds
  })

  console.log('Gotta catch \'em all!')
  process.exit(0)
})