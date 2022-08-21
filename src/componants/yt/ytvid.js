import React from "react";
import './yt.css';



export default function Yt(props){
     
    return(
        <div class='vid' >
          <iframe id={props.id} src={props.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
       

    )


}
