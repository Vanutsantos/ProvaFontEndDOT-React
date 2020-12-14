import React from 'react';
import { SliderCardStyled } from './style';
import { cards } from '../../utils/objects';
import arrowLeft from '../../assets/images/arrow-left-solid.svg';
import arrowRight from '../../assets/images/arrow-right-solid.svg';
import Card from './Card';
import Slider from "react-slick";

const SliderCard = () => {

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <button>
        <img onClick={onClick} src={arrowRight} alt="Arrow Right" />
      </button>
    );
  }
  
  function PrevArrow(props) {
    const {  onClick } = props;
    return (
      <button>
        <img onClick={onClick} src={arrowLeft} alt="Arrow Left"/> 
      </button>
    );
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };

  return(
    <SliderCardStyled id="section-2">
      <div className="container">
        <Slider {...settings} className='slider-banner'>
          {!!cards && cards.map(card => (
            <Card
              key={card.id}
              title={card.title}
              image={card.image}
              description={card.description}
            />
          ))}
        </Slider>
      </div>
    </SliderCardStyled>
  )
};

export default SliderCard;