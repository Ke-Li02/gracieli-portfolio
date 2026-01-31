import { useState } from 'react'

import home_pic_1 from './assets/image1.webp'
import home_pic_2 from './assets/image2.webp'
import home_pic_3 from './assets/image3.webp'
import home_pic_4 from './assets/image4.webp'
import home_pic_5 from './assets/image5.webp'
import home_pic_6 from './assets/image6.webp'
import home_pic_7 from './assets/image7.webp'

import AboutMe from './AboutMe'
import Popup from './Popup'

function Home() {
  const [image, setImage] = useState(null)

  return (
    <>
      <AboutMe />
      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='home-first-column d-flex flex-column'>
          <div role='button' onClick={() => setImage(home_pic_1)}>
            <img src={home_pic_1} width='3840' height='2160' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(home_pic_5)}>
            <img src={home_pic_5} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
        <div className='home-second-column d-flex flex-column'>
          <div role='button' onClick={() => setImage(home_pic_2)}>
            <img src={home_pic_2} width='2916' height='3387' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(home_pic_6)}>
            <img src={home_pic_6} width='3000' height='4000' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
        <div className='home-third-column d-flex flex-column'>
          <div role='button' onClick={() => setImage(home_pic_3)}>
            <img src={home_pic_3} width='3840' height='2160' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(home_pic_4)}>
            <img src={home_pic_4} width='3840' height='2160' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(home_pic_7)}>
            <img src={home_pic_7} width='5760' height='3240' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
      </div>
      {image != null && <Popup image={image} setImage={setImage} />}
    </>
  )
}

export default Home