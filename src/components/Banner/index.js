import React from 'react';
import { BannerStyled, BannerContent } from './style';
import arrowDown from '../../assets/images/arrow-down-solid.svg';
import { banners } from '../../utils/objects';
import Slider from "react-slick";

const Banner = ({props}) => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return(
    <Slider {...settings} className='slider-banner'>
      {!!banners && banners.map(banner => (
        <BannerStyled key={banner.id}>
          <BannerContent>
            <h1>{banner.title}</h1>
            <p>{banner.description}</p>
            <a href="#section-2"><img src={arrowDown} className="arrow-down" alt="Arrow Down"/></a>
          </BannerContent>
          <img src={banner.image} alt={banner.title} />
        </BannerStyled>
      ))}
    </Slider>
  )
};

export default Banner;