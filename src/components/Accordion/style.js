import styled from 'styled-components';

export const AccordionStyled = styled.div`
  background: #bebebe;
  padding: 40px 0;
`;

export const AccordionBox = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

export const AccItemStyled = styled.div`
  overflow: hidden;
`;

export const AccButton = styled.button`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(p) => p.active ? '#fff' : '#6f6f6f'};
  border: none;
  font-size: 20px;
  padding: 20px 16px;
  border-bottom: 1px #fff solid;
  color: ${(p) => p.active ? '#6f6f6f' : '#fff'};
  outline: none;
  cursor: pointer;

  svg{
    transition: ease all 400ms;
    transform: rotate(${(p) => p.active ? -180 : 0}deg);
    height: 25px;
  }
`;

export const AccContent = styled.div`
  transition: ease all 400ms;
  background-color: #fff;
`;

export const AccContentInt = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 25px;

  img {
    width: 33%;
    margin-right: 20px;
    border: solid 15px #6f6f6f;
    
    @media ( max-width :992px) {
      width: 100%;
      margin-right: 0;
    }
  }

  p {
    color: #6f6f6f;
    font-size: 14px;
    margin: 10px 0;

    @media ( max-width :992px) {
      text-align: center;
    }
  }

  @media ( max-width :992px) {
    flex-direction: column;
  }

`;
