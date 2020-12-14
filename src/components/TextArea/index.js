import React from 'react';
import image from '../../assets/images/banner.jpg';
import { TextAreaStyled, TextAreaBox, ImageBox, TextBox } from './style';

const TextArea = () => {

  return(
    <TextAreaStyled>
      <div className="container">
        <TextAreaBox>
          <ImageBox>
            <img src={image} alt='Imagem default' />

          </ImageBox>
          <TextBox>
            <p className="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <p className="bold-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <p className="italic-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
            <p className="normal-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
          </TextBox>
        </TextAreaBox>
      </div>
    </TextAreaStyled>
    
  )
};

export default TextArea;