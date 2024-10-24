import React from 'react'
import './Slider.css'
import { Navigation } from 'swiper/modules'
import { Swiper,SwiperSlide } from 'swiper/react'
import experts from'./SwiperInfo.json'
import purva from './images/img1.jpg'
import sakshimishra from './images/img2.jpeg'
import bhakti from './images/img3.avif'
import raj from './images/img44.jpeg'
import bhusan from './images/img6.jpeg'
import payal from './images/img5.jpg'
export default function Slider() {
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
  )
}
