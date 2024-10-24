
import React, {useEffect} from 'react';
import NavBar from './components/NavBar';
import Destination from './components/destination/Destination';
import Akbar from './components/Akbar';
import Slider from './components/Slider';
import HappyCustomer from './components/HappyCustomer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dubai from './components/destination/Dubai';
import Singapore from './components/destination/Singapore';
import Thailand from './components/destination/Thailand .js';
import Malaysia from './components/destination/Malaysia';
import Srilanka from './components/destination/Srilanka';



function App() {
   useEffect(()=>{
    alert("welcome to go travelers . if you want any other type of information then please fill the form.");
   },[1]);

  return (
   <>
    <Router>
      <NavBar/>
     
      <Routes>
        
        <Route path="/" element={
          <>
              <Destination />
            <Slider/>
          <Akbar/>
          <HappyCustomer/>
          </>
        } />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/turkey" element={<Malaysia />} />
        <Route path="/singapore" element={<Singapore />} />
        <Route path="/srilanka" element={<Srilanka />} />
        <Route path="/thailand" element={<Thailand />} />
       
      </Routes>
      </Router>
     
      
      </>
  );
}

export default App;
