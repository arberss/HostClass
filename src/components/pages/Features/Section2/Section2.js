import React from 'react';
import { resourcesData } from './sectionData';

function Section2() {
  return (
    <section className='section2'>
      <div className='container-middle'>
        <div className='resources section2__content'>
          {resourcesData &&
            resourcesData.map((item) => {
              const { id, icon, title, text, aos, aosEasing } = item;

              return (
                <div
                  className='card'
                  key={id}
                  data-aos={aos}
                  data-aos-easing={aosEasing}
                >
                  {icon}
                  <div className='card__title section2__title'>{title}</div>
                  <div className='card__text section2__text'>{text}</div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Section2;
