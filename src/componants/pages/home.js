import React from 'react';
import '../../css/home.css';
import Hero from '../herosiction/hero';
import Over from '../overlay/overlay';
import Btn from '../btn/btn';

export default function Home(){
 
    return(
     
      <div id="content-home">
            <Hero/>
            <Over  title='cyprus international university' titleid='newst' btn='yes' btntxt='Details' btnhrf='https://www.ciu.edu.tr/tr' txtid='newstxt' id='programing' text1='Khalid was accepted to'text2= 'study at ciu in Aug 2022' />
            <div id='picitook'>
            <div className='dsctxt'>
              <h1 id='disc'>The last picture I took</h1>
              <p id='dp'>Shot with : 2000D Canon DSLR</p>
            </div>

            </div>
            <Over  title='Support us' id='coffe' btn='yes' btnhrf='https://www.paypal.com/paypalme/khalidqnabi' btntxt='support us' text1='Help me grow 'text2=' by donating' />
            <div></div>
            <div>
              <Btn text='potato' className='btn' id='potato' link='https://www.google.com/search?q=potato&client=opera&hs=iBo&sxsrf=ALiCzsY-2YfRnMAkNf-ap75ZSgYjntQqhg:1660132094743&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjA96X-mbz5AhUJ8hoKHXkaDLQQ_AUoAXoECAIQAw&biw=1880&bih=970&dpr=1'/>
            </div>
      </div>   
  );
};