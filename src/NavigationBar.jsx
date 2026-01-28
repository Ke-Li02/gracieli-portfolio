import { forwardRef, useEffect, useState } from 'react'

const NavigationBar = forwardRef((_, banner_ref) => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setShow(!entry.isIntersecting)
    }, {
      root: null,
      threshold: 0,
    })

    if (banner_ref != null) observer.observe(banner_ref.current)
  }, [])

  return (
    <div className={`navbar bg-primary ${show ? 'sticky-top' : 'd-none'}`}>
      THIS IS THE NAVBAR
    </div>
  )
})

export default NavigationBar