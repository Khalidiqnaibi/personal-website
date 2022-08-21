import React, { useRef } from "react";
import '../../css/contact.css';
import emailjs from 'emailjs-com';


export default function Contact(){
        const form = useRef();
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm("service_4gxoong","template_gdi76df",form.current,"nr6uuzmPy4fW_nM2p")
            .then((result) => {
                console.log(result.text);
                alert('massge sent ty :)');
            }, (error) => {
                console.log(error.text);
                alert(error.text);
            });
            e.target.reset();
            
        };
    return(
     <div id='background'>
            <h2 id='ti'>Give us your thoughts</h2>
            <p className='dscr'>Send us a message and we'll get back to you as soon as we can! </p>
            <div id='form'>
            <div id='formin'>
                <form ref={form} onSubmit={sendEmail} id="email-form"  name="email-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="input w-input" maxLength="256" name="name" placeholder="Enter your name" id="name" required/><br/>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="input w-input"  maxLength="256"  name="email"  placeholder="Enter your email address" id="email" required/><br/>
                    <label htmlFor="Message">Your Message</label>
                    <textarea type='text'placeholder="Enter your message"  maxLength="5000" id="msg"name="msg" className="input w-input" required />
                    <input type="submit" id='subtn' className="w-btn"/>
                </form>
            </div>
            </div>  
        
             <div className="success w-form-done"> 
               <p className='p' id='pk1' >
                   always be ready
               </p>
               <p className='p' id='pk2'>
   
               </p>
            </div> 
     </div>
    );
}


//lol i love this so much .kudasai!