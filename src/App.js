import { useState, useEffect } from 'react'
import Header from './components/header'
import SearchForm from './components/searchForm'
import PokemonDetails from './components/pokemonDetails'
import Spinner from './components/spinner'

function App() {
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('ninetales')

  useEffect(() => {
    getPokemon()
  }, [])

  const getPokemon = () => {
    setLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
      .then(res => res.json())
      .then(json => setPokemon(json))
      .catch(err => setError('Pokemon not found'))
      .finally(() => setLoading(false))
  }

  return (
    <>
      <Header />
      <SearchForm />
      <PokemonDetails />
      <Spinner />
    </>
  );
}

export default App;
