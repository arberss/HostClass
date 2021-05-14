import React, { useState } from 'react';

import video1 from '../../../../assets/img/components/Resources/video1.mp4';
import video2 from '../../../../assets/img/components/Resources/video2.mp4';

import { ReactComponent as IconPlay } from '../../../../assets/img/components/Features/icon-play.svg';
import { BsPlayFill } from 'react-icons/bs';

function Section3() {
  const [videoStart, setVideoStart] = useState(false);
  const [videoStart1, setVideoStart1] = useState(false);

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

  const videoControl1 = () => {
    const playVideo = document.querySelector('.resourcesSec3__video--2');

    if (videoStart1) {
      playVideo.pause();
      setVideoStart1(false);
    } else {
      playVideo.play();
      setVideoStart1(true);
    }
  };

  return (
    <div className='resourcesSec3'>
      <div className='container-middle'>
        <div className='resourcesSec3__content'>
          <div className='section3__vid resourcesSec3__left'>
            <video
              className='section3__video resourcesSec3__video'
              onClick={videoControl}
            >
              <source src={video1} type='video/mp4' />
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
          <div className='resourcesSec3__right'>
            <div className='resourcesSec3__title'>
              See how Hostclass works and the benefits it could bring to your
              classroom
            </div>
            <div className='resourcesSec3__text'>
              Use our online demos are a great way to learn about our products
              and the benefits that they provide to your educational
              institution. HostClass keeps you and your students on the same
              page, whether you’re using your iPad, iPhone, or pretty much any
              computer or device with an internet connection.
            </div>
            <div className='section3__button'>
              <button className='section3__btn' onClick={videoControl}>
                <BsPlayFill className='section3__btn--icon' /> View more Demo
              </button>
            </div>
          </div>
        </div>

        <div className='resourcesSec3__content'>
          <div className='section3__vid resourcesSec3__left'>
            <video
              className='section3__video resourcesSec3__video resourcesSec3__video--2'
              onClick={videoControl1}
            >
              <source src={video2} type='video/mp4' />
            </video>
            {videoStart1 ? null : (
              <IconPlay
                className='section3__icon section3__icon--circle'
                onClick={videoControl1}
              />
            )}
            {videoStart1 ? null : (
              <BsPlayFill
                className='section3__icon section3__icon--play'
                onClick={videoControl1}
              />
            )}
          </div>
          <div className='resourcesSec3__right'>
            <div className='resourcesSec3__title'>
              See how Hostclass works and the benefits it could bring to your
              classroom
            </div>
            <div className='resourcesSec3__text'>
              Use our online demos are a great way to learn about our products
              and the benefits that they provide to your educational
              institution. HostClass keeps you and your students on the same
              page, whether you’re using your iPad, iPhone, or pretty much any
              computer or device with an internet connection.
            </div>
            <div className='section3__button'>
              <button className='button-primary'>View more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
