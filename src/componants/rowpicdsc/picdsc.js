import React from "react";
import './picdsc.css';   

     
     
export default function Picdsc(props){     
     
  return( 
     <div>       
            <div class="item">
            <a class='tili' href={props.herf}>
              <img id={props.id} src={props.src} class='img1' alt="pic"/>
            </a>
          <div class='con'>
            <a class='tili' href={props.herf}><h3>{props.title}</h3></a>

            <p class='pr'>{props.dsc}</p>
            </div>
        
        </div>
     </div>
    )  
}