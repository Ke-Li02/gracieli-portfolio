import { useRef, useState, useEffect } from 'react'

import bg_pic_1 from './assets/image5.webp'
import bg_pic_2 from './assets/image8.webp'
import bg_pic_3 from './assets/image9.webp'
import bg_pic_4 from './assets/image10.webp'
import bg_pic_5 from './assets/image11.webp'
import bg_pic_6 from './assets/image12.webp'
import bg_pic_7 from './assets/image13.webp'
import bg_pic_8 from './assets/image14.webp'
import bg_pic_9 from './assets/image7.webp'
import lo_pic_1 from './assets/image16.webp'
import lo_pic_2 from './assets/image17.webp'
import lo_pic_3 from './assets/image18.webp'
import lo_pic_4 from './assets/image19.webp'
import lo_pic_5 from './assets/image20.webp'
import lo_pic_6 from './assets/image21.webp'

import Popup from './Popup'

function Background() {
  const ref = useRef(null);
  const [image, setImage] = useState(null)

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  return (
    <>
      <h1 ref={ref} className='title text-center border-bottom-thin px-1 px-md-2 mx-2 mx-sm-3 mx-md-4 pb-2 mb-3 mt-5'>
        BACKGROUND
      </h1>

      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='bg-first-column d-flex flex-column'>
          <div role='button' onClick={() => setImage(bg_pic_1)}>
            <img src={bg_pic_1} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(bg_pic_4)}>
            <img src={bg_pic_4} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(bg_pic_7)}>
            <img src={bg_pic_7} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
        <div className='bg-second-column d-flex flex-column'>
          <div role='button' onClick={() => setImage(bg_pic_2)}>
            <img src={bg_pic_2} width='2100' height='1430' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(bg_pic_3)}>
            <img src={bg_pic_3} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(bg_pic_5)}>
            <img src={bg_pic_5} width='2100' height='1324' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(bg_pic_6)}>
            <img src={bg_pic_6} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(bg_pic_8)}>
            <img src={bg_pic_8} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(bg_pic_9)}>
            <img src={bg_pic_9} width='5760' height='3240' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
      </div>

      <h1 className='title text-center border-bottom-thin px-1 px-md-2 mx-2 mx-sm-3 mx-md-4 pb-2 mb-3 mt-5'>
        LAYOUT
      </h1>

      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='d-flex flex-column'>
          <div role='button' onClick={() => setImage(lo_pic_1)}>
            <img src={lo_pic_1} width='4800' height='2700' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(lo_pic_3)}>
            <img src={lo_pic_3} width='5600' height='3150' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(lo_pic_5)}>
            <img src={lo_pic_5} width='5600' height='3150' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
        <div className='d-flex flex-column'>
          <div role='button' onClick={() => setImage(lo_pic_2)}>
            <img src={lo_pic_2} width='4800' height='2700' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(lo_pic_4)}>
            <img src={lo_pic_4} width='5600' height='3150' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(lo_pic_6)}>
            <img src={lo_pic_6} width='5600' height='3150' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
      </div>
      {image != null && <Popup image={image} setImage={setImage} />}
    </>
  )
}

export default Background