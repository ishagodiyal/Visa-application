// turkey
import React from 'react'

import './Thailand.css'

import { Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import experts from'./SwiperInfo.json'
import purva from './images/img1.jpg'
import sakshimishra from './images/img2.jpeg'
import bhakti from './images/img3.avif'
import raj from './images/img44.jpeg'
import bhusan from './images/img6.jpeg'
import payal from './images/img5.jpg'





export default function Malaysia() {

  const image={
    1:purva ,
    2:sakshimishra,
    3:bhakti,
    4:raj,
    5:bhusan,
    6:payal
};


  return (
    <div>
      <div className= "Text_georgia">

      <h1 className="georgia-tittle">Georgia Visa</h1>
     

    <div className="timing">
  
      <span className="processing-time">processing time
      <p className='hours'>4 to 5 days</p></span>

      <span className="processing-time">Starting from
      <p className='hours'>₹ 2,700/-</p></span>
      </div>

    
     
    </div>



        <div className="Types-of-visa-georgia">

  <div className="visa-type_title">
  Type of Georgia Visas
  </div>
  <div className="dubai_visa_card">
{/* Card1 */}
          <div className="dubai_card">
          <h4>Georgia Visa (Popular)</h4>
          <div className="dubai_card_section">
          <div className="dubai_card_section1">
            processing time :<br/>
            Stay period :<br/>
            Validity :<br/>
            Entry :<br/>
            Fees :<br/>
          

          </div>
          <div className="dubai_card_section2">
          4-5 days<br/>
          30 days<br/>
          120 days<br/>
          Multiple<br/>
          <h5 className='INR'>INR 2,700/-</h5>
          </div>
          
          </div>
          </div>
 

       
  </div>

  <form className="form3" action="https://api.web3forms.com/submit" method="POST">
 
 <input type="hidden" name="access_key" Contact number="access_key"  value="3e8e57f1-45ac-4340-b962-1f7c0e15bf8e"/>    {/* //webform  */}

  
     
<h3 className="connect_head">Connect With Us</h3>
     <div class="form-floating mb-3">
 <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" required/>
 <label for="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
 <input type="number" class="form-control" id="floatingInput" placeholder="Contact number" name="Number" required/>
 <label for="floatingInput">Contact number</label>
</div>
<div class="form-floating">
 <input type="text" class="form-control" id="floatingPassword" placeholder="name" name="Name"/>
 <label for="floatingPassword">Name</label>
</div>
<div class="mb-3">
 <label for="floatingText" className="form-label1">Subject of contact</label>
 <textarea class="form-control" id="floatingText" rows="3" name="Subject"></textarea>
</div>

<button type="submit" className="formButton">Submit</button>
   
<button type="reset" className="formButton_reset">Reset</button>


</form>



  </div>
  {/* Dubai Visa Price includes: */}
  <div className="srilanka_visa">
    <p className='headoflist'>
 Georgia Visa FAQs
</p>
<div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      
      Do I need a visa for Georgia from India?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">An Electronic Visa or "e Visa" is an electronically issued and stored authority for travel to The Republic of Georgia, which replaces the traditional paper visa process in most cases.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      
      What is a Georgia eVisa?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">A Georgia visa is a legal document which lawfully allows its holder to enter and stay within the country for a certain number of days as mentioned on the visa.After receiving your Visa through email, print it out and carry it along when you travel to Georgia.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What is an eVisa?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">An Electronic Visa or "e Visa" is an electronically issued and stored authority for travel to The Republic of Georgia, which replaces the traditional paper visa process in most cases.</div>
    </div>
  </div>
</div>

</div>


{/* Simple Steps to get a Sri Lanka Visa: */}


  

<div className="srilanka_slider">
  <div className="heading3">Talk to Our Visa Experts</div>
  <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        loop={true}
      >
      
      {experts.map((expert,index)=>(
        <SwiperSlide key={index}>
          <div className="experts">
          <div className="slide-image">
            <img src={image[expert.id]} alt={expert.name} className="image"/>
            <div className="about">
           <h4 id="expert-name"> {expert.name}</h4>
            <p>{expert.title}</p>
           <span> {expert.experience}</span>
           </div>
          </div>
          </div>
        </SwiperSlide>
      )
      )}
      </Swiper> 
</div>
            







</div>





    

    
    
  
  )
}








