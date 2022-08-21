import './css/App.css';
import React from 'react';
import { Route,BrowserRouter as Router,Routes,} from 'react-router-dom';
import About from './componants/pages/about';
import Home from './componants/pages/home';
import Acheve from './componants/pages/achevments';
import Contact from './componants/pages/contact-us';
import Nav from './componants/nav/nav';
import Footer from './componants/footer/footer';



function App(){
   return(
     <Router>
       <Nav/>
       <Routes>   
         <Route path='/Contact_us' element={<Contact/>}/>
         <Route path="/achievements" element={<Acheve/>} />   
         <Route path="/about" element={<About />}/> 
         <Route path="/" element={<Home />}/>
       </Routes>
       <Footer/>
     </Router> 
   )};



export default App;