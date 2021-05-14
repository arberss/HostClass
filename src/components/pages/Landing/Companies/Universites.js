import React from 'react';
import universites_logos from '../../../../assets/img/components/Landing/universites_logos.webp';

import { FormattedMessage } from 'react-intl';

function Universites() {
  return (
    <div className='universites'>
      <div className='universites__title text-primary u-text-center'>
        <FormattedMessage id='hostClassCompanies' />
      </div>
      <img className='universites__img' src={universites_logos} alt='' />
    </div>
  );
}

export default Universites;
