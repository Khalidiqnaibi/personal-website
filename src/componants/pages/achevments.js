import React from 'react';
import '../../css/acheve.css';



export default function Acheve(){

  return(
   <div id='background'>
   <div>
        <div id="content-inner">
            <h1 id='t'>
                Achievements
            </h1>
            <div className="container">
        <div className="row">
          <div className="item">
            <a className='tili' rel="noopener noreferrer"  target="_blank" href="https://www.amideast.org/west-bank-gaza/learn-english/english-for-kids-and-teens/english-access-microscholarship-access-program">
              <img className="img1" id='pic11' src="./access_logo_2.png" alt="pic11"/>
            </a>
             <div className='con'>
            <a className='tili' rel="noopener noreferrer"  target="_blank" href="https://www.amideast.org/west-bank-gaza/learn-english/english-for-kids-and-teens/english-access-microscholarship-access-program"><h3>Acsess<br/> schoolarship</h3></a>
            
            <p className='pr'>Khalid completed the access scholarship. <br/>2018-2019</p>
            </div>
          </div>
          <div className="item">
             <img className="img1" src="./awored.png" alt="pic21"/>
            
           <div className='con'>
            <h3>Programing <br/>contest</h3>
            <p className='pr'>Khalid won a programming<br/> contest when he was 15 <br/>in his school.</p>
           </div>
          </div>
          <div className="item">
            <a className='tili' rel="noopener noreferrer"  target="_blank" href="https://m.facebook.com/HusainSchool/?tsid=0.9037256457455793&source=result">
              <img className="img1" src="./school.png" alt="pic31"/>
            </a>
            <div className='con'>
            <a className='tili' rel="noopener noreferrer"  target="_blank" href="https://m.facebook.com/HusainSchool/?tsid=0.9037256457455793&source=result">
              <h3>Education </h3>
            </a>
          
            <p className='pr'><br/>  Khalid graduated from the best schools in his country with amazing grades.</p>
            </div>
          </div>
          <div className="item">
              <img className="img1" src="./proggraming.jpg" alt="pic41"/>
           <div className='con'>
            <h3>Programing<br/> languages</h3>
           
            <p className='pr'>Khalid learned scrach,html,<br/>css,javascript,<br/>python and c++.</p>
            </div>
           </div>
        </div>
      </div>
    </div>
  </div>
  </div>     
  )
}