import React, { useState } from 'react';

import videoLaptop from '../../../../../../assets/img/components/Features/Links/video-laptop.mp4';

import { ReactComponent as IconPlay } from '../../../../../../assets/img/components/Features/icon-play.svg';
import { BsPlayFill } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

function Section2() {
  const [videoStart, setVideoStart] = useState(false);

  const videoControl = () => {
    const playVideo = document.querySelector('.section3__video');

    if (videoStart) {
      playVideo.pause();
      setVideoStart(false);
    } else {
      playVideo.play();
      setVideoStart(true);
    }
  };

  return (
    <section className='featuresSecuritySec2'>
      <div className='section3__vid'>
        <video className='section3__video' onClick={videoControl}>
          <source src={videoLaptop} type='video/mp4' />
        </video>
        {videoStart ? null : (
          <IconPlay
            className='section3__icon section3__icon--circle'
            onClick={videoControl}
          />
        )}
        {videoStart ? null : (
          <BsPlayFill
            className='section3__icon section3__icon--play'
            onClick={videoControl}
          />
        )}
      </div>
      <div className='container-second section3__content'>
        <div className='section3__info'>
          <div className='section3__title'>
            <FormattedMessage id='featuresSec3Title' />
          </div>
          <div className='section3__button'>
            <button className='section3__btn' onClick={videoControl}>
              <BsPlayFill className='section3__btn--icon' />{' '}
              <FormattedMessage id='buttonWatch' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
