import React from 'react';
import { BsFillEnvelopeFill } from 'react-icons/bs';

import { FormattedMessage, useIntl } from 'react-intl';

function Subscribe() {
  const intl = useIntl();
  return (
    <section className='subscribe'>
      <div className='container-middle subscribe__body'>
        <div className='subscribe__title '>
          <FormattedMessage id='subscribeTitle' />
        </div>
        <div className='subscribe__text '>
          <FormattedMessage id='subscribeText' />
        </div>
        <div className='subscribe__content'>
          <div className='subscribe__iconin'>
            <BsFillEnvelopeFill className='subscribe__icon' />
          </div>
          <input
            type='email'
            placeholder={intl.formatMessage({ id: 'subscribeInput' })}
            className='subscribe__input'
          />
          <button className='subscribe__button button-primary'>
            <FormattedMessage id='subscribeBtn' />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
