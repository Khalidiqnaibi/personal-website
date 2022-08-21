import React from 'react'
import './btn.css'



export default function Btn(props) {
    return(
        <div>
         <a target="_blank" rel="noopener noreferrer"  href={props.link}>
          <button className={props.class}  id={props.id}>
            <h3 className={props.id}>{props.text}</h3>
          </button>
         </a>
        </div>
    )
}