import styled from 'styled-components';

export const ContactStyled = styled.div`
  background: linear-gradient(160deg,#6f6f6f 50%,#454545 50%);
  padding: 40px 0;

  @media ( max-width :992px) {
    background: linear-gradient(125deg,#6f6f6f 50%,#454545 50%);
  }
`;

export const ContactForm = styled.form`

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px 15px;
  grid-template-areas:
    "name name"
    "email telephone"
    "message message"
    "submit submit";

  
  @media ( max-width :992px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "name"
      "email"
      "telephone"
      "message"
      "submit";
  }

  textarea,
  input {
    width: 100%;
    background: #bebebe;
    padding: 20px;
    border-radius: 8px;
    border: none;
    outline: none;
  }

  button {
    background: #fff;
    color: #333;
    border: none;
    margin: 10px auto;
    display: flex;
    padding: 13px 25px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
  }
  
  > div {
    &.name { 
      grid-area: name;
    }
    &.email { 
      grid-area: email;
    }
    &.telephone { 
      grid-area: telephone;
    }
    &.message { 
      grid-area: message;
    }
    &.submit { 
      grid-area: submit;
    }
    
    label {
      color: #333;
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
    }

    
  }
  
  
`;

