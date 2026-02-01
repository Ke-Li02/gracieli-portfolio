import { useLocation } from 'react-router-dom'

import Banner from './Banner'
import Home from './Home'
import Background from './Background'
import Animation from './Animation'
import Illustration from './Illustration'
import Footer from './Footer'

function App() {
  const location = useLocation()

  return (
    <div id='main-content'>
      <Banner />
      {
        location.hash === '#background' ? <Background /> : 
        location.hash === '#animation' ? <Animation /> :
        location.hash === '#illustration' ? <Illustration /> :
        <Home />
      }
      <Footer />
    </div>
  )
}

export default App
