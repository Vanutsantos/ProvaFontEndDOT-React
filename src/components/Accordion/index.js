import React, {useState, createContext} from 'react';
import AccordionItem from './AccordionItem';
import { AccordionStyled, AccordionBox } from './style';
import { accordion } from '../../utils/objects';

export const Context = createContext();

const Accordion = (props) => {
  
  const [ open, setOpen] = useState(null); 
  
  return (
    <Context.Provider value={{
      open,
      setOpen
    }}>
      <AccordionStyled>
        <div className="container">
          <AccordionBox>
            {!!accordion && accordion.map(item => (
              <AccordionItem 
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
              />
            ))}
          </AccordionBox>
        </div>
      </AccordionStyled>
    </Context.Provider>
  );
}

export default Accordion;
