import { useRef, useEffect } from 'react'

import video from './assets/demo_reel.mp4'

function Animation() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }, [])

  return (
    <>
      <h1 ref={ref} className='title text-center border-bottom-thin px-1 px-md-2 mx-2 mx-sm-3 mx-md-4 pb-2 mb-3 mt-5'>
        ANIMATION
      </h1>

      <div className='mx-2 mx-sm-3 mx-md-4'>
        <video className='w-100 h-auto' width='1920' height='1080' controls>
            <source src={video} />
        </video>
      </div>
    </>
  )
}

export default Animation