import styled from 'styled-components';

export const TextAreaStyled = styled.div`
  background-color: #6f6f6f;
  padding: 40px 0;
`;

export const TextAreaBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media ( max-width :992px) {
    flex-direction: column;
  }
`;

export const ImageBox = styled.div`
  width: 35%;
  position: relative;
  height: 0;
  padding-bottom: 35%;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-radius: 50%;
    border: 15px solid #343434;
  }

  @media ( max-width :992px) {
    width: 100%;
    padding-bottom: 100%;
  }
`;

export const TextBox = styled.div`
  width: 55%;
  margin: 20px 0;

  @media ( max-width :992px) {
    width: 100%;
    text-align: center;
  }

  p {
    margin-bottom: 15px;
    color: #fff;
    font-size: 14px;

    &.bold-text {
      font-weight: bold;
    }

    &.italic-text {
      font-style: italic;
    }
  }
`;
