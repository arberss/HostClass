import React from 'react';

import { FormattedMessage } from 'react-intl';

import LayoutPhoto from '../../../../layouts/LayoutPhoto';

function Classroom() {
  return (
    <div className='content sec1NoScroll'>
      <LayoutPhoto
        container={'container-second'}
        imageClass={'content__photo'}
        sectionClass={'classroom'}
        paddingSide={'right'}
      >
        {/* <div className='content__photo'>
      </div>
      <div className='container-second content__data'>
        <div className='classroom'> */}
        <div className='classroom__text' data-aos='zoom-out-right'>
          <h1 className='classroom__title heading-primary'>
            <FormattedMessage id='landingSec1Title' />
          </h1>
          <p className='text-primary'>
            <FormattedMessage id='landingSec1Text' />
          </p>
          <button className='classroom__button button-primary-hover'>
            <FormattedMessage id='buttonStarted' />
          </button>
        </div>
        {/* </div>
      </div> */}
      </LayoutPhoto>
    </div>
  );
}

export default Classroom;
