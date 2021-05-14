import React from 'react';

import { ReactComponent as IconHomepage } from '../../../assets/img/components/Features/Links/icon-homepage.svg';

import { FormattedMessage } from 'react-intl';

function LinkPage({ pageName, navPageName }) {
  return (
    <div className='page'>
      <div className='container-middle'>
        <div className='page__content'>
          <IconHomepage className='page__icon' />
          <span className='page__inner'>
            {pageName === 'Features' ? (
              <FormattedMessage id='navList1' />
            ) : pageName === 'Resources' ? (
              <FormattedMessage id='navList4' />
            ) : null}{' '}
            /
          </span>
          <span className='page__outer'>{navPageName}</span>
        </div>
      </div>
    </div>
  );
}

export default LinkPage;
