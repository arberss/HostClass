import React from 'react';

import { ReactComponent as IconVideoTutorials } from '../../../../../../assets/img/components/Features/Links/icon-videotutorials.svg';
import { ReactComponent as IconVideoConference } from '../../../../../../assets/img/components/Features/Links/icon-videoconference.svg';
import { ReactComponent as IconVideo2 } from '../../../../../../assets/img/components/Features/Links/icon-video2.svg';

import personm1 from '../../../../../../assets/img/components/Features/Links/personm1.png';
import personf1 from '../../../../../../assets/img/components/Features/Links/personf1.png';

import { ReactComponent as CloudUsers } from '../../../../../../assets/img/components/Landing/cloudusers.svg';

import mobCoverIn from '../../../../../../assets/img/components/Landing/mobCoverIn.webp';

import { GiNetworkBars } from 'react-icons/gi';
import { BiWifi } from 'react-icons/bi';
import { BsBatteryFull } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

function Section4() {
  return (
    <section className='collaborativeLearningSec4'>
      <div className='container-middle'>
        <div className='collaborativeLearningSec4__title heading-primary u-text-center'>
          <FormattedMessage id='featuresCollabSec4Title' />
        </div>
        <div className='collaborativeLearningSec4__content'>
          <div className='collaborativeLearningSec4__left'>
            {/* card */}
            <div className='collaborativeLearningSec4__card'>
              <IconVideoTutorials className='collaborativeLearningSec4__icon' />
              <div className='collaborativeLearningSec4__info'>
                <div className='collaborativeLearningSec4__name'>
                  <FormattedMessage id='featuresCollabSec4Card1Title' />
                </div>
                <div className='collaborativeLearningSec4__text'>
                  <FormattedMessage id='featuresCollabSec4Card1Text' />
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className='collaborativeLearningSec4__card'>
              <IconVideo2 className='collaborativeLearningSec4__icon' />
              <div className='collaborativeLearningSec4__info'>
                <div className='collaborativeLearningSec4__name'>
                  <FormattedMessage id='featuresCollabSec4Card2Title' />
                </div>
                <div className='collaborativeLearningSec4__text'>
                  <FormattedMessage id='featuresCollabSec4Card2Text' />
                </div>
              </div>
            </div>
            {/* card */}
            {/* card */}
            <div className='collaborativeLearningSec4__card'>
              <IconVideoConference className='collaborativeLearningSec4__icon' />
              <div className='collaborativeLearningSec4__info'>
                <div className='collaborativeLearningSec4__name'>
                  <FormattedMessage id='featuresCollabSec4Card3Title' />
                </div>
                <div className='collaborativeLearningSec4__text'>
                  <FormattedMessage id='featuresCollabSec4Card3Text' />
                </div>
              </div>
            </div>
            {/* card */}
          </div>
          <div className='collaborativeLearningSec4__right'>
            <div className='collaborativeLearningSec4__mob'>
              <div
                className='left__mobile collaborativeLearningSec4__mobile'
                data-aos='flip-up'
                data-aos-duration='1400'
              >
                <div className='left__volume left__volume--up'></div>
                <div className='left__volume left__volume--down'></div>
                <div className='left__volume left__volume--silent'></div>
                <div className='left__volume left__volume--off'></div>

                <div className='left__top'>
                  <div className='left__top--clock'>9:41</div>
                  <div className='left__top--icons'>
                    <GiNetworkBars />
                    <BiWifi />
                    <BsBatteryFull />
                  </div>
                </div>
                <div className='left__middle'>
                  <CloudUsers className='left__middle--icon' />
                  <div className='left__middle--text'>HostClass</div>
                </div>
                <div className='left__bottom'>
                  <img
                    src={mobCoverIn}
                    alt=''
                    className='left__bottom--img collaborativeLearningSec4__mobimg'
                  />
                </div>
                <div className='collaborativeLearningSec4__smallbox collaborativeLearningSec4__smallbox--1'>
                  <div className='collaborativeLearningSec4__smallbox--title'>
                    "HostClass is very easy to use"
                  </div>
                  <div className='collaborativeLearningSec4__smallbox--name'>
                    Mikel - Student
                  </div>
                </div>

                <div className='collaborativeLearningSec4__smallbox collaborativeLearningSec4__smallbox--2'>
                  <div className='collaborativeLearningSec4__smallbox--title'>
                    "HostClass makes studies
                  </div>
                  <div className='collaborativeLearningSec4__smallbox--title'>
                    much easier and entertaining "
                  </div>
                  <div className='collaborativeLearningSec4__smallbox--name'>
                    Anna - Student
                  </div>
                </div>

                <img
                  src={personm1}
                  alt=''
                  className='collaborativeLearningSec4__profile collaborativeLearningSec4__profile--1'
                />
                <img
                  src={personf1}
                  alt=''
                  className='collaborativeLearningSec4__profile collaborativeLearningSec4__profile--2'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
