 import React from "react"
 import'./over.css'
 
export default function Over(props){
  var sytbtndis;
  var abtns;
    if (props.btn==='no'){
     sytbtndis={
       Display:'none',
     
     };
     abtns={
      display: 'none',
      width:"70%",
      margin: 'auto',
      height:'10%',
      justifyContent: 'center',
    };
    
    }else {
      sytbtndis={
        Display:'grid',
        backgroundColor: '#6AD1DF',
        borderRadius:'8px',
        padding:' 8px 16px',
        fontSize: '16px',
        fontWeight: '700',
        cursor: "pointer",
        color: '#324B4E',
        margin: 'auto',
        borderColor: '#F0B694',
        boxShadow: '4px 4px#324B4E',
        maxWidth:"100%",
        maxHeight:"100%",
    };
    abtns={
      display: 'grid',
      width:"60%",
      margin: 'auto',
      height:'10%',
      justifyContent: 'center',
    };
  }

 return(
  <div className ='overlaydiv'>
       <div id={props.id} className='photo' ></div>
       <div id={props.txtid} className='txt'>
       <h1 id={props.titleid} className='t'>{props.title}</h1>
       <p id={props.prid} className='par'>{props.text}</p>
       <a target="_blank" style={abtns} rel="noopener noreferrer" className="abtn" href={props.btnhrf}>
         <button className="overbtn" style={sytbtndis}><h4 className="btntxt">{props.btntxt}</h4></button>
       </a>
       </div>
   </div>
  )
}