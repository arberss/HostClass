import React from 'react';
import photo3 from '../../../../assets/img/components/Features/photo3.webp';
import ImgStar from '../../../../assets/img/components/Features/img-star.png';
import person1 from '../../../../assets/img/components/Features/person1.png';
import person2 from '../../../../assets/img/components/Features/person2.png';
import { ReactComponent as IconPerson } from '../../../../assets/img/components/Features/icon-person.svg';

import { FormattedMessage } from 'react-intl';

function Section7() {
  return (
    <section className='section7'>
      <div className='container-middle'>
        <div className='section7__content'>
          <div className='left'>
            <div className='left__img'>
              <img src={photo3} alt='' className='left__image' />
              {/* client */}
              <div
                className='left__clients left__clients--one'
                data-aos='flip-up'
                data-aos-duration='800'
              >
                <div className='left__title'>
                  "<FormattedMessage id='featuresSec7Img1' />"
                </div>
                <img src={ImgStar} alt='' className='left__star' />
                <div className='left__name'>Alex - Professor</div>
              </div>
              {/* client */}
              {/* client */}
              <div
                className='left__clients left__clients--two'
                data-aos='flip-down'
                data-aos-duration='1000'
              >
                <div className='left__flx'>
                  <IconPerson className='left__icon' />
                  <div className='left__stats'>
                    <div className='left__number'>15000+</div>
                    <div className='left__txt'>
                      <FormattedMessage id='featuresSec7Img3' />
                    </div>
                  </div>
                </div>
              </div>
              {/* client */}
              {/* client */}
              <div
                className='left__clients left__clients--three'
                data-aos='flip-right'
                data-aos-duration='1200'
              >
                <div className='left__title'>
                  "<FormattedMessage id='featuresSec7Img2' />"
                </div>
                <div className='left__name left__name--three'>
                  Mikel - Student
                </div>
              </div>
              {/* client */}
              <img
                src={person1}
                alt=''
                className='left__personimg left__personimg--one'
                data-aos='slide-left'
                data-aos-duration='1000'
              />
              <img
                src={person2}
                alt=''
                className='left__personimg left__personimg--two'
                data-aos='slide-right'
                data-aos-duration='1400'
              />
            </div>
          </div>

          <div className='right'>
            <div className='right__title'>
              <FormattedMessage id='featuresSec7Title' />
            </div>
            <div className='right__text text-primary'>
              <FormattedMessage id='featuresSec7Text' />
            </div>
            <button className='right__button button-primary-hover'>
              <FormattedMessage id='buttonSignUpFree' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section7;
