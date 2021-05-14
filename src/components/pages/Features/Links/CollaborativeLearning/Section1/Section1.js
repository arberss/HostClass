import React from 'react';
import { FormattedMessage } from 'react-intl';
import LinkPage from '../../../../../shared/LinkPage/LinkPage';

function Section1() {
  return (
    <>
      <LinkPage
        pageName={'Features'}
        navPageName={<FormattedMessage id='featuresCollabSec1TitleTop' />}
      />
      <div className='analyticsHeader__title heading-primary u-text-center'>
        <FormattedMessage id='featuresCollabSec1Title' />
      </div>
      <div className='collaborativeLearningSec1'>
        <div className='container-middle'>
          <div className='collaborativeLearningSec1__box'>
            <div className='collaborativeLearningSec1__title'>
              <FormattedMessage id='featuresCollabSec1CardTitle1' />
            </div>
            <div className='collaborativeLearningSec1__title'>
              <FormattedMessage id='featuresCollabSec1CardTitle2' />
            </div>
            <div className='collaborativeLearningSec1__text text-primary'>
              <FormattedMessage id='featuresCollabSec1CardText' />
            </div>
            <button className='collaborativeLearningSec1__button button-primary-hover'>
              <FormattedMessage id='buttonPurchase' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
