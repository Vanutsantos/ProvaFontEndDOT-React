import styled from 'styled-components';

export const BannerStyled = styled.div`
  height: 0;
  overflow: hidden;
  padding-bottom: 50%;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    
    @media ( max-width :992px) {
      position: relative;
    }
  }

  @media ( max-width :992px) {
    height: auto;
    padding-bottom: unset;
  }
`;

export const BannerContent = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;

  @media ( max-width :992px) {
    position: relative;
    background: #454545;
    top: 0;
    padding-top: 20px;
  }

  h1 {
    font-size: 60px;
    font-weight: bold;
    color: #546130;

    @media ( max-width :992px) {
      font-size: 30px;
      color: #fff;
    }
  }

  p {
    font-size: 24px;
    color: #2d3b09;

    @media ( max-width :992px) {
      font-size: 16px;
      color: #fff;
    }
  }

  img {
    height: 50px;
    width: auto;
    margin: 30px auto;
    display: block;

    @media ( max-width :992px) {
      margin: 20px 0 -60px;
    }
  }
`;
