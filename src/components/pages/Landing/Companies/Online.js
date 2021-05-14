import React from 'react';

import { onlineData } from './onlineData';

import phone from '../../../../assets/img/components/Landing/phone.webp';
import element_avatar from '../../../../assets/img/components/Landing/element_avatar.png';

import { FormattedMessage } from 'react-intl';

function Online() {
  return (
    <div className='online onlineAfter'>
      <div className='cards'>
        <div className='online__title heading-secondary'>
          <FormattedMessage id='onlineCardTitle' />
        </div>
        {onlineData &&
          onlineData.map((item) => {
            const { id, icon, title, text, aos } = item;
            return (
              <div className='cards__card' key={id} data-aos={aos}>
                <div className='cards__icon'>{icon}</div>
                <div className='cards__content'>
                  <div className='cards__title'>{title}</div>
                  <div className='cards__text'>{text}</div>
                </div>
              </div>
            );
          })}
      </div>
      <div className='online__image'>
        <img src={phone} alt='' className='online__image--img' />
        <div className='lesson' data-aos='flip-right' data-aos-duration='800'>
          <div className='lesson__top'>
            <img src={element_avatar} alt='' className='lesson__top--img' />
            <div className='lesson__lines'>
              <div className='lesson__line lesson__line--line1'></div>
              <div className='lesson__line lesson__line--line2'></div>
            </div>
          </div>
          <div className='lesson__hr'></div>
          <div className='lesson__bottom'>
            <div className='lesson__bottom--title'>A new lesson available!</div>
            <div className='lesson__lines'>
              <div className='lesson__line lesson__line--line3'></div>
              <div className='lesson__line lesson__line--line4'></div>
              <div className='lesson__line lesson__line--line5'></div>
              <div className='lesson__line lesson__line--line3'></div>
            </div>
            <button className='lesson__button button-unstyled'>View</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Online;
