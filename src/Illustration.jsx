import { useRef, useState, useEffect } from 'react'

import il_pic_1 from './assets/image1.webp'
import il_pic_2 from './assets/image6.webp'
import il_pic_3 from './assets/image3.webp'
import il_pic_4 from './assets/image22.webp'
import il_pic_5 from './assets/image4.webp'

import Popup from './Popup'

function Illustration() {
  const ref = useRef(null);
  const [image, setImage] = useState(null)

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  return (
    <>
      <h1 ref={ref} className='title text-center border-bottom-thin px-1 px-md-2 mx-2 mx-sm-3 mx-md-4 pb-2 mb-3 mt-5'>
        ILLUSTRATION
      </h1>

      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='il-first-column d-flex flex-column'>
          <div role='button' onClick={() => setImage(il_pic_1)}>
            <img src={il_pic_1} width='3840' height='2160' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(il_pic_3)}>
            <img src={il_pic_3} width='3840' height='2160' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(il_pic_4)}>
            <img src={il_pic_4} width='3840' height='2121' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
        <div className='il-second-column d-flex flex-column'>
          <div role='button' onClick={() => setImage(il_pic_2)}>
            <img src={il_pic_2} width='3000' height='4000' className='w-100 h-auto p-1 p-md-2'/>
          </div>
          <div role='button' onClick={() => setImage(il_pic_5)}>
            <img src={il_pic_5} width='3840' height='2160' className='w-100 h-auto p-1 p-md-2'/>
          </div>
        </div>
      </div>
      {image != null && <Popup image={image} setImage={setImage} />}
    </>
  )
}

export default Illustration