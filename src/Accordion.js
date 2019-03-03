import React from 'react';
import Tabcordion from './Tabcordion';

const Accordion = (props) => (
  <Tabcordion
    items={props.items}
    activeIndex={props.activeIndex}
  >
    {({ activeIndex, setActiveIndex }) => {
      return (
        <div className="Accordion">
          {props.items.map(({ title, content }, index) => {
            const setActiveClassName = index === activeIndex ? ' Accordion__item--active' : '';
            return (
              <div
                key={index}
                className={`Accordion__item${setActiveClassName}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="Accordion__menu">
                  {title}
                </div>
                <div className="Accordion__content">
                  {content}
                </div>
              </div>
            );
          })}
        </div>
      );
    }}
  </Tabcordion>
);

export default Accordion;