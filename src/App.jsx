import home_pic_1 from './assets/home1.webp'
// import home_pic_2 from './assets/home2.webp'
import home_pic_3 from './assets/home3.webp'
import home_pic_4 from './assets/home4.webp'
import home_pic_5 from './assets/home5.webp'
import home_pic_6 from './assets/home6.webp'
import home_pic_7 from './assets/home7.webp'
import Banner from './Banner'
import AboutMe from './AboutMe'

function App() {
  return (
    <div id='main-content'>
      <Banner />
      <AboutMe />
      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='first-column d-flex flex-column'>
          <a>
            <img src={home_pic_1} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={home_pic_5} className='w-100 p-1 p-md-2'/>
          </a>
        </div>
        <div className='second-column d-flex flex-column'>
          <a>
            <img src={home_pic_6} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={home_pic_6} className='w-100 p-1 p-md-2'/>
          </a>
        </div>
        <div className='third-column d-flex flex-column'>
          <a>
            <img src={home_pic_3} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={home_pic_4} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={home_pic_7} className='w-100 p-1 p-md-2'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
