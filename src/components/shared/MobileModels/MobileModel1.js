import React from 'react';
import mobileModel1 from '../../../assets/img/shared/mobileModels/mobilemodel1.png';
import screen1 from '../../../assets/img/shared/mobileModels/screen1.png';
import mobphoto1 from '../../../assets/img/shared/mobileModels/mobphoto1.png';

import { GiNetworkBars } from 'react-icons/gi';
import { BiWifi } from 'react-icons/bi';
import { BsBatteryFull } from 'react-icons/bs';

import { ReactComponent as IconVoice } from '../../../assets/img/shared/mobileModels/icon-voice.svg';
import { ReactComponent as IconPlay } from '../../../assets/img/shared/mobileModels/icon-play.svg';
import { ReactComponent as IconPerson } from '../../../assets/img/shared/mobileModels/icon-person.svg';

import { IoMdCall } from 'react-icons/io';

function MobileModel1() {
  return (
    <div
      className='mobileModel mobileModel1'
      data-aos='slide-up'
      data-aos-duration='800'
    >
      <img src={mobileModel1} alt='' className='mobileModel__mob' />
      <div className='mobileModel__screensize'>
        <img
          src={screen1}
          alt=''
          className='mobileModel__screen'
          data-aos='slide-down'
          data-aos-duration='1400'
        />

        <div className='mobileModel__top'>
          <div>9:41</div>
          <div className='mobileModel__top--icons'>
            <GiNetworkBars />
            <BiWifi />
            <BsBatteryFull />
          </div>
        </div>

        <div className='mobileModel__content'>
          <img src={mobphoto1} alt='' className='mobileModel1__img' />
          <div className='mobileModel1__name'>Rahul Kumar</div>
          <div className='mobileModel1__time'>50:04</div>
          <div className='mobileModel1__icons'>
            <div className='mobileModel1__iconbody'>
              <IconVoice className='mobileModel1__icon' />
            </div>
            <div className='mobileModel1__iconbody'>
              <IconPlay className='mobileModel1__icon' />
            </div>
            <div className='mobileModel1__iconbody'>
              <IconPerson className='mobileModel1__icon' />
            </div>
          </div>
          <div className='mobileModel1__callbody'>
            <IoMdCall className='mobileModel1__callicon' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileModel1;
