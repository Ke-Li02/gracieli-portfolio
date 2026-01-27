import { useLocation } from 'react-router-dom'

import Banner from './Banner'
import Home from './Home'
import Background from './Background'

function App() {
  const location = useLocation()

  return (
    <div id='main-content'>
      <Banner />
      {location.hash === '#background' ? <Background /> : <Home />}
    </div>
  )
}

export default App
