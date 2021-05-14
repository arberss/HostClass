import React from 'react';
import mobileModel1 from '../../../assets/img/shared/mobileModels/mobilemodel1.png';
import screen2 from '../../../assets/img/shared/mobileModels/screen2.png';

import user1 from '../../../assets/img/shared/mobileModels/user1.png';
import user2 from '../../../assets/img/shared/mobileModels/user2.png';
import user3 from '../../../assets/img/shared/mobileModels/user3.png';
import user4 from '../../../assets/img/shared/mobileModels/user4.png';

import { ReactComponent as IconMicro } from '../../../assets/img/shared/mobileModels/icon-micro.svg';
import { ReactComponent as IconNoMicro } from '../../../assets/img/shared/mobileModels/icon-nomicro.svg';
import { ReactComponent as IconVoice2 } from '../../../assets/img/shared/mobileModels/icon-voice2.svg';
import { ReactComponent as IconNoVoice } from '../../../assets/img/shared/mobileModels/icon-novoice.svg';
import { ReactComponent as IconCallPlus } from '../../../assets/img/shared/mobileModels/icon-callplus.svg';

import { GiNetworkBars } from 'react-icons/gi';
import { BiWifi } from 'react-icons/bi';
import { BsBatteryFull } from 'react-icons/bs';

import { ReactComponent as CloudUsers } from '../../../assets/img/components/Landing/cloudusers.svg';

function MobileModel2() {
  return (
    <div
      className='mobileModel mobileModel2'
      data-aos='slide-right'
      data-aos-duration='1000'
    >
      <img src={mobileModel1} alt='' className='mobileModel__mob' />
      <div className='mobileModel__screensize'>
        <img
          src={screen2}
          alt=''
          className='mobileModel__screen'
          data-aos='slide-right'
          data-aos-duration='1100'
        />

        <div className='mobileModel__top'>
          <div className='mobileModel2__clock'>9:41</div>
          <div className='mobileModel__top--icons'>
            <GiNetworkBars className='mobileModel2__icon' />
            <BiWifi className='mobileModel2__icon' />
            <BsBatteryFull className='mobileModel2__icon' />
          </div>
        </div>

        <div className='mobileModel__content'>
          <div className='mobileModel2__banner'>
            <CloudUsers className='mobileModel2__banner--icon' />
            <div className='mobileModel2__banner--text'>HostClass</div>
          </div>
          <div className='mobileModel2__grid'>
            {/* box */}
            <div className='mobileModel2__box'>
              <img src={user1} alt='' className='mobileModel2__smallimg' />
              <div className='mobileModel2__menus'>
                <IconVoice2 className='mobileModel2__menus--icon' />
                <span className='mobileModel2__menus--name'>
                  Tanzeel Agarwal
                </span>
                <IconMicro className='mobileModel2__menus--icon' />
              </div>
            </div>
            {/* box */}
            {/* box */}
            <div className='mobileModel2__box'>
              <img src={user2} alt='' className='mobileModel2__smallimg' />
              <div className='mobileModel2__menus'>
                <IconNoVoice className='mobileModel2__menus--icon' />
                <span className='mobileModel2__menus--name'>Sanjay Anubh…</span>
                <IconNoMicro className='mobileModel2__menus--icon' />
              </div>
            </div>
            {/* box */}
            {/* box */}
            <div className='mobileModel2__box'>
              <div className='mobileModel2__creds'>MD</div>
              <div className='mobileModel2__menus'>
                <IconVoice2 className='mobileModel2__menus--icon' />
                <span className='mobileModel2__menus--name'>Maria Dominc</span>
                <IconMicro className='mobileModel2__menus--icon' />
              </div>
            </div>
            {/* box */}
            {/* box */}
            <div className='mobileModel2__box'>
              <div className='mobileModel2__creds'>TJ</div>
              <div className='mobileModel2__menus'>
                <IconVoice2 className='mobileModel2__menus--icon' />
                <span className='mobileModel2__menus--name'>Tony Ja</span>
                <IconMicro className='mobileModel2__menus--icon' />
              </div>
            </div>
            {/* box */}
            {/* box */}
            <div className='mobileModel2__box'>
              <div className='mobileModel2__creds'>SP</div>
              <div className='mobileModel2__menus'>
                <IconVoice2 className='mobileModel2__menus--icon' />
                <span className='mobileModel2__menus--name'>Shreyas Pin…</span>
                <IconMicro className='mobileModel2__menus--icon' />
              </div>
            </div>
            {/* box */}
            {/* box */}
            <div className='mobileModel2__box'>
              <img src={user3} alt='' className='mobileModel2__smallimg' />
              <div className='mobileModel2__menus'>
                <IconNoVoice className='mobileModel2__menus--icon' />
                <span className='mobileModel2__menus--name'>Dhanush Ku...</span>
                <IconNoMicro className='mobileModel2__menus--icon' />
              </div>
            </div>
            {/* box */}
            {/* box */}
            <div className='mobileModel2__box'>
              <img src={user4} alt='' className='mobileModel2__smallimg' />
              <div className='mobileModel2__menus'>
                <IconNoVoice className='mobileModel2__menus--icon' />
                <span className='mobileModel2__menus--name'>Maria Joseph</span>
                <IconMicro className='mobileModel2__menus--icon' />
              </div>
            </div>
            {/* box */}
            {/* box */}
            <div className='mobileModel2__box'>
              <div className='mobileModel2__creds mobileModel2__creds--dark'>
                AJ
              </div>
              <div className='mobileModel2__menus'>
                <IconVoice2 className='mobileModel2__menus--icon' />
                <span className='mobileModel2__menus--name'></span>
                <IconCallPlus className='mobileModel2__menus--icon' />
              </div>
            </div>
            {/* box */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileModel2;
