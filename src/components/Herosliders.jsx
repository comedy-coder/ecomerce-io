import React from 'react'
import PropTypes from 'prop-types'
import Grid from './Grid'

const Herosliders = props => {
    const data = props.data
    
  return (
    <div className="hero-slider">
        <div className="hero-slider__title">
            {props.title}
        </div>   
        <div className="hero-slider__slider">
               

              {
                  data.map((item, index) => (
                      <HeroSliderItem key={index} item={item} />
                      ))
                    }
      
                    
        </div>
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