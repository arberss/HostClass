import React from 'react';
import { FormattedMessage } from 'react-intl';

import image4 from '../../../../../../assets/img/components/Features/Links/image4.webp';

function Section3() {
  return (
    <div className='multipleDevicesSec3'>
      <div className='container-middle'>
        <div className='multipleDevicesSec3__content'>
          <div className='multipleDevicesSec3__left'>
            <div className='multipleDevicesSec3__title'>
              <FormattedMessage id='featuresDevicesSec3Title' />
            </div>
            <div className='multipleDevicesSec3__text text-primary'>
              <FormattedMessage id='featuresDevicesSec3Text' />
            </div>
          </div>
          <div className='multipleDevicesSec3__right'>
            <img src={image4} alt='' className='multipleDevicesSec3__img' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
