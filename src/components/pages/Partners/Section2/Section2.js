import React from 'react';

import { ReactComponent as IconGuarantee } from '../../../../assets/img/components/Partners/guarantee.svg';
import { ReactComponent as IconSpeaker } from '../../../../assets/img/components/Partners/loud-speaker.svg';

function Section2() {
  return (
    <section className='partnersSec2'>
      <div className='container-middle'>
        <div className='partnersSec2__content'>
          <div className='partnersSec2__box'>
            <div className='partnersSec2__bgicon'>
              <IconGuarantee className='partnersSec2__icon' />
            </div>
            <div className='partnersSec2__title'>Certified Educators</div>
            <div className='partnersSec2__text'>
              The HostClass Certified Educator program is a free and exclusive
              community of educators who have a passion for HostClass, helping
              you to build your skills and fully utilize the features of the
              platform.
            </div>
            <button className='partnersSec2__btn button-primary-hover'>
              Meet our Educators
            </button>
          </div>

          <div className='partnersSec2__box'>
            <div className='partnersSec2__bgicon'>
              <IconSpeaker className='partnersSec2__icon' />
            </div>
            <div className='partnersSec2__title'>Certified Trainers</div>
            <div className='partnersSec2__text'>
              The HostClass Certified Trainer program is a community of advanced
              HostClass Pro users who are dedicated to helping educators make
              the most out of the platform.
            </div>
            <button className='partnersSec2__btn button-primary-hover'>
              Meet our Trainers
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
