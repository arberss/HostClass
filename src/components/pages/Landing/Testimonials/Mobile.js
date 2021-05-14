import React from 'react';
import { ReactComponent as CloudUsers } from '../../../../assets/img/components/Landing/cloudusers.svg';
import { ReactComponent as PlaystoreIcon } from '../../../../assets/img/components/Landing/playstoreIcon.svg';

import mobCoverIn from '../../../../assets/img/components/Landing/mobCoverIn.webp';
import { RiAppleFill } from 'react-icons/ri';
import { GiNetworkBars } from 'react-icons/gi';
import { BiWifi } from 'react-icons/bi';
import { BsBatteryFull } from 'react-icons/bs';

import { FormattedMessage } from 'react-intl';

function Mobile() {
  return (
    <div className='mobile'>
      <div className='container-middle'>
        <div className='mobile__content'>
          <div className='left' data-aos='flip-down' data-aos-duration='800'>
            <div className='left__mobile'>
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
                <img src={mobCoverIn} alt='' className='left__bottom--img' />
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right__content'>
              <div className='right__title heading-primary'>
                <FormattedMessage id='testimionalMobTitle' />
              </div>
              <div className='right__text text-primary'>
                <FormattedMessage id='testimionalMobText' />
              </div>

              <div className='store'>
                <a href='/' className='store__buttons'>
                  <PlaystoreIcon className='store__buttons--playstore' />
                  <div className='store__btns'>
                    <div className='store__btns--text'>Get it on</div>
                    <div className='store__btns--title'>Google Play</div>
                  </div>
                </a>

                <a href='/' className='store__buttons'>
                  <RiAppleFill className='store__buttons--apple' />
                  <div className='store__btns'>
                    <div className='store__btns--text'>Download on the</div>
                    <div className='store__btns--title'>App Store</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
