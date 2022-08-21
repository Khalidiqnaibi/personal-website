import React from "react"
import'./hero.css'
import { Link } from 'react-router-dom';



export default function Hero(){
    return(
        <div id='hero-section' className='op'>
          <Link to='/'  ><h1 id='ontop'>Khalid Iqnaibi</h1></Link>  
          <p id='herojok'>
            " potato is so good "
          </p>
        </div>
    )
}