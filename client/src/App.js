import Header from './components/header'
import Screen from './components/screen'

import Auth from './utils/auth'
import Search from './pages/search'
import Trainer from './pages/trainer';
import Login from './pages/login';

function App() {
  return (
    <>
      <Header />
      <Screen>
        <Search />
      </Screen>
    </>
  )
}

export default App;
