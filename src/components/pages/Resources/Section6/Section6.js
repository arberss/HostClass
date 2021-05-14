import React from 'react';

import { ReactComponent as CloudUsers } from '../../../../assets/img/components/Landing/cloudusers.svg';
import image1 from '../../../../assets/img/components/Resources/image1.webp';

function Section6() {
  return (
    <section className='resourcesSec6'>
      <div className='container-middle'>
        <div className='resourcesSec6__content'>
          <div className='resourcesSec6__left'>
            <div className='resourcesSec6__title'>
              See what HostClass consists of
            </div>
            <div className='resourcesSec6__text'>
              Technical documentation is the foundational information about the
              underlying architecture, materials, and process for interfacing
              with, or building on top of, existing technology. Have a look at
              the technical documentation of HostClass that outlines explanation
              of the libraries, integrations, and dependencies of the SDK.
            </div>
            <div className='resourcesSec6__button'>
              <button className='resourcesSec6__btn button-primary'>
                Read More
              </button>
            </div>
          </div>
          <div className='resourcesSec6__right'>
            <div className='resourcesSec6__image'>
              <img src={image1} alt='' className='resourcesSec6__img' />

              <div
                className='lesson resourcesSec6__lsn'
                data-aos='flip-right'
                data-aos-duration='800'
              >
                <div className='lesson__top resourcesSec6__top'>
                  <CloudUsers className='resourcesSec6__icn' />
                  <div className='lesson__lines'>
                    <div className='lesson__line lesson__line--line1'></div>
                    <div className='lesson__line lesson__line--line2'></div>
                  </div>
                </div>
                <div className='lesson__hr'></div>
                <div className='lesson__bottom'>
                  <div className='lesson__bottom--title'>
                    HostClass Documentation
                  </div>
                  <div className='lesson__lines'>
                    <div className='lesson__line lesson__line--line3'></div>
                    <div className='lesson__line lesson__line--line4'></div>
                    <div className='lesson__line lesson__line--line5'></div>
                    <div className='lesson__line lesson__line--line3'></div>
                  </div>
                  <button className='lesson__button button-unstyled'>
                    Read
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section6;
