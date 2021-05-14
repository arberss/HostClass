import React from 'react';
import photo1 from '../../../../../../assets/img/components/Features/Links/photo1.webp';
import LinkPage from '../../../../../shared/LinkPage/LinkPage';

import { FormattedMessage } from 'react-intl';

function Section1() {
  return (
    <>
      <LinkPage
        pageName={'Features'}
        navPageName={<FormattedMessage id='featuresLearningSec1Title' />}
      />
      <div className='featuresLearning'>
        <div className='container-middle'>
          <div className='featuresLearning__content u-text-center'>
            <div className='featuresLearning__title heading-secondary'>
              <FormattedMessage id='featuresLearningSec1Title' />
            </div>
            <div className='featuresLearning__text text-primary'>
              <FormattedMessage id='featuresLearningSec1Text' />
            </div>
            <img src={photo1} alt='' className='featuresLearning__image' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
