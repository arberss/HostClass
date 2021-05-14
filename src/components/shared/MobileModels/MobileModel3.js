import React from 'react';
import mobileModel1 from '../../../assets/img/shared/mobileModels/mobilemodel1.png';
import screen3 from '../../../assets/img/shared/mobileModels/screen3.png';

import { GiNetworkBars } from 'react-icons/gi';
import { BiWifi } from 'react-icons/bi';
import { BsBatteryFull } from 'react-icons/bs';

import { AiFillInfoCircle, AiFillSetting } from 'react-icons/ai';
import {
  MdContentCopy,
  MdClosedCaption,
  MdVideocam,
  MdKeyboardArrowUp,
} from 'react-icons/md';
import { RiLayoutMasonryFill, RiMessageFill } from 'react-icons/ri';
import { IoMdCall } from 'react-icons/io';
import { FaMicrophone } from 'react-icons/fa';

import { ReactComponent as IconStars } from '../../../assets/img/shared/mobileModels/icon-stars.svg';
import { ReactComponent as IconPc1 } from '../../../assets/img/shared/mobileModels/icon-pc1.svg';
import { ReactComponent as IconPc2 } from '../../../assets/img/shared/mobileModels/icon-pc2.svg';
import { ReactComponent as IconPc3 } from '../../../assets/img/shared/mobileModels/icon-pc3.svg';

function MobileModel3() {
  return (
    <div className='mobileModel mobileModel3'>
      <img src={mobileModel1} alt='' className='mobileModel__mob' />
      <div className='mobileModel__screensize mobileModel3__screensize'>
        <img src={screen3} alt='' className='mobileModel__screen' />

        <div className='mobileModel__top mobileModel3__top'>
          <div className='mobileModel3__clock'>9:41</div>
          <div className='mobileModel__top--icons'>
            <GiNetworkBars className='mobileModel3__icon' />
            <BiWifi className='mobileModel3__icon' />
            <BsBatteryFull className='mobileModel3__icon' />
          </div>
        </div>

        <div className='mobileModel__content mobileModel3__content'>
          <div
            className='mobileModel3__card'
            data-aos='slide-left'
            data-aos-duration='1000'
          >
            <div className='mobileModel3__topinfo'>
              <AiFillInfoCircle className='mobileModel3__topinfo--icon' />
              <span className='mobileModel3__topinfo--infotext'>
                Joining Info
              </span>
            </div>
            <div className='mobileModel3__links'>
              <div className='mobileModel3__links--left'>
                <div className='mobileModel3__links--text'>Metting Link</div>
                <div className='mobileModel3__links--url'>
                  https://sarvatra.com/bez-pvef-syn
                </div>
              </div>
              <MdContentCopy className='mobileModel3__links--copyicon' />
            </div>
            <div className='mobileModel3__topinfo'>
              <RiLayoutMasonryFill className='mobileModel3__topinfo--icon' />
              <span className='mobileModel3__topinfo--infotext'>
                Layout Setting
              </span>
            </div>
            <div className='mobileModel3__layouts'>
              <div className='mobileModel3__layout'>
                <IconStars className='mobileModel3__layout--icon' />
                <div className='mobileModel3__layout--name'>Auto</div>
              </div>
              <div className='mobileModel3__layout'>
                <IconPc1 className='mobileModel3__layout--icon' />
                <div className='mobileModel3__layout--name'>Bottom</div>
              </div>
              <div className='mobileModel3__layout'>
                <IconPc2 className='mobileModel3__layout--icon' />
                <div className='mobileModel3__layout--name'>Focus</div>
              </div>
              <div className='mobileModel3__layout mobileModel3__layout--last'>
                <IconPc3 className='mobileModel3__layout--icon' />
                <div className='mobileModel3__layout--name mobileModel3__layout--lastname'>
                  Tilde
                </div>
              </div>
            </div>

            <div className='mobileModel3__captions'>
              <div className='mobileModel3__topinfo'>
                <MdClosedCaption className='mobileModel3__topinfo--icon ' />
                <span className='mobileModel3__topinfo--infotext'>
                  Captions
                </span>
              </div>
              <div className='mobileModel3__on'></div>
            </div>
          </div>
          <div
            className='mobileModel3__bottom'
            data-aos='slide-right'
            data-aos-duration='1200'
          >
            <div className='mobileModel3__bottom--body mobileModel3__bottom--body1'>
              <AiFillSetting className='mobileModel3__bottom--icon mobileModel3__bottom--icon1' />
            </div>

            <div className='mobileModel3__bottom--body mobileModel3__bottom--body2'>
              <RiMessageFill className='mobileModel3__bottom--icon mobileModel3__bottom--icon2' />
            </div>

            <div className='mobileModel3__bottom--body mobileModel3__bottom--body3'>
              <IoMdCall className='mobileModel3__bottom--icon mobileModel3__bottom--icon3' />
            </div>

            <div className='mobileModel3__bottom--body mobileModel3__bottom--body2'>
              <MdVideocam className='mobileModel3__bottom--icon mobileModel3__bottom--icon2' />
            </div>

            <div className='mobileModel3__bottom--body mobileModel3__bottom--body4'>
              <FaMicrophone className='mobileModel3__bottom--icon mobileModel3__bottom--icon2' />
              <MdKeyboardArrowUp className='mobileModel3__bottom--icon mobileModel3__bottom--icon2' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileModel3;
