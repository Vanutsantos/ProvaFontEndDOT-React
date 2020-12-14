import React, { useRef, useContext, useCallback} from 'react';
import { Context } from './index';
import { AccItemStyled, AccButton, AccContent, AccContentInt } from './style';

const AccordionItem = ({id, title, image, description}) => {

  const {open, setOpen} = useContext(Context);
  const content = useRef(null);

  const isOpen = useCallback(() => {
    return open === id;
  }, [open, id])

  const toggleAccordion = (id) => {
    if (isOpen()) {
      setOpen(null);
    }else{
      setOpen(id);
    }
  }

  return (
    <AccItemStyled>
      <AccButton
        active={isOpen()}
        onClick={() => toggleAccordion(id)}
      >
        <span>{title}</span>
        <svg 
          aria-hidden="true" 
          focusable="false"
          data-prefix="fas" 
          data-icon="arrow-down" 
          role="img" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 448 512"
        >
          <path 
            fill={`${isOpen() ? '#6f6f6f' : '#fff'}`} 
            d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"
            >
          </path>
        </svg>
      </AccButton>
      <AccContent
        ref={content}
        style={{ maxHeight: `${isOpen() ? `${content.current.scrollHeight}px` : '0' }` }}
      >
        <AccContentInt>
          <img src={image} className="arrow-down" alt=""/>
          <p>{description}</p>
        </AccContentInt>
      </AccContent>
    </AccItemStyled>
  );
}

export default AccordionItem;
