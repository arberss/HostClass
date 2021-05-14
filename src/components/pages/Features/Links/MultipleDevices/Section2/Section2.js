import React from 'react';

import { AiFillWindows, AiFillApple, AiFillAndroid } from 'react-icons/ai';
import { RiMacLine } from 'react-icons/ri';
import { DiLinux } from 'react-icons/di';
import { FormattedMessage } from 'react-intl';

function Section2() {
  return (
    <section className='multipleDevicesSec2'>
      <div className='container-middle'>
        <div className='multipleDevicesSec2__title'>
          <FormattedMessage id='featuresDevicesSec2Title' />
        </div>
        <div className='multipleDevicesSec2__content'>
          <div
            className='multipleDevicesSec2__box multipleDevicesSec2__box--active'
            data-aos='zoom-in'
            data-aos-duration='800'
          >
            <AiFillWindows className='multipleDevicesSec2__icon' />
            <div className='multipleDevicesSec2__mark'>Windows</div>
          </div>

          <div
            className='multipleDevicesSec2__box'
            data-aos='zoom-in'
            data-aos-duration='1200'
          >
            <RiMacLine className='multipleDevicesSec2__icon' />
            <div className='multipleDevicesSec2__mark'>Mac OSX</div>
          </div>

          <div
            className='multipleDevicesSec2__box'
            data-aos='zoom-in'
            data-aos-duration='1400'
          >
            <AiFillApple className='multipleDevicesSec2__icon' />
            <div className='multipleDevicesSec2__mark'>IOS</div>
          </div>

          <div
            className='multipleDevicesSec2__box'
            data-aos='zoom-in'
            data-aos-duration='1600'
          >
            <AiFillAndroid className='multipleDevicesSec2__icon' />
            <div className='multipleDevicesSec2__mark'>Android</div>
          </div>

          <div
            className='multipleDevicesSec2__box'
            data-aos='zoom-in'
            data-aos-duration='1800'
          >
            <DiLinux className='multipleDevicesSec2__icon' />
            <div className='multipleDevicesSec2__mark'>Linux</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
