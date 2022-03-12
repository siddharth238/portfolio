import React from 'react'
import './Internshipwork.scss'
import {images} from '../../constants'
import {motion} from 'framer-motion'
const about=[{description:'Developed a fully functioning Memory match Game with sound effects and possible child friendly animations.', title:'Social Match', imgUrl:images.about01},
{description:'Level Up is game made using UNITY and C# the game is specially designed for gamified learning source and mainly for children. ', title:'Level Up', imgUrl:images.node},
{description:'Developed a Women community website with wix , Javascript and Figma. The Website mainly focussed on builing Women leaders accross the globe. Hence, ensured top notch Search engine Optimisation SEO.', title:'Women Community web', imgUrl:images.javascript},
 ]
const Internshipwork = () => {
  return (
    <div className='app__iworks app__flex'>
    <h1 className='head-text'>
      My Internship 
      <span> PROJECTS <p style={{fontSize:20}}>Confidential Projects can't be displayed in public domains</p></span>
    </h1>
    <div className='app__iprojects'>
   
      {about.map((about,index)=>(
             
               <motion.div className='app__iworks-component'
          whileInView={{ opacity:[0.3,1]}}
          whileHover={{ scale: 1.3}}
          transition={{ duration: 0.4, type: 'tween' }}
          
          key={about.title + index}
        >
            <div className="iproject-comps "  >
         <h1 className='p-text' style={{marginTop:10}}> {about.title}</h1>
         <p1 className='p-text' style={{marginTop:10}}>{about.description}</p1>
        <div className='itag-icons' style={{marginTop:10}}>
      {/* <ion-icon name="logo-javascript"></ion-icon>
      <ion-icon name="logo-react"></ion-icon>
      <ion-icon name="mail-sharp"></ion-icon> */}
      
      </div>
      <div className='ibelow-icons'>

 
{/* <ion-icon name="eye-outline"></ion-icon> */}

</div>
             </div>
             </motion.div> 
      ))}
    
    
    </div>
  </div>
  )
}

export default Internshipwork