import React from 'react';
import LinkPage from '../../../../../shared/LinkPage/LinkPage';

import LayoutPhoto from '../../../../../../layouts/LayoutPhoto';
import { FormattedMessage } from 'react-intl';

function Section1() {
  return (
    <>
      <LinkPage
        pageName={'Features'}
        navPageName={<FormattedMessage id='featuresAlayticsTitleTop' />}
      />
      <div className='analyticsHeader__title heading-primary u-text-center'>
        <FormattedMessage id='featuresAlayticsTitle' />
      </div>
      <div className='analyticsHeader'>
        <LayoutPhoto
          container={'container-second'}
          imageClass={'analyticsHeader__photo'}
          sectionClass={'analyticsHeader__content'}
          paddingSide={'right'}
        >
          <div className='analyticsHeader__box'>
            <FormattedMessage id='featuresAlayticsText' />
          </div>
        </LayoutPhoto>
      </div>
    </>
  );
}

export default Section1;
