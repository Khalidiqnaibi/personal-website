import './css/App.css';
import React from 'react';
import { Route,BrowserRouter as Router,Routes,} from 'react-router-dom';
import About from './componants/pages/about';
import Home from './componants/pages/home';
import Acheve from './componants/pages/achevments';
import Contact from './componants/pages/contact-us';
import Nav from './componants/nav/nav';
import Footer from './componants/footer/footer';
//"proxy":"http://localhost:7000",

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAT6HVKeZG5UCqoLylO56Xv6YKgUEPB2Y4",
  authDomain: "personal-website-b86de.firebaseapp.com",
  projectId: "personal-website-b86de",
  storageBucket: "personal-website-b86de.appspot.com",
  messagingSenderId: "12000173177",
  appId: "1:12000173177:web:f2d17ef9acf350f7e148a8",
  measurementId: "G-55WGS2RYJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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