import React, {useState} from 'react';
import { ContactStyled, ContactForm, } from './style';

const Contact = (props) => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const mask = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g,"");
    value = value.replace(/^(\d\d)(\d)/g,"($1) $2");
    value = value.replace(/(\d{4})(\d)/,"$1-$2"); 
    value = value.replace(/^[a-z]{0,14}$/);
    value = value === 'undefined' ? '' : value;

    e.target.value = value;
  }

  const sendFormContact = (e) => {
    e.preventDefault();
    let msg = `Nome: ${nome} \nEmail: ${email} \nTelefone: ${telefone} \nMensagem: ${mensagem} `
    alert(msg);
  }

  return (
    <ContactStyled>
      <div className="container">
        <ContactForm onSubmit={(e) => sendFormContact(e)}>
          <div className="name">
            <label>*Nome</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Informe seu nome"
              onChange={(e) => {
                setNome(e.target.value)
              }}
              required
            />
          </div>
          <div className="email">
            <label>*E-mail</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Informe seu e-mail" 
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              required
            />
          </div>
          <div className="telephone">
            <label>*Telefone</label>
            <input 
              type="text" 
              maxLength="14"
              name="telephone" 
              placeholder="(__)____-____" 
              onChange={(e) => {
                mask(e)
                setTelefone(e.target.value)
              }}
              required
            />
          </div>
          <div className="message">
            <label>*Mensagem</label>
            <textarea 
              name="message" 
              className="message" 
              placeholder="Escreva aqui"
              rows="8"
              onChange={(e) => {
                setMensagem(e.target.value)
              }}
              required
            />
          </div>
          <div className="submit">
            <button type="submit">Enviar</button>
          </div>
        </ContactForm>
      </div>
    </ContactStyled>
  );
}

export default Contact;
