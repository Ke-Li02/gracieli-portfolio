function Footer() {
  const color = 'rgba(4, 14, 26, 0.25)';

  return (
      <div id='footer' className='d-flex flex-column align-items-center my-5'>
        <div role='button' id='back-to-top' onClick={() => window.scrollTo(0, 0)}>
          <svg width="19.2" height="19.2" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3C12.2652 3 12.5196 3.10536 12.7071 3.29289L19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071C19.3166 12.0976 18.6834 12.0976 18.2929 11.7071L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L5.70711 11.7071C5.31658 12.0976 4.68342 12.0976 4.29289 11.7071C3.90237 11.3166 3.90237 10.6834 4.29289 10.2929L11.2929 3.29289C11.4804 3.10536 11.7348 3 12 3Z" fill="rgba(4, 14, 26, 0.25)"/>
          </svg>
          <span className='mx-1 my-3'>
            Back to top
          </span>
        </div>
        <div className='d-flex justify-content-center my-3'>
          <a className='footer-icon mx-1 mx-sm-2' href='mailto:gli@live.ca'>
            <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path stroke={color} strokeWidth="12" d="M22 46a8 8 0 0 1 8-8h132a8 8 0 0 1 8 8v100a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8V46Z"/>
              <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="m44 60 52 44 52-44"/>
            </svg>
          </a>
          <a className='footer-icon mx-1 mx-sm-2' href='/cv.pdf' target='_blank'>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V9M13 3L19 9M13 3V8C13 8.55228 13.4477 9 14 9H19M9 13H15M9 17H15" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a className='footer-icon mx-1 mx-sm-2' href='https://www.instagram.com/m1dnightingale/' target='_blank'>
            <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
              <path stroke={color} strokeWidth="12" d="M96 162c-14.152 0-24.336-.007-32.276-.777-7.849-.761-12.87-2.223-16.877-4.741a36 36 0 0 1-11.33-11.329c-2.517-4.007-3.98-9.028-4.74-16.877C30.007 120.336 30 110.152 30 96c0-14.152.007-24.336.777-32.276.76-7.849 2.223-12.87 4.74-16.877a36 36 0 0 1 11.33-11.33c4.007-2.517 9.028-3.98 16.877-4.74C71.663 30.007 81.847 30 96 30c14.152 0 24.336.007 32.276.777 7.849.76 12.87 2.223 16.877 4.74a36 36 0 0 1 11.329 11.33c2.518 4.007 3.98 9.028 4.741 16.877.77 7.94.777 18.124.777 32.276 0 14.152-.007 24.336-.777 32.276-.761 7.849-2.223 12.87-4.741 16.877a36 36 0 0 1-11.329 11.329c-4.007 2.518-9.028 3.98-16.877 4.741-7.94.77-18.124.777-32.276.777Z"/>
              <circle cx="96" cy="96" r="30" stroke={color} strokeWidth="12"/>
              <circle cx="135" cy="57" r="9" fill={color}/>
            </svg>
          </a>
          <a className='footer-icon mx-1 mx-sm-2' href='https://www.linkedin.com/in/ruoxi-li-604b5a304/' target='_blank'>
            <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
              <rect width="132" height="132" x="30" y="30" stroke={color} strokeWidth="12" rx="16"/>
              <path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="12" d="M66 86v44"/>
              <circle cx="66" cy="64" r="8" fill={color}/>
              <path stroke={color} strokeLinecap="round" strokeWidth="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26"/>
            </svg>
          </a>
        </div>
      </div>
  )
}

export default Footer