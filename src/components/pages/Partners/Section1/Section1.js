import React from 'react';

import image1 from '../../../../assets/img/components/Partners/img1.png';
import line1 from '../../../../assets/img/components/Partners/line1.png';
import line3 from '../../../../assets/img/components/Partners/line3.png';
import line4 from '../../../../assets/img/components/Partners/line4.png';
import line5 from '../../../../assets/img/components/Partners/line5.png';
import line6 from '../../../../assets/img/components/Partners/line6.png';
import line7 from '../../../../assets/img/components/Partners/line7.png';
import line8 from '../../../../assets/img/components/Partners/line8.png';
import line9 from '../../../../assets/img/components/Partners/line9.png';
import line10 from '../../../../assets/img/components/Partners/line10.png';

import { ReactComponent as Pin } from '../../../../assets/img/components/Partners/pin.svg';

function Section1() {
  return (
    <div className='partnersSec1 sec1Scroll'>
      <div className='container-middle'>
        <div className='partnersSec1__title u-text-center'>
          HostClass Partners
        </div>
        <div className='partnersSec1__image'>
          <img src={image1} alt='' className='partnersSec1__img' />

          <Pin className='partnersSec1__line partnersSec1__line--pin' />

          <img
            src={line1}
            alt=''
            className='partnersSec1__line partnersSec1__line--line1'
          />
          <img
            src={line3}
            alt=''
            className='partnersSec1__line partnersSec1__line--line3'
          />

          <img
            src={line5}
            alt=''
            className='partnersSec1__line partnersSec1__line--line5'
          />
          <img
            src={line6}
            alt=''
            className='partnersSec1__line partnersSec1__line--line6'
          />
          <img
            src={line7}
            alt=''
            className='partnersSec1__line partnersSec1__line--line7'
          />
          <img
            src={line8}
            alt=''
            className='partnersSec1__line partnersSec1__line--line8'
          />
          <img
            src={line9}
            alt=''
            className='partnersSec1__line partnersSec1__line--line9'
          />
          <img
            src={line10}
            alt=''
            className='partnersSec1__line partnersSec1__line--line10'
          />
          <img
            src={line4}
            alt=''
            className='partnersSec1__line partnersSec1__line--line4'
          />
        </div>
      </div>
    </div>
  );
}

export default Section1;
