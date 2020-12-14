import styled from 'styled-components';

export const SliderCardStyled = styled.div`
  background: #454545;
  padding: 40px 0;

  .slick-slider {
    display: flex;
    justify-content: space-between;

    button {
      width: 50px;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
      height: 50px;
      margin: auto;
    }
  }
`;

export const CardStyled = styled.div`
  padding: 0 20px;
  color: #fff;
  text-align: center;

  h2 {
    font-size: 20px;
    margin: 12px 0;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }

  .img-card {
    position: relative;
    height: 0;
    padding-bottom: 56%;
    border: solid 10px #6f6f6f;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;