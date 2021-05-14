import React from 'react';

import { resourcesData } from '../../../../Landing/Resources/resourcesData';
import { BsArrowRight } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

function Section3() {
  return (
    <div className='featuresSecuritySec3'>
      <div className='container-middle'>
        <div className='resources__title heading-primary featuresSecuritySec3__title'>
          <FormattedMessage id='resourcesTitle' />
        </div>
        <div className='resources'>
          {resourcesData &&
            resourcesData.map((item, i) => {
              const { id, icon, title, text, button, aos } = item;

              return (
                <div
                  className='card'
                  key={id}
                  data-aos={aos}
                  data-aos-duration={i * 600}
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
    </div>
  );
}

export default Section3;
