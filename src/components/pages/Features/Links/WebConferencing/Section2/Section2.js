import React from 'react';
import { FormattedMessage } from 'react-intl';
import MobileModel2 from '../../../../../shared/MobileModels/MobileModel2';

function Section2() {
  return (
    <section className='webConferencingSec2'>
      <div className='container-middle'>
        <div className='webConferencingSec2__content'>
          <div className='webConferencingSec2__left'>
            <div className='webConferencingSec2__title'>
              <FormattedMessage id='featuresConfSec2Title' />
            </div>
            <div className='webConferencingSec2__text text-primary'>
              <FormattedMessage id='featuresConfSec2Text' />
            </div>
          </div>
          <div className='webConferencingSec2__right'>
            <MobileModel2 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
