import React from 'react';
import { FormattedMessage } from 'react-intl';

import LayoutPhoto from '../../../../layouts/LayoutPhoto';

function Section1() {
  return (
    <div className='pricingSec1 sec1NoScroll'>
      <LayoutPhoto
        container={'container-third'}
        imageClass={'pricingSec1__img'}
        sectionClass={'pricingSec1__content'}
        paddingSide={'left'}
      >
        <div className='pricingSec1__text'>
          <FormattedMessage id='priceSec1Title' />
        </div>
      </LayoutPhoto>
    </div>
  );
}

export default Section1;
