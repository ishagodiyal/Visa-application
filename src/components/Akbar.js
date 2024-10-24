import React from 'react'
import './Akbar.css'
import docx from './images/document.png'
import tick from './images/tick.png'
import thumb from './images/thumb-up.png'
import choose1 from './images/Screenshot 2024-09-11 121947.png'
import choose2 from './images/Screenshot 2024-09-11 121953.png'
import choose3 from './images/Screenshot 2024-09-11 122000.png'
import choose4 from './images/Screenshot 2024-09-11 122006.png'
import choose5 from './images/Screenshot 2024-09-11 122012.png'
import choose6 from './images/Screenshot 2024-09-11 122030.png'

export default function Akbar() {
  return (
    <>
    
<div className="Akbar_portion">
      <h4 className="heading4">Applying with Akbar is this simple</h4>

      <div className="items">
        <div  className="item">
      <img src={docx} className="imgs" height="60px" width="60px"/>
      <div className="description">Submit documents<br/> and pay online</div>
      </div>
      <div  className="item">
      <img src={tick} className="imgs"  height="60px" width="60px"/>
      <div className="description">We verify documents<br/>
      & process your Visa application</div>
      </div>
      <div  className="item">
      <img src={thumb} className="imgs"  height="60px" width="60px"/>
      <div className="description">Receive Visa</div>
      </div>
      </div>
 
</div>

 <div className="secure_portion">
  <div className="heading5">
    Why Choose Us?
  </div>

  <div className="sections">
  <div  className="section">
      <img src={choose1} className="choose"  height="80px" width="130px"/>
      <div className="choose_description">Visa Services for all Countries</div>
      </div>

      <div  className="section">
      <img src={choose2} className="choose" height="80px" width="130px"/>
      <div className="choose_description">40 years of experience<br/>
      in Visa processing</div>
      </div>

      <div  className="section">
      <img src={choose3} className="choose"  height="80px" width="130px"/>
      <div className="choose_description">150+ Branches<br/>
      Worldwide</div>
      </div>

      <div  className="section">
      <img src={choose4} className="choose"  height="80px" width="130px"/>
      <div className="choose_description">End-to-End Visa Assistance</div>
      </div>

      <div  className="section">
      <img src={choose5} className="choose" height="80px" width="130px"/>
      <div className="choose_description">Pick Up & Drop of<br/>
      Documents from your Doorstep</div>
      </div>

      <div  className="section">
      <img src={choose6} className="choose"  height="80px" width="130px"/>
      <div className="choose_description">Safety & Confidentiality</div>
      </div>
      </div>


 </div>

 </>
        
  )
}
