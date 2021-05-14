import React from 'react';

import { FormattedMessage } from 'react-intl';

function ToolBanner() {
  return (
    <div className='tool'>
      <div className='container tool__box'>
        <div
          className='tool__content'
          data-aos='slide-left'
          data-aos-duration='600'
        >
          <h1 className='tool__title u-text-center'>
            <FormattedMessage id='landingToolBannerTitle' />
          </h1>
          <p className='tool__text'>
            <FormattedMessage id='landingToolBannerText' />
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToolBanner;
