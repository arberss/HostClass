import React from 'react';
import LayoutPhoto from '../../../../layouts/LayoutPhoto';

import { FormattedMessage } from 'react-intl';

function TogetherFirst() {
  return (
    <div className='together-section together-section--1 first'>
      <LayoutPhoto
        container={'container-second'}
        imageClass={'together-section__img'}
        sectionClass={'first__content'}
        paddingSide={'right'}
      >
        {/* <div className='together-section__img'></div>
      <div className='container-second '>
        <div className='first__content'> */}
        <div className='first__text' data-aos='zoom-out-down'>
          <h1 className='heading-primary'>
            {' '}
            <FormattedMessage id='landingSec2Title' />{' '}
          </h1>
          <p className='first__para text-primary'>
            <FormattedMessage id='landingSec2Text' />
          </p>
          <button className='first__button button-primary-hover'>
            <FormattedMessage id='buttonFeatures' />
          </button>
        </div>
        {/* </div>
      </div> */}
      </LayoutPhoto>
    </div>
  );
}

export default TogetherFirst;
