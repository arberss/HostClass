import React, { useState } from 'react';
import LinkPage from '../../../../../shared/LinkPage/LinkPage';

import videoMeeting from '../../../../../../assets/img/components/Features/Links/video-meeting.mp4';

import { ReactComponent as IconPlay } from '../../../../../../assets/img/components/Features/icon-play.svg';
import { BsPlayFill } from 'react-icons/bs';
import { FormattedMessage } from 'react-intl';

function Section1() {
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
    <>
      <LinkPage
        pageName={'Features'}
        navPageName={<FormattedMessage id='featuresConfSec1TitleTop' />}
      />
      <div className='webConferencingSec1'>
        <div className='container-middle'>
          <div className='webConferencingSec1__content'>
            <div
              className='webConferencingSec1__title'
              data-aos='slide-right'
              data-aos-duration='800'
            >
              <FormattedMessage id='featuresConfSec1Title' />
            </div>
            <div
              className='webConferencingSec1__text text-primary'
              data-aos='slide-left'
              data-aos-duration='1000'
            >
              <FormattedMessage id='featuresConfSec1Text' />
            </div>

            {/* video */}
            <div className='webConferencingSec1__videocontent'>
              <div className='webConferencingSec1__vid'>
                <video className='section3__video' onClick={videoControl}>
                  <source src={videoMeeting} type='video/mp4' />
                </video>
                {videoStart ? null : (
                  <IconPlay
                    className='section3__icon section3__icon--circle webConferencingSec1__icon'
                    onClick={videoControl}
                  />
                )}
                {videoStart ? null : (
                  <BsPlayFill
                    className='section3__icon section3__icon--play webConferencingSec1__icon1'
                    onClick={videoControl}
                  />
                )}
              </div>
            </div>
            {/* video */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
