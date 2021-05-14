import React from 'react';

import { BsArrowRight } from 'react-icons/bs';

function Section1() {
  return (
    <div className='blogSec1 sec1Scroll'>
      <div className='container-middle'>
        <div className='blogSec1__content'>
          <div className='blogSec1__title'>
            Planning Lessons for an In-Person Blended Learning Environment
          </div>
          <div className='blogSec1__text'>
            The concept of blended learning was around long before the pandemic.
            Blended learning combines both engaging in-person and online lessons
            and activities that often allow students more control over pace,
            duration, location, and ultimately their path of learning.
          </div>
          <button className='blogSec1__btn button-unstyled'>
            Read More <BsArrowRight className='blogSec1__icon' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
