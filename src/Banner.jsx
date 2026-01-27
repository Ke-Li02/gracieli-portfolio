import banner_pic from './assets/banner.webp'
import mail_icon from './assets/mail_icon.png'
import resume_icon from './assets/resume_icon.png'
import instagram_icon from './assets/instagram_icon.png'
import linkedin_icon from './assets/linkedin_icon.png'

function Banner() {
  return (
    <div id='banner'>
      <img src={banner_pic} className='w-100'></img>
      <a id='name' href='.'>Ruoxi Li</a>
      <nav id='nav-bar' className='d-flex flex-column justify-content-center'>
        <a className='nav-link text-center py-3 py-sm-4 py-md-5' href='./#background'>Background</a>
        <a className='nav-link text-center py-3 py-sm-4 py-md-5' href='./#animation'>Animation</a>
        <a className='nav-link text-center py-3 py-sm-4 py-md-5' href='./#illustration'>Illustration</a>
      </nav>
      <div id='icon-bar' className='d-flex m-3'>
        <a href='mailto:gli@live.ca'>
          <img className='icon mx-2' src={mail_icon} alt="mail"></img>
          <span>gli@live.ca</span>
        </a>
        <a href='' target='_blank'>
          <img className='icon mx-2' src={resume_icon} alt="resume"></img>
          <span>resume</span>
        </a>
        <span className='flex-grow-1'></span>
        <a href='https://www.instagram.com/m1dnightingale/' target='_blank'>
          <img className='icon mx-2' src={instagram_icon} alt="instagram"></img>
        </a>
        <a href='https://www.linkedin.com/in/ruoxi-li-604b5a304/' target='_blank'>
          <img className='icon mx-2' src={linkedin_icon} alt="linkedin"></img>
        </a>
      </div>
    </div>
  )
}

export default Banner