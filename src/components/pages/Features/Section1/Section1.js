import React from 'react';

import LayoutPhoto from '../../../../layouts/LayoutPhoto';

import { FormattedMessage } from 'react-intl';

function Section1() {
  return (
    <div className='section1 sec1NoScroll'>
      <LayoutPhoto
        container={'container-second'}
        imageClass={'section1__img'}
        sectionClass={'classroom'}
        paddingSide={'right'}
      >
        <div className='classroom__text'>
          <h1 className='classroom__title heading-primary'>
            <FormattedMessage id='featuresSec1Title' />
          </h1>
          <p className='text-primary section1__text'>
            <FormattedMessage id='featuresSec1Text' />
          </p>
        </div>
      </LayoutPhoto>
    </div>
  );
}

export default Section1;
