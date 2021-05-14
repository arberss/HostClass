import React from 'react';
import { resourcesData } from './resourcesData';
import { BsArrowRight } from 'react-icons/bs';

import { FormattedMessage } from 'react-intl';

function Resources() {
  return (
    <section className='resources-section'>
      <div className='container-middle'>
        <div className='resources__title heading-primary'>
          <FormattedMessage id='resourcesTitle' />
        </div>
        <div className='resources'>
          {resourcesData &&
            resourcesData.map((item) => {
              const { id, icon, title, text, button, aos } = item;

              return (
                <div
                  className='card'
                  key={id}
                  data-aos={aos}
                  data-aos-duration='800'
                >
                  {icon}
                  <div className='card__title'>{title}</div>
                  <div className='card__text'>{text}</div>
                  <button className='card__button button-unstyled'>
                    {button} <BsArrowRight className='card__button--icon' />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Resources;
