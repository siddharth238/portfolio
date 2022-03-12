import React,{useState, useEffect}from 'react'
import './Works.scss'
import {images} from '../../constants'
import {motion} from 'framer-motion'
const about=[{description:'Designed and Developed a fully functioning Messenger Clone using React JS, Firestore from Firebase. The web application receives realtime data as an user with the url types in a message and displays it all accross.', title:'Messenger clone', imgUrl:images.about01},
{description:'Implemented a Recursive and backtracking algorithm that solves Sudoku Puzzles. Developed a React App and integrated the algorithm for more user interaction.', title:'Sudoku Solver', imgUrl:images.node},
{description:'Designed and Developed a Meme Generator using React JS that fecthes the meme data from an API and processes in the application. The web application generates a randon meme image and lets user to input meme text on it.', title:'Meme Generator', imgUrl:images.javascript},
{description:'Developed a web application COVID-19 Tracker using ReactJS and real-time API. In this web application, the interface allows user to input the location and displays the Covid stats of that particular location.', title:'Covid Tracker', imgUrl:images.cpp},
{description:'My recent project Google search Engine using NEXT JS server side rendering,  tailwind css and Firebase. It uses GOOGLE API to server side render the results into the application.', title:'Google Search Engine clone', imgUrl:images.about01}]



const Works = () => {
  return (
    
  <div className='app__works app__flex'>
      <h1 className='head-text'>
        My
        <span> PROJECTS <p style={{color:"red" , fontSize:30} }>Projects section is under update</p></span>
      </h1>
      <div className='app__projects'>
     
        {about.map((about,index)=>(
               
                 <motion.div className='app__works-component'
            whileInView={{ opacity:[0.3,1]}}
            whileHover={{ scale: 1.2}}
            transition={{ duration: 0.4, type: 'tween' }}
            
            key={about.title + index}
          >
              <div className="project-comps "  >
           <h1 className='p-text' style={{marginTop:10}}> {about.title}</h1>
           <p1 className='p-text' style={{marginTop:10}}>{about.description}</p1>
          <motion.div  whileInView={{ x:[0,1]}}  className='tag-icons' style={{marginTop:10}}>
          <ion-icon className="eye" name="eye-outline"></ion-icon>
        <ion-icon name="logo-javascript"></ion-icon>
        <ion-icon name="logo-react"></ion-icon>
        {/* <ion-icon name="mail-sharp"></ion-icon> */}
        
        </motion.div>
        <div className='below-icons'>

{/* <ion-icon name="logo-github"></ion-icon> */}
{/* <ion-icon name="eye-outline"></ion-icon> */}
 
</div>
               </div>
               </motion.div> 
        ))}
      
      
      </div>
    </div>
   
  )
}

export default Works