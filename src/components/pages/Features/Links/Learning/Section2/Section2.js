import React from 'react';
import photo2 from '../../../../../../assets/img/components/Features/Links/photo2.webp';

import { onlineData1, onlineData2 } from './sectionData';

import { FormattedMessage } from 'react-intl';

function Section2() {
  return (
    <section className='sec2 section4'>
      <div className='container'>
        <div className='sec2__title heading-secondary'>
          <FormattedMessage id='featuresLearningSec2Title' />
        </div>
        <div className='online'>
          <div className='section4__left sec2__left'>
            <div className='cards'>
              {onlineData1 &&
                onlineData1.map((item, i) => {
                  const { id, icon, title, text, aos } = item;
                  return (
                    <div
                      className='cards__card'
                      key={id}
                      data-aos={aos}
                      data-aos-duration={i * 300}
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
                      data-aos-duration={i * 350}
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
                <div className='left__bottom'>
                  <img src={photo2} alt='' className='left__bottom--img' />
                </div>
              </div>

              <div className='lesson'>
                <div className='lesson__bottom'>
                  <div className='lesson__bottomtitle'>
                    <div className='lesson__bottom--title'>
                      New Assignment added!
                    </div>
                  </div>
                  <div className='lesson__lines'>
                    <div className='lesson__line lesson__line--line3'></div>
                    <div className='lesson__line lesson__line--line4'></div>
                    <div className='lesson__line lesson__line--line5'></div>
                  </div>
                  <button className='lesson__button button-unstyled'>
                    View
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

export default Section2;
