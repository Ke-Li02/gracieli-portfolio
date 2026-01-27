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
  return (
    <>
      <h1 className='text-center text-decoration-underline m-2 m-sm-3 m-md-4'>
        Background
      </h1>

      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='bg-first-column d-flex flex-column'>
          <a>
            <img src={bg_pic_1} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_4} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_7} className='w-100 p-1 p-md-2'/>
          </a>
        </div>
        <div className='bg-second-column d-flex flex-column'>
          <a>
            <img src={bg_pic_2} className='w-100 p-1 p-md-2'/>
          </a>
            <a>
            <img src={bg_pic_3} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_5} className='w-100 p-1 p-md-2'/>
          </a>
            <a>
            <img src={bg_pic_6} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_8} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={bg_pic_9} className='w-100 p-1 p-md-2'/>
          </a>
        </div>
      </div>

      <h1 className='text-center text-decoration-underline m-2 m-sm-3 m-md-4'>
        Layout
      </h1>

      <div className='d-flex mx-2 mx-sm-3 mx-md-4'>
        <div className='d-flex flex-column'>
          <a>
            <img src={lo_pic_1} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={lo_pic_3} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={lo_pic_5} className='w-100 p-1 p-md-2'/>
          </a>
        </div>
        <div className='d-flex flex-column'>
          <a>
            <img src={lo_pic_2} className='w-100 p-1 p-md-2'/>
          </a>
          <a>
            <img src={lo_pic_4} className='w-100 p-1 p-md-2'/>
          </a>
        </div>
      </div>
    </>
  )
}

export default Background