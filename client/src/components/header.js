import { MdPerson } from 'react-icons/md'

const Header = () => {
  return (
    <header className="app-header">
      <div className="lense">
        <MdPerson size={45} />
      </div>
      <div className="lights">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  )
}

export default Header