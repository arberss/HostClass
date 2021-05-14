import React from 'react';
import photodata1 from '../../../../../../assets/img/components/Features/Links/photodata1.png';
import photodata2 from '../../../../../../assets/img/components/Features/Links/photodata2.webp';
import photodata6 from '../../../../../../assets/img/components/Features/Links/photodata6.webp';
import photodata7 from '../../../../../../assets/img/components/Features/Links/photodata7.webp';

import { ReactComponent as IconMix1 } from '../../../../../../assets/img/components/Features/Links/icon-mix1.svg';
import { ReactComponent as IconMix2 } from '../../../../../../assets/img/components/Features/Links/icon-mix2.svg';
import { FormattedMessage } from 'react-intl';

function Section2() {
  return (
    <section className='mixture'>
      <div className='container-middle'>
        <div className='mixture__content'>
          {/* box */}
          <div className='mixture__box'>
            <div
              className='mixture__left'
              data-aos='slide-right'
              data-aos-duration='800'
            >
              <div className='mixture__title heading-secondary'>
                <FormattedMessage id='featuresAlayticsSec2Title1' />
              </div>
              <div className='mixture__text text-primary'>
                <FormattedMessage id='featuresAlayticsSec2Text1' />
              </div>
              <div className='mixture__button'>
                <button className='mixture__btn button-primary-hover'>
                  <FormattedMessage id='buttonLearnMore' />
                </button>
              </div>
            </div>
            <div
              className='mixture__right'
              data-aos='slide-left'
              data-aos-duration='800'
            >
              <div className='mixture__image'>
                <img src={photodata7} alt='' className='mixture__img' />
                <div className='mixture__smallbox mixture__smallbox--1'>
                  <IconMix1 className='mixture__icon' />
                  <div className='mixture__smallinfo'>
                    <div className='mixture__num'>100+</div>
                    <div className='mixture__smalltitle mixture__smalltitle--1'>
                      Projects Complete
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* box */}
          {/* box */}
          <div className='mixture__box'>
            <div
              className='mixture__left  mixture__left--reverse'
              data-aos='slide-left'
              data-aos-duration='800'
            >
              <div className='mixture__title heading-secondary'>
                <FormattedMessage id='featuresAlayticsSec2Title2' />
              </div>

              <div className='mixture__text text-primary'>
                <FormattedMessage id='featuresAlayticsSec2Text2' />
              </div>
            </div>
            <div
              className='mixture__right'
              data-aos='slide-right'
              data-aos-duration='800'
            >
              <div className='mixture__image'>
                <img
                  src={photodata1}
                  alt=''
                  className='mixture__img  mixture__img--reverse'
                />
              </div>
            </div>
          </div>
          {/* box */}
          {/* box */}
          <div className='mixture__box'>
            <div
              className='mixture__left'
              data-aos='slide-right'
              data-aos-duration='800'
            >
              <div className='mixture__title heading-secondary'>
                <FormattedMessage id='featuresAlayticsSec2Title3' />
              </div>

              <div className='mixture__text text-primary'>
                <FormattedMessage id='featuresAlayticsSec2Text3' />
              </div>
            </div>
            <div
              className='mixture__right'
              data-aos='slide-left'
              data-aos-duration='800'
            >
              <div className='mixture__image'>
                <img src={photodata2} alt='' className='mixture__img' />
                <div className='mixture__smallbox mixture__smallbox--2'>
                  <IconMix2 className='mixture__icon' />
                  <div className='mixture__smallinfo'>
                    <div className='mixture__num'>100+</div>
                    <div className='mixture__smalltitle mixture__smalltitle--2'>
                      Active Projects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* box */}
          {/* box */}
          <div className='mixture__box'>
            <div
              className='mixture__left mixture__left--reverse'
              data-aos='slide-left'
              data-aos-duration='800'
            >
              <div className='mixture__title heading-secondary'>
                <FormattedMessage id='featuresAlayticsSec2Title4' />
              </div>

              <div className='mixture__text text-primary'>
                <FormattedMessage id='featuresAlayticsSec2Text4' />
              </div>
            </div>
            <div
              className='mixture__right'
              data-aos='slide-right'
              data-aos-duration='800'
            >
              <div className='mixture__image'>
                <img
                  src={photodata6}
                  alt=''
                  className='mixture__img mixture__img--reverse'
                />
              </div>
            </div>
          </div>
          {/* box */}
        </div>
      </div>
    </section>
  );
}

export default Section2;
