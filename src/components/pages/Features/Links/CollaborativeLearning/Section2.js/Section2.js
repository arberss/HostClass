import React from 'react';
import { FormattedMessage } from 'react-intl';
import photocollab2 from '../../../../../../assets/img/components/Features/Links/photocollab2.webp';

function Section2() {
  return (
    <div className='collaborativeLearningSec2'>
      <div className='container-middle'>
        <div className='collaborativeLearningSec2__content'>
          <div className='collaborativeLearningSec2__left'>
            <div className='collaborativeLearningSec2__info'>
              <div
                className='collaborativeLearningSec2__title heading-secondary'
                data-aos='fade-right'
                data-aos-duration='1000'
              >
                <FormattedMessage id='featuresCollabSec2Title' />
              </div>
              <div className='collaborativeLearningSec2__text text-primary'>
                <FormattedMessage id='featuresCollabSec2Text' />
              </div>
            </div>
          </div>
          <div className='collaborativeLearningSec2__right'>
            <img
              src={photocollab2}
              alt=''
              className='collaborativeLearningSec2__img'
              data-aos='fade-left'
              data-aos-duration='1200'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
