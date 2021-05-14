import React from 'react';
import { ReactComponent as IconCooperation } from '../../../../assets/img/components/Features/icon-cooperation.svg';
import { ReactComponent as IconCircle } from '../../../../assets/img/components/Features/icon-circle.svg';
import { ReactComponent as IconAnalytics } from '../../../../assets/img/components/Features/icon-analytics.svg';
import { ReactComponent as IconTest } from '../../../../assets/img/components/Features/icon-test.svg';

import LayoutPhoto from '../../../../layouts/LayoutPhoto';

import { FormattedMessage } from 'react-intl';

function Section5() {
  return (
    <div className='section5'>
      <LayoutPhoto
        container={'container'}
        imageClass={'section5__image'}
        sectionClass={'right'}
        paddingSide={'left'}
      >
        <div className='right__title u-text-center'>
          <FormattedMessage id='featuresSec5Title' />
        </div>
        <div className='right__text text-primary'>
          <FormattedMessage id='featuresSec5Text' />
        </div>
        <div className='right__data'>
          {/* card */}
          <div className='right__card'>
            <IconCooperation className='right__icon' />
            <div className='right__info'>
              <div className='right__top'>
                {' '}
                <FormattedMessage id='featuresSec5Card1Title' />
              </div>
              <div className='right__txt'>
                <FormattedMessage id='featuresSec5Card1Text' />
              </div>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div className='right__card'>
            <IconAnalytics className='right__icon' />
            <div className='right__info'>
              <div className='right__top'>
                <FormattedMessage id='featuresSec5Card2Title' />
              </div>
              <div className='right__txt'>
                <FormattedMessage id='featuresSec5Card2Text' />
              </div>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div className='right__card'>
            <IconCircle className='right__icon' />
            <div className='right__info'>
              <div className='right__top'>
                <FormattedMessage id='featuresSec5Card3Title' />
              </div>
              <div className='right__txt'>
                <FormattedMessage id='featuresSec5Card3Text' />
              </div>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div className='right__card'>
            <IconTest className='right__icon' />
            <div className='right__info'>
              <div className='right__top'>
                <FormattedMessage id='featuresSec5Card4Title' />
              </div>
              <div className='right__txt'>
                <FormattedMessage id='featuresSec5Card4Text' />
              </div>
            </div>
          </div>
          {/* card */}
        </div>
      </LayoutPhoto>
    </div>
  );
}

export default Section5;
