import React from 'react';

import { AiOutlineSearch } from 'react-icons/ai';

function Section1() {
  return (
    <div className='supportSec1 sec1Scroll'>
      <div className='container-middle'>
        <div className='supportSec1__content'>
          <div className='supportSec1__title'>How can we help?</div>
          <div className='supportSec1__inputbox'>
            <AiOutlineSearch className='supportSec1__icon' />
            <input
              type='text'
              name='keyword'
              className='supportSec1__input'
              placeholder='Enter keyword'
            />
            <button className='button-primary supportSec1__btn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
