import React from 'react';
import { plansData } from './plansData';

import { FormattedMessage } from 'react-intl';

function Plans() {
  return (
    <section className='price-section'>
      <div className='container-middle'>
        <h1 className='price-section__title heading-primary u-text-center'>
          <FormattedMessage id='plansTitle' />
        </h1>
        <div className='plans'>
          {plansData &&
            plansData.map((item, i) => {
              const {
                badge,
                price,
                month,
                text,
                lists,
                button,
                aos,
                planId,
              } = item;

              return (
                <div
                  className={
                    planId === 2
                      ? 'plans__card plans__card--primary'
                      : 'plans__card'
                  }
                  key={i}
                  data-aos={aos}
                  data-aos-duration='1000'
                >
                  <div className='plans__badge'>{badge}</div>
                  <div className='plans__price'>
                    {planId !== 2 ? '$' : ''}
                    {price}
                  </div>
                  {planId !== 2 ? (
                    <div className='plans__month'>{month}</div>
                  ) : (
                    <div
                      className='plans__month'
                      style={{ visibility: 'hidden' }}
                    >
                      Free
                    </div>
                  )}
                  <div className='plans__text'>{text}</div>
                  <div className='plans__line'></div>
                  <ul className='plans__lists'>
                    {lists.map((list) => {
                      const { id, logo, text } = list;
                      return (
                        <li className='plans__list' key={id}>
                          {logo}
                          {text}
                        </li>
                      );
                    })}
                  </ul>
                  <div className='plans__line'></div>
                  <button className='plans__button plans__button--styled button-primary-hover'>
                    {button}
                  </button>
                  <button className='plans__button plans__button--unstyled button-unstyled'>
                    <FormattedMessage id='buttonLearnMore' />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Plans;
