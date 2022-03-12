import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='footer-left'>
      <span><a className='app__call' href="mailto:siddharth_pampana@srmap.edu.in"><ion-icon name="mail-outline"></ion-icon><p style={{marginLeft:4}}>siddharth_pampana@srmap.edu.in</p></a>
      </span>
      <span><a className='app__call' href='tel:+91 9063242479'><ion-icon name="call-outline"></ion-icon>+91 9063242479 </a></span>
      <span style={{marginTop:8}}>
      <ion-icon name="logo-linkedin"></ion-icon>
      <ion-icon name="logo-github"></ion-icon>
      <ion-icon name="logo-instagram"></ion-icon></span>
      </div>
      <h1 className='head-text'>Built using <span>React</span> with <ion-icon style={{color:'red'}} name="heart-outline"></ion-icon></h1>
    </div>
  )
}

export default Footer