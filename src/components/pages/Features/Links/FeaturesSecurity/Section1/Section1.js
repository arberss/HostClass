import React from 'react';

import LinkPage from '../../../../../shared/LinkPage/LinkPage';

import iphone1 from '../../../../../../assets/img/components/Features/Links/iphone1.webp';
import element_avatar from '../../../../../../assets/img/components/Landing/element_avatar.png';

import { IoIosLock } from 'react-icons/io';
import { HiShieldCheck } from 'react-icons/hi';
import { ImUsers } from 'react-icons/im';
import { FormattedMessage } from 'react-intl';

function Section1() {
  return (
    <>
      <LinkPage
        pageName={'Features'}
        navPageName={<FormattedMessage id='featuresSecurityTitleTop' />}
      />
      <div className='featuresSecuritySec1'>
        <div className='container-middle'>
          <div className='featuresSecuritySec1__title'>
            <FormattedMessage id='featuresSecurityTitle' />
          </div>
          <div className='featuresSecuritySec1__content'>
            <div className='featuresSecuritySec1__left'>
              {/* card */}
              <div
                className='featuresSecuritySec1__card'
                data-aos='fade-right'
                data-aos-duration='800'
              >
                <div className='featuresSecuritySec1__iconbody'>
                  <IoIosLock className='featuresSecuritySec1__icon' />
                </div>
                <div className='featuresSecuritySec1__text'>
                  <FormattedMessage id='featuresSecurityLine1' />
                </div>
              </div>
              {/* card */}
              {/* card */}
              <div
                className='featuresSecuritySec1__card'
                data-aos='fade-right'
                data-aos-duration='1400'
              >
                <div className='featuresSecuritySec1__iconbody'>
                  <ImUsers className='featuresSecuritySec1__icon' />
                </div>
                <div className='featuresSecuritySec1__text'>
                  <FormattedMessage id='featuresSecurityLine2' />
                </div>
              </div>
              {/* card */}
              {/* card */}
              <div
                className='featuresSecuritySec1__card'
                data-aos='fade-right'
                data-aos-duration='1800'
              >
                <div className='featuresSecuritySec1__iconbody'>
                  <HiShieldCheck className='featuresSecuritySec1__icon' />
                </div>
                <div className='featuresSecuritySec1__text'>
                  <FormattedMessage id='featuresSecurityLine3' />
                </div>
              </div>
              {/* card */}
            </div>
            <div className='online__image featuresSecuritySec1__online'>
              <img
                src={iphone1}
                alt=''
                className='online__image--img featuresSecuritySec1__img'
              />
              <div className='lesson'>
                <div className='lesson__top'>
                  <img
                    src={element_avatar}
                    alt=''
                    className='lesson__top--img'
                  />
                  <div className='lesson__lines'>
                    <div className='lesson__line lesson__line--line1'></div>
                    <div className='lesson__line lesson__line--line2'></div>
                  </div>
                </div>
                <div className='lesson__hr'></div>
                <div className='lesson__bottom featuresSecuritySec1__bottom'>
                  <div className='lesson__bottom--title'>
                    Registered Students
                  </div>
                  <div className='lesson__lines'>
                    <div className='lesson__line featuresSecuritySec1__line'></div>
                    <div className='lesson__line featuresSecuritySec1__line'></div>
                    <div className='lesson__line featuresSecuritySec1__line'></div>
                    <div className='lesson__line featuresSecuritySec1__line'></div>
                  </div>
                  <button className='lesson__button button-unstyled'>
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default Section1;
