import React, {useState, useEffect} from 'react'
import {images} from '../../constants'
import './About.scss'
import {motion} from 'framer-motion' 

  const about=[{description:'', title:'', imgUrl:images.react},
  {description:'', title:'', imgUrl:images.next},
 {description:'', title:'', imgUrl:images.node},
 {description:'', title:'', imgUrl:images.javascript},
 {description:'', title:'', imgUrl:images.cpp},
 ]
 const Skills=[{ title:'C/C++'  },
 {  title:'Competitive Programming',  },
 {  title:'Advanced DSA',  },
 {  title:'React JS' },
 {  title:'Node JS' },{  title:'Next JS' },{  title:'Tailwind Css' },
 {  title:'Java Script' },
 {  title:'HTML' },
 {  title:'CSS' },
 {  title:'SCSS' },
 {  title:'Figma' },
 {  title:'Material UI' },
 {  title:'Framer Motion' },
 {  title:'Redux' },
 {  title:'Photoshop' }]
const About = () => {
  
  return (
    <div className='app__about app__flex'>
      <h1 className='head-text'>
        I ALWAYS 
        <span> THINK BIG</span>
      </h1>
      <div className='app__profiles'>
     
        {about.map((about,index)=>(
               
                 <motion.div className='app__about-component'
            whileInView={{ opacity: 1,scale: [0.5,1]}}
             
            transition={{ duration: 0.5, type: 'tween' }}
            
            key={about.title + index}
          >
               <img src={ (about.imgUrl)} alt='about'/>
               <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
               <p className='p-text' style={{marginTop:7}}>{about.description}</p>
               </motion.div>
        ))}
      
      
      </div>
      <div className='app__about-skills'>
         <h1 className='head-text'>ABOUT <span>ME</span></h1>
         <p   style={{marginTop:15, marginBottom:15}}>Competive Programmer with 2 years of Problem Solving experience using C/C++. 
        ReactJs and Node Js developer with passion in design and creative components. Also intersted in Game-Developement using C#, UI/UX,. Experienced Team lead and Executive Lead with a demonstrated history of working in Entrepreneurship-Cell, SRM.  
    Pursuing B.Tech Degree in Computer Science and Engineering at SRM University, India.</p> 

            <div className='app__about-skillset'>
                    {Skills.map((about,index)=>(
                        
                         <motion.div className='skill'
                              whileInView={{ opacity:[0.3,1]}}
                             
                              transition={{ duration: 0.4, type: 'tween' }}key={about.title + index} >
                      <div className="skill-comps "  >
                          <h1 className='p-text'  > {about.title}</h1>
                     
                      </div>
                            </motion.div> 
                ))}
              </div>

      </div>
    </div>
  )
}

export default About