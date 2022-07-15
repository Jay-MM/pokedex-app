import { useParams } from "react-router-dom"
import { GET_TRAINER } from '../utils/queries'
import { useQuery } from "@apollo/client"
import Spinner from '../components/spinner'
import Auth from '../utils/auth'

const Trainer = () => {
  const { id } = useParams()
  const { loading, error, data } = useQuery(GET_TRAINER, {
    variables: {
      _id: id
    }
  })

  if (loading) return <Spinner />
  if (error) return <p>Error {error.message}</p>

  return (
    <>
      <h1>{data.trainer.username}</h1>
      <p>{data.trainer.email}</p>

      <button onClick={Auth.logout}>LOGOUT</button>

      <h2>My Pokemon</h2>
      <ul>
        {data.trainer.pokemon.map((pokemon, i) => {
          return <li key={`${pokemon.name}-${i}`}>{pokemon.name}</li>
        })}
      </ul>
    </>
  )
}

export default Trainer