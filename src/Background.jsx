import { useRef, useEffect } from 'react'

import bg_pic_1 from './assets/image5.webp'
import bg_pic_2 from './assets/image8.webp'
import bg_pic_3 from './assets/image9.webp'
import bg_pic_4 from './assets/image10.webp'
import bg_pic_5 from './assets/image11.webp'
import bg_pic_6 from './assets/image12.webp'
import bg_pic_7 from './assets/image13.webp'
import bg_pic_8 from './assets/image14.webp'
import bg_pic_9 from './assets/image15.webp'
import lo_pic_1 from './assets/image16.webp'
import lo_pic_2 from './assets/image17.webp'
import lo_pic_3 from './assets/image18.webp'
import lo_pic_4 from './assets/image19.webp'
import lo_pic_5 from './assets/image20.webp'

function Background() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  return (
    <>
      <h1 ref={ref} className='text-center text-decoration-underline py-2 py-sm-3 py-md-4 m-2 m-sm-3 m-md-4'>
        Background
      </h1>

      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='bg-first-column d-flex flex-column'>
          <a>
            <img src={bg_pic_1} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_4} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_7} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </a>
        </div>
        <div className='bg-second-column d-flex flex-column'>
          <a>
            <img src={bg_pic_2} width='2100' height='1430' className='w-100 h-auto p-1 p-md-2'/>
          </a>
            <a>
            <img src={bg_pic_3} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_5} width='2100' height='1324' className='w-100 h-auto p-1 p-md-2'/>
          </a>
            <a>
            <img src={bg_pic_6} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_8} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_9} width='2100' height='1200' className='w-100 h-auto p-1 p-md-2'/>
          </a>
        </div>
      </div>

      <h1 className='text-center text-decoration-underline py-2 py-sm-3 py-md-4 m-2 m-sm-3 m-md-4'>
        Layout
      </h1>

      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='d-flex flex-column'>
          <a>
            <img src={lo_pic_1} width='4800' height='2700' className='w-100 h-auto p-1 p-md-2'/>
          </a>
          <a>
            <img src={lo_pic_3} width='5600' height='3150' className='w-100 h-auto p-1 p-md-2'/>
          </a>
          <a>
            <img src={lo_pic_5} width='5600' height='3150' className='w-100 h-auto p-1 p-md-2'/>
          </a>
        </div>
        <div className='d-flex flex-column'>
          <a>
            <img src={lo_pic_2} width='4800' height='2700' className='w-100 h-auto p-1 p-md-2'/>
          </a>
          <a>
            <img src={lo_pic_4} width='5600' height='3150' className='w-100 h-auto p-1 p-md-2'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Background