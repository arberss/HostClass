import React from 'react';
import { FormattedMessage } from 'react-intl';

import universites_logos from '../../../../../../assets/img/components/Landing/universites_logos.webp';

function Section3() {
  return (
    <section className='section3'>
      <div className='container-middle'>
        <div className='universites'>
          <div className='universites__title text-primary u-text-center'>
            <FormattedMessage id='hostClassCompanies' />
          </div>
          <img className='universites__img' src={universites_logos} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Section3;
