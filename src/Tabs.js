import React from 'react';
import Tabcordion from './Tabcordion';

const Tabs = (props) => (
  <Tabcordion
    items={props.items}
    activeIndex={props.activeIndex}
  >
    {({ activeIndex, setActiveIndex }) => {
      return (
        <div className="Tabs">
          <div className="Tabs__menu">
            {props.items.map(({ title }, index) => {
              const setActiveClassName = index === activeIndex ? ' Tabs__menu__item--active' : '';
              return (
                <div
                  key={index}
                  className={`Tabs__menu__item${setActiveClassName}`}
                  onClick={() => setActiveIndex(index)}
                >
                  {title}
                </div>
              );
            })}
          </div>
          <div className="Tabs__body">
            {props.items.map(({ content }, index) => {
              const setActiveClassName = index === activeIndex ? ' Tabs__content--active' : '';
              return (
                <div
                  key={index}
                  className={`Tabs__content${setActiveClassName}`}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      );
    }}
  </Tabcordion>
);

export default Tabs;