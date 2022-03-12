import React from 'react'
import './App.scss'
import{About,Competitive, Footer,Header,Skills,Works, Internshipwork} from './container'
import { Navbar } from './components'
 
 const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      <Competitive/>
      <Works/>
      <Internshipwork/>
      <Footer/>
    </div>
  )
}

export default App