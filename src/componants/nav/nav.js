import React from 'react'
import { Link } from 'react-router-dom'
import  './nav.css'


export default function Nav(){
  return (
  <nav className='header'>
    <Link to='/' ><h1 id='title' >Khalid Iqnaibi</h1></Link>
    <div className ='nav'> 
        <div className='up'><Link id='home' to='/'><div claas='nbtn' ><h5>Home</h5></div></Link></div>  
        <div className='up' ><Link id='achevments' to='/achievements'><div claas='nbtn' ><h5>Achievements</h5></div></Link></div> 
        <div className='up' ><Link id='about' to='/about'><div claas='nbtn' ><h5>About</h5></div></Link></div>
        <div className='up' ><Link id='contact' to="/Contact_us"><div  claas='nbtn' ><h5>Contact</h5></div></Link></div>           
    </div> 
  </nav>  
  )
}
