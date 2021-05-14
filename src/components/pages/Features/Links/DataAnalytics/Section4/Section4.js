import React from 'react';

import photodata5 from '../../../../../../assets/img/components/Features/Links/photodata5.webp';
import photodata3 from '../../../../../../assets/img/components/Features/Links/photodata3.webp';
import photodata4 from '../../../../../../assets/img/components/Features/Links/photodata4.webp';

import { BsArrowRight } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

function Section4() {
  return (
    <section className='enhanceStudent'>
      <div className='container-middle-small'>
        <div className='enhanceStudent__title heading-secondary u-text-center'>
          <FormattedMessage id='featuresAnalyticsSec4Title' />
        </div>
        <div className='enhanceStudent__content'>
          {/* card */}
          <div
            className='enhanceStudent__card'
            data-aos='fade-right'
            data-aos-duration='900'
          >
            <img src={photodata3} alt='' className='enhanceStudent__img' />
            <div className='enhanceStudent__bottom'>
              <div className='enhanceStudent__topinfo'>
                <div className='enhanceStudent__smallname'>Webinar</div>
                <div className='enhanceStudent__date'>21 Nov 2020</div>
              </div>
              <div className='enhanceStudent__name'>
                <FormattedMessage id='featuresAnalyticsSec4Card1Title' />
              </div>
              <div className='enhanceStudent__text'>
                <FormattedMessage id='featuresAnalyticsSec4Card1Text' />
              </div>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div
            className='enhanceStudent__card'
            data-aos='fade-up'
            data-aos-duration='1000'
          >
            <img src={photodata5} alt='' className='enhanceStudent__img' />
            <div className='enhanceStudent__bottom'>
              <div className='enhanceStudent__topinfo'>
                <div className='enhanceStudent__smallname'>Webinar</div>
                <div className='enhanceStudent__date'>21 Nov 2020</div>
              </div>
              <div className='enhanceStudent__name'>
                <FormattedMessage id='featuresAnalyticsSec4Card2Title' />
              </div>
              <div className='enhanceStudent__text'>
                <FormattedMessage id='featuresAnalyticsSec4Card2Text' />
              </div>
            </div>
          </div>
          {/* card */}
          {/* card */}
          <div
            className='enhanceStudent__card'
            data-aos='fade-down'
            data-aos-duration='1200'
          >
            <img src={photodata4} alt='' className='enhanceStudent__img' />
            <div className='enhanceStudent__bottom'>
              <div className='enhanceStudent__topinfo'>
                <div className='enhanceStudent__smallname'>Webinar</div>
                <div className='enhanceStudent__date'>21 Nov 2020</div>
              </div>
              <div className='enhanceStudent__name'>
                <FormattedMessage id='featuresAnalyticsSec4Card3Title' />
              </div>
              <div className='enhanceStudent__text'>
                <FormattedMessage id='featuresAnalyticsSec4Card3Text' />
              </div>
            </div>
          </div>
          {/* card */}
          <button className='enhanceStudent__button'>
            <FormattedMessage id='buttonViewMore' />
            <BsArrowRight className='enhanceStudent__button--icon' />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section4;
