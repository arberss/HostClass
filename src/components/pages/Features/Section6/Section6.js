import React from 'react';
import { ReactComponent as IconEye } from '../../../../assets/img/components/Features/icon-eye.svg';
import { ReactComponent as IconText } from '../../../../assets/img/components/Features/icon-text.svg';
import { ReactComponent as IconPencil } from '../../../../assets/img/components/Features/icon-pencil.svg';
import { ReactComponent as IconVoicemail } from '../../../../assets/img/components/Features/icon-voicemail.svg';

import avatar1 from '../../../../assets/img/components/Features/avatar1.png';
import colors from '../../../../assets/img/components/Features/colors.webp';

import { FormattedMessage } from 'react-intl';

function Section6() {
  return (
    <section className='section6'>
      <div className='container-middle'>
        <div className='section6__content'>
          <div className='left'>
            <div className='left__title heading-secondary'>
              <FormattedMessage id='featuresSec6Title' />
            </div>
            {/* card */}
            <div className='cards' data-aos='zoom-in'>
              <div className='cards__card'>
                <div className='cards__icon'>
                  <IconEye />
                </div>
                <div className='cards__content'>
                  <div className='cards__title'>
                    <FormattedMessage id='featuresSec6Card1Title' />
                  </div>
                  <div className='cards__text'>
                    <FormattedMessage id='featuresSec6Card1Text' />
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className='cards' data-aos='zoom-in'>
              <div className='cards__card'>
                <div className='cards__icon cards__icon--text'>
                  <IconText />
                </div>
                <div className='cards__content'>
                  <div className='cards__title'>
                    <FormattedMessage id='featuresSec6Card2Title' />
                  </div>
                  <div className='cards__text'>
                    <FormattedMessage id='featuresSec6Card2Text' />
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className='cards' data-aos='zoom-in'>
              <div className='cards__card'>
                <div className='cards__icon'>
                  <IconPencil />
                </div>
                <div className='cards__content'>
                  <div className='cards__title'>
                    <FormattedMessage id='featuresSec6Card3Title' />
                  </div>
                  <div className='cards__text'>
                    <FormattedMessage id='featuresSec6Card3Text' />
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className='cards' data-aos='zoom-in'>
              <div className='cards__card'>
                <div className='cards__icon'>
                  <IconVoicemail />
                </div>
                <div className='cards__content'>
                  <div className='cards__title'>
                    <FormattedMessage id='featuresSec6Card4Title' />
                  </div>
                  <div className='cards__text'>
                    <FormattedMessage id='featuresSec6Card4Text' />
                  </div>
                </div>
              </div>
            </div>
            {/* card */}
          </div>
          <div className='right'>
            <div className='letter'>
              <div
                className='letter__top '
                data-aos='zoom-out-right'
                data-aos-duration='1000'
              >
                <FormattedMessage id='featuresSec6RightCard' />
              </div>
              <div className='letter__hr'></div>
              <div className='letter__bottom'>
                <img src={avatar1} alt='' className='letter__img' />
                <div className='letter__info'>
                  <div className='letter__name'>Mrs.Anita</div>
                  <div className='letter__date'>24 Nov 2020</div>
                </div>
              </div>
              <img
                src={colors}
                alt=''
                className='right__img'
                data-aos='zoom-in-right'
                data-aos-duration='1200'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
