import React from 'react';
import LinkPage from '../../../../../shared/LinkPage/LinkPage';

import image3 from '../../../../../../assets/img/components/Features/Links/image3.webp';
import { FormattedMessage } from 'react-intl';

function Section1() {
  return (
    <>
      <LinkPage
        pageName={'Features'}
        navPageName={<FormattedMessage id='featuresDevicesSec1TitleTop' />}
      />
      <div className='multipleDevicesSec1'>
        <div className='container-middle'>
          <div className='featuresLearning__content u-text-center'>
            <div className='featuresLearning__title multipleDevicesSec1__title'>
              <FormattedMessage id='featuresDevicesSec1Title' />
            </div>
            <div className='featuresLearning__text text-primary'>
              <FormattedMessage id='featuresDevicesSec1Text' />
            </div>
            <img
              src={image3}
              alt=''
              className='featuresLearning__image multipleDevicesSec1__img'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
