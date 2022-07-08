import Header from './components/header'
import SearchForm from './components/searchForm'
import PokemonDetails from './components/pokemonDetails'
import Spinner from './components/spinner'

function App() {
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
