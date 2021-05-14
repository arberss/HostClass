import React from 'react';

import image1 from '../../../../assets/img/components/About/image1.png';
import image2 from '../../../../assets/img/components/About/image2.png';

function Section2() {
  return (
    <div className='aboutSec2'>
      <div className='container-middle'>
        <div className='resourcesSec6__content'>
          <div className='resourcesSec6__left'>
            <div className='resourcesSec6__title'>What We Believe</div>
            <div className='resourcesSec6__text aboutSec2__text'>
              {`Education has the power to transform lives and societies. We are
              proud to partner with the global education community and witness
              your endless passion to ensure learners around the world have
              access to a quality education. \n We help you deliver an integrated experience that addresses
              individual needs and helps educators shape each learner’s journey
              to prepare them for the future.`}
            </div>
          </div>
          <div className='resourcesSec6__right'>
            <div className='resourcesSec6__image'>
              <img
                src={image1}
                alt=''
                className='resourcesSec6__img aboutSec2__img'
              />
            </div>
          </div>
        </div>

        <div className='resourcesSec6__content aboutSec2__reverse'>
          <div className='resourcesSec6__left'>
            <div className='resourcesSec6__title'>Our Mission </div>
            <div className='resourcesSec6__text aboutSec2__text'>
              Our mission is to advance learning together with you, the world’s
              education community, so that all learners, educators and
              institutions can realize their goals today and prepare for
              tomorrow.
            </div>
          </div>
          <div className='resourcesSec6__right'>
            <div className='resourcesSec6__image'>
              <img
                src={image2}
                alt=''
                className='resourcesSec6__img aboutSec2__img2'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
