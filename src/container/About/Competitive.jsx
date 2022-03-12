import React, {useState, useEffect} from 'react'
import {images} from '../../constants'
import './Competitive.scss'
import {motion} from 'framer-motion'
  const about=[{description:'', title:'', imgUrl:images.hackerrank, href:"https://www.hackerrank.com/siddharthroy1"},
 {description:'', title:'', imgUrl:images.leetcode, href:"https://leetcode.com/siddharth_pampana/"},
  ]

const Competitive = () => {
  
  
  return (
    <div className='app__Competitive app__flex'>
      <h1 className='head-text'>
        My Competitive Programming 
        <span> Profiles</span>
      </h1>
      <div className='app__Competitiveprofiles'>
     
        {about.map((about,index)=>(
               
                 <motion.div className='app__Competitive-component'
            whileInView={{ opacity: 1,x: [-100,0]}}
             
            transition={{ duration: 0.5, type: 'tween' }}
            
            key={about.title + index}
          >
               <a href={about.href} target='_blank' ><img src={ (about.imgUrl)}  alt='about'/></a>
               <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
               <p className='p-text' style={{marginTop:7}}>{about.description}</p>
               </motion.div>
        ))}
      
      
      </div>
    </div>
  )
}

export default Competitive