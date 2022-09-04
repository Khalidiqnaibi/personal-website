import React,{useState} from "react";
import { Link } from "react-router-dom";

export default function Burgr(){
  const [Open,setOpen]=useState(false);
  function ICON(){
    if (!Open){
    return(
      <div className="menu-btn" onClick={()=>setOpen(!Open)}>
        <img src="./list.svg" alt="menu" className="menu-btn__burgeropn"/>
      </div>
    );
  }else{
    return(
      <div className="menu-btn" onClick={()=>setOpen(!Open)}>
        <img src="./x-lg.svg" alt="xmenu" className="menu-btn__burger"/>
      </div>
    )
  }
  }
    return(
        
      <div className='burgrm'>
        <ICON/>
        {Open&&<div className ='mnav'> 
            <div className='upm' id="fstmn"><Link id='homem' to='/'><div claasName='nbtn' ><h5>Home</h5></div></Link></div>  
            <div className='upm' ><Link id='achevmentsm' to='/achievements'><div claasName='nbtn' ><h5>Achievements</h5></div></Link></div> 
            <div className='upm' ><Link id='aboutm' to='/about'><div claasName='nbtn' ><h5>About</h5></div></Link></div>
            <div className='upm' id="lastmn" ><Link id='contactm' to="/Contact_us"><div  claasName='nbtn' ><h5>Contact</h5></div></Link></div>           
        </div> }
      </div>  
    )
}