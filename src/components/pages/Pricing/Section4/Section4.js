import React from 'react';
import { FormattedMessage } from 'react-intl';

function Section4() {
  return (
    <div className='pricingSec4'>
      <div className='container-middle'>
        <div className='pricingSec4__content'>
          <div className='pricingSec4__title'>
            <FormattedMessage id='priceSec4Title' />
          </div>
          <div className='pricingSec4__text'>
            <FormattedMessage id='priceSec4Text' />
          </div>
          <button className='pricingSec4__btn button-primary'>
            <FormattedMessage id='buttonContact' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section4;
