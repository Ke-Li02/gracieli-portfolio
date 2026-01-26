import banner_pic from '/homepage-pic.png'

function App() {
  return (
    <div id='main-content'>
      <div id='banner'>
        <img src={banner_pic} className='w-100'></img>
        <div id='icon-bar' className='d-flex align-items-center m-3'>
          <img className='mx-2' width='25' height='25' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABTklEQVR4nO2SPUvDYBDH68uigpuDi+AuDg5+AEFQ8AuIi5Oro6vg4iq4uDp2ddCtoOQuUIfO1TwXI9JFrLkLgqicPNG0hbQ1aQUdcvCH5+FeftxLqVTYvzH0ZBWJfSTR4cR3tlYKAIaPhy8usYDkIAVQ1VHX8A6QhAMXN/Jka6jqSM9RXfvRLBCfDgAoX9Z5pvcODJ87XriR/O07405uXF9WWqP2ZQuIq2lAO+HsynuZi4MDnUCSfSB+TY+D34D4qNZoTNlY12/OI/FF4u8HUDASoeG9surY94UtohHomLXj3MqC9VUqOo5GdpFEOmv0BbSvgavgR0vJETgkm1b2HXfoPS8Dca1bbibAVzf8ASQnbv1xunUIDzoJJIdo+L1XXmYAtrsJkMJtKyC+/yk+NwBzqgBobkCWxWFG2YPo0kG0/hsQIA6AorUUoLA/s0+u8SRGmtXZ5QAAAABJRU5ErkJggg==" alt="mail"></img>
          <span>gli@live.ca</span>
          <img className='mx-2' width='25' height='25' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABF0lEQVR4nO3VPUrEUBAH8IjewcJewVKtLe28hNh7AcEF0dpKcL2BhVfYRmeynRZ2ZibrF6zYZGaDdrOMkayxW/Nelz8M5BX5zRsYkiQJEGTtAcszsPZvqFgLYTZwZLVZyReSHiRxcK0LMtmPhqMXyecwK1bj4PwzBWs/Go7VFK/xcFYDkqMOtw63Dq+T0mRnHhxZe8k8QdZLYLn3Ty2yvgfFr8wWkWWMJId+hqdyBVjuguCeW5JtfznNZb2eKNNlJHlpjX/fmOUMSN7MbKHRmIu91rijyJJXW6HnfoZ8sgGsx0D60Ar3DB/Lrebq6Uf1LGP/Yfh2/Rv3IOnprIGMgPUCsmJ3MLClVvCvBtdIepKOys0g4J9MAVrUWWGFVMSJAAAAAElFTkSuQmCC" alt="pencil"></img>
          <span>resume</span>
          <span className='flex-grow-1'></span>
          <img className='mx-2' width='25' height='25' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESUlEQVR4nO1ZS28URxDuQ0KIAAdyhGsSgjjwzI2HuAVFIvgXIITDH4AkcIZwRUE5BsEf4CEhIRETFvBu92zwgYOVNcZb7V2QEIIYT9UMOcFE1dNjL5bH89jZnY20nzTSaqdfNV2Pr6qEGGKI8lEFd6sC/FkB3lVADQnkKU1BEY9ZC6ihNI5LwJ/qTferwgWoz/p7JeCfRR069QN412n5e7oWYHIy+FgC/iYB34cL0z8K6HcF7hG+nccvXqwr5EsJIXitKrhbHcDvFdBls5e5Kd4bL1UqwUe5Fp5oLWySgPfsYr7UdM6ZeT0i+gRn5vWIBDqvAN9Gt1PRbzbmuYlQlQCfs2qJkuCAt0NpnLPq9mBqKliTejKrk7kJje1qy98sSka15W+WGp/ZM/2axbDfszrVtLdLDAjknLeb1UwCvuPfyROsSrFNiAGDAvolVDEcT44T1jv107AjOHPud2yToRp5h5e/n2zOf6aA5s0ZZ90vYxcywS4U5LIoAdLaQWSfK44BuhJ6UvfH2IX4yngQ+3IxqIJoHLXv/1hlIXrCg7qhBxx/lHaPS003laZpph6WykwroBv8jsesNFdp7zALw0JI7X27qvprmo49hNKEPKjaeLUhqwCyHXwqNZ6VmhaSqQe9URrPVHSwNus+1carDXYdXE0Qs1FOP/+oQy3uyCaORTSGn5rGr/k/VoklofCvPHFKJZ0zjyBWiHZ03aqJ+5LmOE3cH6lxnqCrihbEqpO5CQlYycKFQlui+3bPehY1U4ULovGs1flGZkIXEVN7M+z6RRmC2EOEhp1CneIgAQ9GDmAixpv1VBB2o5FhZzj3qvFLgnes/4KYmECBnMMTGc4csxb+YNPda30XJNJtdrGiS7BrTgxyvVMtIh5bmXq5XnQJXsPuTf9rQZhp29TBTbn3ULXijb2JY6JLOIAnSzN2teR+4+l0SpiCX1nud4IphmGxFNQAD4iccDQdigJiJSU76BlFYXtJG5VXYAcziRlfrwVhosdU3M67n0UY2V74XGp6OBCkcTmN56/L3EmkU6enA0PjI/BB+Kt2JEzjoSfCbRxnwoCH28x/1rCjm+hVYoV5U12jZqblEDqApFSXWwe3Z4JPepLqygKKD+x52I0qoOthv8MwADK/ga7zuzy5S8biQ7nloDToKAfFpw983WUW6NJAabxqb+TUwJZMk5C6ZPohXaDzYsCggC6kzkq5Z2faXVzCT1O+7xPqs/5eBfgvtxWq2tuZahL37Kzkz2Tb3yJKhmz7WxbrwoAXU0/kxuNi4AJ8Xmv634iSUNXeTqWxFQXazE1R9vUdwrzlJgsbm+ivYV9gdYrShdzxh6Xnnh3rpfVm89yfqGk8ylldEWnu4l5TL9eb+rDGUdMDsd7J7A14MXd7uhP1Fm1Xmm4lUo/CHxzvicNh3815g6moL9GPog5OEuhvdq0OeKfl04UvChdgiCFEZvwHTBm1QXmKDEcAAAAASUVORK5CYII=" alt="instagram"></img>
          <img className='mx-2' width='25' height='25' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADAElEQVR4nO2Yy2tTQRTGR8QKvnBREfGBD1yJiG8Q0Z2IoGsXbkREUf8EQXQhokIp6MKNC0WRbtQK4kYKbXNOWoKKRi1p75mkIrW2Ns05SX2gvTLJRKTetLdtbG5hfjAEMufM/b4776uUwzEzYE9uI2huBJJ3qEVKhV+DlivQW1ipZgOoc8eR+Ctq8YMKaMmBlzusokyMeB8Q/wLiUdB8Fym3u0Vnl8ZTg0vimcJ2ILlt6lDzN/Bks4oqqPmZfeuXKsWA5mu2d5pUVEGSbFGkJ8srxbR5I2us2QEVVZDkixEZTxVWVYoxdUUjJIMqqiDJw5JIvl4xRstV2yOPVVSJU36LWbGKE5r4XnmyP0358yGd32b+s3U/wRvepaIM6PzB8hALLMQj6MkxNRtIdHE9Ep9Hkhhq+Ww3xDdI3NCZGV5fa32OWQeWhlLw3Pj3qNJWjdxEwp+HOn8IiG+g5k7Q/MGcHJBkCEjeIvF91HK0Jdm/KLyRkELKZTq5vu/PQeKTqDkdzjx/As2nm3x/bmgjU4mbbC4QP/9LaBcQXwDi/Yl0fkUy6deZZb8jI5vAk3NjevvJq76+hZExYks3Uu7IRDkGE4ea+0tbgIDZ21QtjYDmH3ao3Gl/P7BYTYL2zPAGIPFsfuOkBFbdCPGpWFrOqikS0/mtxWsE8WgsndsTWmDYuLC51QC1XLSr36PQAqNoJNHF9UBcMJdA1Nm1oQT+LyNGAGi5ZfYNM29Acy+Q3OzsHlkdJh80Pyj2SppP1MxInPIHUAsHH0plCD3eO7EGPlNeNGpiJJ7OriubMHeajp7CDrMvmF/U0lzaY2SwNcXLxmvHxpvT+IuaGDHDqWyiQtvNtmcuj9eOGYKlZ3KmRkbMWUp881UmqD7mFXbaN/1yvHYSH/0F9oRQqIkRc7s0ceYYElSfTPp1dux/n4qOmTMSIg6n25YzopyRQNAZsTgjyhkJBJ0RizOinJFA0BmxOCMqokYwZKlWbjV1FDFfycMmg5bWauWOBarYlsPhUH/4DSvqBvMUlQVwAAAAAElFTkSuQmCC" alt="linkedin"></img>
        </div>
        <span id='name'>Ruoxi Li</span>
        <nav></nav>
      </div>

      <div className='d-flex p-4'>
        <div>
          <h1 id='about-me'>About me</h1>
          <span>
            Ruoxi Li is a diligent animation student at Sheridan College.
            She is passionate about telling stories and working with fellow creatives.
          </span>
        </div>
        <img src="" alt="" />
      </div>
    </div>
  )
}

export default App
