import React from 'react';

import { cardData } from './section2Data';

function Section2() {
  return (
    <section className='supportSec2'>
      <div className='container-middle-small'>
        <div className='supportSec2__content'>
          {cardData &&
            cardData.map((item, i) => {
              const { icon, title, text } = item;

              return (
                <div className='supportSec2__card' key={i}>
                  {icon}
                  <div className='supportSec2__title'>{title}</div>
                  <div className='supportSec2__text'>{text}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Section2;
