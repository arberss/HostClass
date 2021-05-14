import React from 'react';
import { onlineData1, onlineData2 } from './sectionData';

import { ReactComponent as CloudUsers } from '../../../../assets/img/components/Landing/cloudusers.svg';
import mobCoverIn from '../../../../assets/img/components/Landing/mobCoverIn.webp';

import avatar1 from '../../../../assets/img/components/Features/avatar1.png';
import avatar2 from '../../../../assets/img/components/Features/avatar2.png';

import { FormattedMessage } from 'react-intl';

function Section4() {
  return (
    <section className='section4'>
      <div className='container'>
        <div className='online__title heading-secondary'>
          <FormattedMessage id='featuresSec4Title' />
        </div>
        <div className='online'>
          <div className='section4__left'>
            <div className='cards'>
              {onlineData1 &&
                onlineData1.map((item, i) => {
                  const { id, icon, title, text, aos } = item;
                  return (
                    <div
                      className='cards__card'
                      key={id}
                      data-aos={aos}
                      data-aos-duration={i * 200}
                    >
                      <div className='cards__icon'>{icon}</div>
                      <div className='cards__content'>
                        <div className='cards__title'>{title}</div>
                        <div className='cards__text'>{text}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className='cards'>
              {onlineData2 &&
                onlineData2.map((item, i) => {
                  const { id, icon, title, text, aos } = item;
                  return (
                    <div
                      className='cards__card'
                      key={id}
                      data-aos={aos}
                      data-aos-duration={i * 800}
                    >
                      <div className='cards__icon'>{icon}</div>
                      <div className='cards__content'>
                        <div className='cards__title'>{title}</div>
                        <div className='cards__text'>{text}</div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className='section4__right'>
            <div className='left'>
              <div className='left__mob'>
                <div className='left__middle'>
                  <CloudUsers className='left__middle--icon' />
                  <div className='left__middle--text'>HostClass</div>
                </div>
                <div className='left__bottom'>
                  <img src={mobCoverIn} alt='' className='left__bottom--img' />
                </div>

                <div className='lesson'>
                  <div className='lesson__bottom'>
                    <div className='lesson__bottomtitle'>
                      <div className='lesson__bottom--title'>
                        New Assignment added!
                      </div>
                      <div className='lesson__bottom--img'>
                        <img
                          src={avatar1}
                          alt=''
                          className='lesson__bottom--img1'
                        />
                        <img
                          src={avatar2}
                          alt=''
                          className='lesson__bottom--img2'
                        />
                      </div>
                    </div>
                    <div className='lesson__lines'>
                      <div className='lesson__line lesson__line--line3'></div>
                      <div className='lesson__line lesson__line--line4'></div>
                      <div className='lesson__line lesson__line--line5'></div>
                      <div className='lesson__line lesson__line--line3'></div>
                    </div>
                    <button className='lesson__button button-unstyled'>
                      Share
                    </button>
                  </div>
                  <div className='lesson__hr'></div>
                  <div className='lesson__top'>
                    <img src={avatar1} alt='' className='lesson__top--img' />
                    <div className='lesson__lines'>
                      <div className='lesson__line lesson__line--line1'></div>
                      <div className='lesson__line lesson__line--line2'></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
