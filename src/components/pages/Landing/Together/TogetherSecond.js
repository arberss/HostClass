import React from 'react';
import { data } from './tableData';

import { FormattedMessage } from 'react-intl';

function TogetherSecond() {
  return (
    <div className='together-section together-section--2'>
      <div className='container-middle'>
        <div className='second'>
          {data &&
            data.map((item) => {
              const { id, title, list1, list2, list3, aos } = item;
              return (
                <div
                  className='second__box'
                  key={id}
                  data-aos={aos}
                  data-aos-duration='1000'
                >
                  <div className='second__title heading-secondary u-text-center'>
                    {title}
                  </div>
                  <ul className='second__ul'>
                    <li className='second__list'>{list1}</li>
                    <li className='second__list'>{list2}</li>
                    <li className='second__list'>{list3}</li>
                  </ul>
                  <button className='second__button button-primary-hover'>
                    <FormattedMessage id='buttonLearnMore' />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default TogetherSecond;
