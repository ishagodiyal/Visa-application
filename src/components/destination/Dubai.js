import React from 'react'
import './Dubai.css'
import tickpng from './desti_image/ok-1976099_640.png'
import dubai from './desti_image/3395706.jpg'

import { Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import experts from'./SwiperInfo.json'
import purva from './images/img1.jpg'
import sakshimishra from './images/img2.jpeg'
import bhakti from './images/img3.avif'
import raj from './images/img44.jpeg'
import bhusan from './images/img6.jpeg'
import payal from './images/img5.jpg'





export default function Dubai() {

  const image={
    1:purva ,
    2:sakshimishra,
    3:bhakti,
    4:raj,
    5:bhusan,
    6:payal
};


  return (
    <div className="all_dubai_page">
      <div className= "Text">

      <h1 className="dubai-tittle">Dubai Visa Online</h1>
      <div className="visa-tag">
        <div className="icon">
     <img src={tickpng} height="50px"/>
     </div>
     <span className='innerText'>
     99.2%
     Visas Approved before Time
     </span>
      </div>

    <div className="timing">
  
      <span className="processing-time">processing time
      <p className='hours'>Up to 48 hours</p></span>

      <span className="processing-time">Starting from
      <p className='hours'>₹1,999/-</p></span>
      </div>

      <div className="authorised">
      Authorised Visa Agent
      - Official Partner of UAE Government
      </div>
      
     
    </div>


        <img src={dubai} className="dubai-img"/>

        <div className="Types-of-visa">

  <div className="visa_title">
  Types of Dubai Visas for Indians
  </div>
  <div className="dubai_visa_card">
{/* Card1 */}
          <div className="dubai_card">
          <h4>48 Hours Transit Visa + Insurance (Covid) </h4>
          <div className="dubai_card_section">
          <div className="dubai_card_section1">
            processing time :<br/>
            Stay period :<br/>
            Validity :<br/>
            Entry :<br/>
            Fees :<br/>
          
          </div>
          <div className="dubai_card_section2">
          Upto 5 days<br/>
          2 days<br/>
          30 days<br/>
          Single<br/>
          <h5 className='INR'>INR 1,999/-</h5>
          </div>
          </div>
          </div>
  {/* card2 */}
  <div className="dubai_card">
          <h4>30 Days Tourist Visa + Insurance (Covid) </h4>
          <div className="dubai_card_section">
          <div className="dubai_card_section1">
            processing time :<br/>
            Stay period :<br/>
            Validity :<br/>
            Entry :<br/>
            Fees :<br/>
          
          </div>
          <div className="dubai_card_section2">
          Upto 5 days<br/>
          30 days<br/>
          58 days<br/>
          Single<br/>
          <h5 className='INR'>INR 7,799/-</h5>
          </div>
          </div>
          </div>

   {/* card3 */}
   <div className="dubai_card">
          <h4>30 Days Family Tourist Visa + Insurance (Covid) <span>(Includes 2 Adults + 1 Child)</span> </h4>
          <div className="dubai_card_section">
          <div className="dubai_card_section1">
            processing time :<br/> 
            Stay period :<br/>
            Validity :<br/>
            Entry :<br/>
            Fees :<br/>
          
          </div>
          <div className="dubai_card_section2">
          Upto 5 days<br/>
          30 days<br/>
          58 days<br/>
          Single<br/>
          <h5 className='INR'>INR 19,499/-</h5>
          </div>
          </div>
          </div>

    {/* card4 */}
    <div className="dubai_card">
          <h4>96 Hours Transit Visa + Insurance (Covid) </h4>
          <div className="dubai_card_section">
          <div className="dubai_card_section1">
            processing time :<br/>
            Stay period :<br/>
            Validity :<br/>
            Entry :<br/>
            Fees :<br/>
          
          </div>
          <div className="dubai_card_section2">
          Upto 48 hours<br/>
          14 days<br/>
          58 days<br/>
          Single<br/>
          <h5 className='INR'>INR 8,799/-</h5>
          </div>
          </div>
          </div>
       

  </div>
  </div>
  
  <form action="https://api.web3forms.com/submit" method="POST">
 
  <input type="hidden" name="access_key" Contact number="access_key"  value="3e8e57f1-45ac-4340-b962-1f7c0e15bf8e"/>    {/* //webform  */}

   
      
<h3 className="connect_head">Connect With Us</h3>
      <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" name="email" required/>
  <label htmlFor="floatingInput">Email address</label>
</div>
<div class="form-floating mb-3">
  <input type="number" class="form-control" id="floatingInput" placeholder="Contact number" name="Number" required/>
  <label htmlFor="floatingInput">Contact number</label>
</div>
<div class="form-floating">
  <input type="text" class="form-control" id="floatingPassword" placeholder="name" name="Name"/>
  <label htmlFor="floatingPassword">Name</label>
</div>
<div class="mb-3">
  <label htmlFor="floatingText" class="form-label">Subject of contact</label>
  <textarea class="form-control" id="floatingText" rows="3" name="Subject"></textarea>
</div>

<button type="submit" className="formButton">Submit</button>
    
<button type="reset" className="formButton_reset">Reset</button>
 

</form>




 







  {/* Dubai Visa Price includes: */}
  <div className="Dubai_visa">
    <p className='headoflist'>
Dubai Visa Price includes:
</p>
<ul className='listul'>
  <li>Consulate fees</li>
  <li>Medical insurance (Covers Coronavirus and everything else)</li>
  <li>Service charges</li>
  <li>All taxes</li>
</ul>

<p className='list_para'>
Depending on the purpose of your planned visit and duration of trip, you can apply for 96 hours, 14 days, 30 days (short term) or 90 days (long term) Dubai Visa (Single & Multiple entry). We are one of the leading Dubai Visa Experts offering Dubai visa for Indians at the lowest prices and with minimum documentation. Apply for your Dubai Tourist Visa online from cities like Mumbai, Delhi, Pune, Bangalore, Kochi, Hyderabad, Chennai, Amritsar & many more.
</p>

</div>


{/* Documents required for Dubai Visa for Indians */}

<div className="required_document">
  <div className="headoflist">
  Documents required for Dubai Visa for Indians
  </div>
  <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      Must have Documents for Dubai Tourist Visa:
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
          <li>Scanned colour copy of first and last page of your valid Passport</li>
          <li>Scanned colour copy of your passport size photograph with white background</li>
          <li>Confirmed return air ticket (required for Ok to Board processing  </li>
        </ul>
      </div>
    </div>
  </div>
  </div>





<div className="slider">
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






</div>





    

    
    
  
  )
}
