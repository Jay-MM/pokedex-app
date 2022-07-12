import { MdCatchingPokemon, MdClear } from 'react-icons/md'
import Container from "./container"

const SearchForm = props => {
  return (
    <form id="search-form" onSubmit={props.handleFormSubmit}>
      <Container>
        <input 
          value={props.searchTerm}
          onChange={props.handleInputChange}
          placeholder="Search Pokemon..."
          type="text"
        />
        <div>
          <button className="bg-green" type="submit">
            <MdCatchingPokemon size={35}/>
          </button>
        </div>
        {props.searchTerm && (
          <div>
            <button 
              onClick={props.reset}
              type="button"
            >
              <MdClear size={35} />
            </button>
          </div>
        )}
      </Container>
    </form>
  )
}

export default SearchForm