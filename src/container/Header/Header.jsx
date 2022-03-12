import React from 'react'
import './Header.scss'
import {motion} from 'framer-motion'
 import { images } from '../../constants';
import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

  
const Header = () => {
  const[btn,setbtn]=React.useState(false)
  function toggle(){
    setbtn(prevstate=>{
      return true
    })
  }
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <div className='app__header app__flex'>
       
      <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
           
          <div  >
            <p className="p-text">Hey there, I am</p>
            <span className='bold-text' >SID.</span>
            <p className="p-text">Competitive Programmer</p>
            <p className="p-text">/Fullstack Developer</p>
          </div>
        </div>

        <motion.div className="tag-cmp " variants={container} initial="hidden"
        animate="visible">
        <ion-icon name="logo-github"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="mail-sharp"></ion-icon>
        <div className='logo-cancle'></div>
       <div className='resume-container'>
         <h1 onClick={toggle}className='p-text resume'> Resume</h1>
        {btn && <motion.div  whileInView={{ x: [-100, 0]  }}
      transition={{ duration: 0.5 }}className="tag-down">
        <a href='https://drive.google.com/file/d/1HXoGyih_Bu3voirVKAx8NvhlSFyCOgJj/view?usp=sharing' target='blank'><ion-icon   name="cloud-download-sharp"></ion-icon>  </a>    
        </motion.div>}
        </div>
        </motion.div> 
      </div>
    </motion.div>
     
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>
         
    </div>
  )
}

export default Header