import React, { useState } from 'react';
import video from '../../../../assets/img/components/Features/video.mp4';
import { ReactComponent as IconPlay } from '../../../../assets/img/components/Features/icon-play.svg';
import { BsPlayFill } from 'react-icons/bs';

import { FormattedMessage } from 'react-intl';

function Section3() {
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
    <div className='section3'>
      <div className='section3__vid'>
        <video className='section3__video' onClick={videoControl}>
          <source src={video} type='video/mp4' />
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
    </div>
  );
}

export default Section3;
