import {Link} from 'react-router-dom'
import './footer.css'
import React from 'react'

export default function Footer(){
    return(
        <div id='footr'>
            <div id='upf'>
              <div id='liftcon'>
                  <Link to='/'><h1 id='title' >Khalid Iqnaibi</h1></Link>
              </div>
              <div id='rightcon'>
                <div id='social'>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='https://twitter.com/KQnabi'><img className='social' src='./twitter.svg' alt='twitter'/></a>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='https://www.instagram.com/khalid_qnabi/'><img className='social' src='./instagram.svg' alt='instagram'/></a>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='https://www.snapchat.com/add/khalid_q2004?share_id=pt3s-2LwWIo&locale=en-US'><img className='social' src='./snapchat.svg' alt='snapchat'/></a>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='https://www.youtube.com/channel/UCQ1VG5R9Iu9Z14Ppn3g0joQ'><img className='social' src='./youtube.svg' alt='youtube'/></a>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='https://www.facebook.com/KHALIDQNABI'><img className='social' src='./facebook.svg' alt='facbook'/></a>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='https://www.tiktok.com/@khalidqnabi'><img className='social' src='./tiktok.svg' alt='tiktok'/></a>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='mailto:khalidqnabi@gmail.com'><img className='social' src='./envelope-fill.svg' alt='gmail'/></a>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='https://www.paypal.com/paypalme/khalidqnabi'><img className='social' src='./paypal.svg' alt='paypal'/></a>
                    <a className='icons'  target="_blank" rel="noopener noreferrer"  href='https://github.com/Khalidiqnaibi'><img className='social' src='./github.svg' alt='github'/></a>
                </div>
              </div>
            </div>
            <div id='downf'>
                <h6>all rights are reserved to khalid qnabi © 2022 </h6>
            </div>

        </div>
    )
}