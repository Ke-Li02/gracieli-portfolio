import hi_there from './assets/hi_there.webp'

function AboutMe() {
  return (
    <div id='about-me-container' className='d-flex align-items-end border-bottom-thin px-1 px-md-2 mx-2 mx-sm-3 mx-md-4 my-3 my-sm-4'>
      <div className='align-self-center me-2'>
        <h1 id='about-me-title'>ABOUT ME</h1>
        <span>
          I'm Ruoxi/Gracie, an animation student at Sheridan College. 
          I love telling stories and working with fellow creatives. 
          For me, making art is like trying to bottle up the magic of everyday life and turn it into something tangible. 
          Still, nothing beats living in the moment!
        </span>
        <br />
        <br />
        <span>
          Thanks for stopping by! (Contact: gli@live.ca)
        </span>
      </div>
      <img id='hi-there' className='align-self-end' src={hi_there} width='1619' height='1435'/>
    </div>
  )
}

export default AboutMe