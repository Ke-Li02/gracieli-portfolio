import { useRef } from 'react'

import banner_pic from './assets/banner.webp'
import mail_icon from './assets/mail_icon.png'
import resume_icon from './assets/resume_icon.png'
import instagram_icon from './assets/instagram_icon.png'
import linkedin_icon from './assets/linkedin_icon.png'

import NavigationBar from './NavigationBar'

function Banner() {
  const ref = useRef(null);

  return (
    <>
      <div id='banner' ref={ref}>
        <img src={banner_pic} width='2388' height='1471' className='w-100 h-auto'></img>
        <a id='banner-name' href='/#home'>Ruoxi Li</a>
        <nav id='banner-navbar' className='d-flex flex-column justify-content-center'>
          <a className={`banner-nav-link text-center py-3 py-sm-4 py-md-5 ${location.hash === '#background' ? 'selected-banner-nav-link' : ''}`} href='/#background'>Background</a>
          <a className={`banner-nav-link text-center py-3 py-sm-4 py-md-5 ${location.hash === '#animation' ? 'selected-banner-nav-link' : ''}`} href='/#animation'>Animation</a>
          <a className={`banner-nav-link text-center py-3 py-sm-4 py-md-5 ${location.hash === '#illustration' ? 'selected-banner-nav-link' : ''}`} href='/#illustration'>Illustration</a>
        </nav>
        <div id='icon-bar' className='d-flex m-3'>
          <a href='mailto:gli@live.ca'>
            <img className='icon mx-2' src={mail_icon} width='99' height='99' alt="mail"></img>
            <span className='icon-description'>gli@live.ca</span>
          </a>
          <a href='' target='_blank'>
            <img className='icon mx-2' src={resume_icon} width='99' height='99' alt="resume"></img>
            <span className='icon-description'>resume</span>
          </a>
          <span className='flex-grow-1'></span>
          <a href='https://www.instagram.com/m1dnightingale/' target='_blank'>
            <img className='icon mx-2' src={instagram_icon} width='50' height='50' alt="instagram"></img>
          </a>
          <a href='https://www.linkedin.com/in/ruoxi-li-604b5a304/' target='_blank'>
            <img className='icon mx-2' src={linkedin_icon} width='50' height='50' alt="linkedin"></img>
          </a>
        </div>
      </div>
      <NavigationBar ref={ref} />
    </>
  )
}

export default Banner