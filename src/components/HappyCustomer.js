import React from 'react'
import './HappyCustomer.css'
import poonam from './images/poonam.jpeg'
import mayur from './images/mayur.jpg'
import sawant from './images/sawant.png'

export default function HappyCustomer() {
  return (
    <div>
     <div className="heading6"> Over 5 million happy travellers & counting</div>

     <div className='traveller_cards'>
     <img src={sawant} className="sawant" />
      <div className='cards'>
        <h6>Nupur Sawant</h6>
        Got my Thailand visa within 5 days. It was much <br/>
        before than I expected. Thanks a lot for your<br/>
         prompt service. We appreciate your efforts and <br/>
         the personal attention. Wish you good luck.
      </div>
      <img src={mayur} className="mayur" />
      <div className='cards'>
        <h6>Mayur Waman</h6>
        Thank you for the smooth and hassle free visa <br/>
        application for Singapore. Very happy with the <br/>
        service, I will definitely recommend your service <br/>
        to my friends and colleagues.
      </div>
      <img src={poonam} className="poonam" />
      <div className='cards'>
        <h6>Dr Poonam Bharti</h6>
        I have processed visas thrice through Akbar<br/>
         travels. Acknowledge the efficient and prompt <br/> 
         service by the customer support team. Got the<br/> 
          Dubai visas way before the expected time.
      </div>

     </div>


     {/* visit us portion */}

     <div className="visit_us">
     <div className="heading7"> Visit Us </div>
     <div className="visit_card">
       <div className="visit_location">
       <h3>Mumbai</h3>
       <span>goTravelers.com,
1st floor, 62, Janjikar Street,
Near Crawford Market,
Mumbai - 400 003 Maharashtra.</span>

       </div>
       <div className="visit_location">
        <h3>Delhi</h3>
        <span>goTravelers.com,
Plot No-17, 1st Floor, Pusa Road,
Opposite City Hospital,
Metro Pillar No 93-94,
Karol Bagh,<br/>
New Delhi – 110005.</span>

       </div>
       <div className="visit_location">
        <h3>Chennai</h3>
        <span>goTravelers.com,
142, 1st Floor, Continental Chambers,
Nungambakkam High Road,
Nungambakkam,
Chennai - 600 034. Tamil Nadu</span>

       </div>
     </div>

     </div>


      </div>

  )
}
