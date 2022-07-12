import Container from './container'

const PokemonDetails = props => {
  const {
    id,
    name,
    moves,
    sprites,
    base_experience,
    height,
    weight
  } = props.pokemon

  return (
    <Container className="results">
      <h3>ID: {id}</h3>
      <img 
        src={sprites.other['official-artwork'].front_default}
        alt={name}
        height="auto"
        width="100%"
      />
      <h1>{name}</h1>
      <ul>
        <li>Base Experience: {base_experience}</li>
        <li>Height: {height}</li>
        <li>Weight: {weight}</li>
      </ul>
      <h2>Moves</h2>
      <ul>
        {moves.map(moveObj => (
          <li key={moveObj.move.name}>
            {moveObj.move.name}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default PokemonDetails