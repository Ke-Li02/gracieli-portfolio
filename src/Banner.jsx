import { useRef } from 'react'

import banner_pic from './assets/banner.webp'

import NavigationBar from './NavigationBar'

function Banner() {
  const color = '#C7DFF3';
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
            <svg className='banner-icon mx-2' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path stroke={color} strokeWidth="12" d="M22 46a8 8 0 0 1 8-8h132a8 8 0 0 1 8 8v100a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8V46Z"/>
              <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="m44 60 52 44 52-44"/>
            </svg>
            <span className='icon-description'>gli@live.ca</span>
          </a>
          <a href='/cv.pdf' target='_blank'>
            <svg className='banner-icon mx-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V9M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19M9 13H15M9 17H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className='icon-description'>resume</span>
          </a>
          <span className='flex-grow-1'></span>
          <a href='https://www.instagram.com/m1dnightingale/' target='_blank'>
            <svg className='banner-icon mx-2' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path stroke={color} strokeWidth="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"/>
              <circle cx="96" cy="96" r="30" stroke={color} strokeWidth="12"/>
              <circle cx="135" cy="57" r="9" fill={color}/>
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/ruoxi-li-604b5a304/' target='_blank'>
            <svg className='banner-icon mx-2' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
              <rect width="132" height="132" x="30" y="30" stroke={color} strokeWidth="12" rx="16"/>
              <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M66 86v44"/>
              <circle cx="66" cy="64" r="8" fill={color}/>
              <path stroke={color} strokeLinecap="round" strokeWidth="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"/>
            </svg>
          </a>
        </div>
      </div>
      <NavigationBar ref={ref} />
    </>
  )
}

export default Banner