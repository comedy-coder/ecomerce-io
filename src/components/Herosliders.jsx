import React from 'react'
import PropTypes from 'prop-types';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

const Herosliders = props => {
    const data = props.data
    
  return (
    <div className="swiper-contaier">
        <div className="hero-slider__title">
            {props.title}
        </div>   
        
        <Swiper  
             modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={10}
             slidesPerView={6}
             navigation
            loop = {true}  
             scrollbar={{ draggable: true }}
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
      
      > 
              
       {
           data.map((item, index) => (
                      <SwiperSlide key={index}>
                        
                      <HeroSliderItem key={index} item={item} />

                    </SwiperSlide>
                      )
                      )
         }
                    
        </Swiper>
               

      
                    
     </div>
  )
}

Herosliders.propTypes = {
    data : PropTypes.array.isRequired,
    control : PropTypes.bool,
    auto : PropTypes.bool,
    timeOut: PropTypes.number,
    title : PropTypes.string
}
const HeroSliderItem = props =>{ 
    console.log(props.item)
    return (
        <section className="hero-slider__item">
        <div className="hero-slider__item__img">
            <img src={props.item.image} alt="" className="" />
        </div>
            

        <div className="hero-slider__item__info">
            <div className="hero-slider__item__info__title">
                <span>{props.item.title}</span>
            </div>
            <div className="hero-slider__item__info__chapter">
                <span className={props.item.chap}></span>
            </div>
            <div className="hero-slider__item__info__time">
                <span className={props.item.time}></span>
            </div>
        </div>
          
    </section>
)}
export default Herosliders