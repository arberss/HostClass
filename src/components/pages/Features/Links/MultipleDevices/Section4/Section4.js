import React from 'react';
import { resourcesData } from '../../../Section2/sectionData';

function Section4() {
  return (
    <section className='multipleDevicesSec4'>
      <div className='container-middle'>
        <div className='resources multipleDevicesSec4__content'>
          {resourcesData &&
            resourcesData.map((item, i) => {
              const { id, icon, title, text, aos } = item;

              return (
                <div
                  className='card'
                  key={id}
                  data-aos={aos}
                  data-aos-duration={i * 800}
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

export default Section4;
