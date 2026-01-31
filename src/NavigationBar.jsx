import { useEffect, useState } from 'react'

function NavigationBar({ ref }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShow(!entry.isIntersecting)
    }, {
      root: null,
      threshold: 0,
    })

    if (ref != null) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div id='navbar' className={`d-flex p-1 p-sm-2 ${show ? 'visible' : 'invisible'}`}>
      <a id='navbar-name' className='mx-2 mx-sm-3 mx-md-4' href='/#home'>Ruoxi Li</a>
      <span className='flex-grow-1'></span>
      <a className={`nav-link mx-2 mx-md-3 ${location.hash === '#background' ? 'selected-nav-link' : ''}`} href='/#background'>Background</a>
      <a className={`nav-link mx-2 mx-md-3 ${location.hash === '#animation' ? 'selected-nav-link' : ''}`} href='/#animation'>Animation</a>
      <a className={`nav-link ms-2 ms-md-3 me-2 me-sm-3 me-md-4 ${location.hash === '#illustration' ? 'selected-nav-link' : ''}`} href='/#illustration'>Illustration</a>
    </div>
  )
}

export default NavigationBar