import { useLocation } from 'react-router-dom'

import Banner from './Banner'
import Home from './Home'
import Background from './Background'
import Footer from './Footer'

function App() {
  const location = useLocation()

  return (
    <div id='main-content'>
      <Banner />
      {location.hash === '#background' ? <Background /> : <Home />}
      <Footer />
    </div>
  )
}

export default App
