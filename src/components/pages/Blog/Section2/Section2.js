import React from 'react';

import { GoLightBulb } from 'react-icons/go';
import { AiOutlineSearch, AiOutlineClockCircle } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import { ReactComponent as Icon1 } from '../../../../assets/img/components/Blog/icon1.svg';
import { ReactComponent as Icon2 } from '../../../../assets/img/components/Blog/icon2.svg';
import { ReactComponent as Icon3 } from '../../../../assets/img/components/Blog/icon3.svg';
import { ReactComponent as Icon4 } from '../../../../assets/img/components/Blog/icon4.svg';
import { ReactComponent as Icon5 } from '../../../../assets/img/components/Blog/icon5.svg';

import { ReactComponent as Fb } from '../../../../assets/img/components/Blog/fb.svg';
import { ReactComponent as In } from '../../../../assets/img/components/Blog/in.svg';
import { ReactComponent as Insta } from '../../../../assets/img/components/Blog/insta.svg';
import { ReactComponent as Twit } from '../../../../assets/img/components/Blog/twit.svg';

import image1 from '../../../../assets/img/components/Blog/image1.png';
import image2 from '../../../../assets/img/components/Blog/image2.png';
import image3 from '../../../../assets/img/components/Blog/image3.png';
import image4 from '../../../../assets/img/components/Blog/image4.png';
import image5 from '../../../../assets/img/components/Blog/image5.png';
import image6 from '../../../../assets/img/components/Blog/image6.png';

import img1 from '../../../../assets/img/components/Blog/img1.png';
import img2 from '../../../../assets/img/components/Blog/img2.png';
import img3 from '../../../../assets/img/components/Blog/img3.png';
import img4 from '../../../../assets/img/components/Blog/img4.png';
import img5 from '../../../../assets/img/components/Blog/img5.png';

function Section2() {
  return (
    <section className='blogSec2'>
      <div className='container-middle'>
        {/* boxes */}
        <div className='blogSec2__boxes'>
          <div className='blogSec2__box blogSec2__box--1 blogSec2__box--active'>
            <Icon2 className='blogSec2__icon' />
            <div className='blogSec2__name'>All</div>
          </div>

          <div className='blogSec2__box blogSec2__box--2'>
            <Icon4 className='blogSec2__icon' />
            <div className='blogSec2__name'>Tips</div>
          </div>

          <div className='blogSec2__box blogSec2__box--3'>
            <Icon3 className='blogSec2__icon' />
            <div className='blogSec2__name'>Education</div>
          </div>

          <div className='blogSec2__box blogSec2__box--4'>
            <Icon1 className='blogSec2__icon' />
            <div className='blogSec2__name'>Community</div>
          </div>

          <div className='blogSec2__box blogSec2__box--5'>
            <Icon5 className='blogSec2__icon' />
            <div className='blogSec2__name'>News</div>
          </div>
        </div>
        {/* boxes */}

        {/* grid */}
        <div className='grid'>
          <div className='left'>
            <div className='left__inputbox'>
              <input type='text' className='left__input' placeholder='Search' />
              <AiOutlineSearch className='left__icon' />
            </div>

            <div className='topBox'>
              <div className='topBox__toptitle'>Top Posts</div>
              <div className='topBox__content'>
                {/* box */}
                <div className='topBox__box'>
                  <img src={img1} alt='' className='topBox__img' />
                  <div className='topBox__right'>
                    <div className='topBox__title'>
                      Student Access to Technology
                    </div>
                    <div className='topBox__text'>
                      Learn how schools are using data to enhance their student
                      services.
                    </div>
                    <div className='topBox__bottom'>
                      <div className='topBox__name'>Colton. A</div>
                      <div className='topBox__time'>1 day ago</div>
                    </div>
                  </div>
                </div>
                {/* box */}
                {/* box */}
                <div className='topBox__box'>
                  <img src={img2} alt='' className='topBox__img' />
                  <div className='topBox__right'>
                    <div className='topBox__title'>
                      Virtual learning helps students learn job-based skills.
                    </div>
                    <div className='topBox__text'>
                      Besides having a flexible schedule
                    </div>
                    <div className='topBox__bottom'>
                      <div className='topBox__name'>Colton. A</div>
                      <div className='topBox__time'>1 day ago</div>
                    </div>
                  </div>
                </div>
                {/* box */}
                {/* box */}
                <div className='topBox__box'>
                  <img src={img3} alt='' className='topBox__img' />
                  <div className='topBox__right'>
                    <div className='topBox__title'>
                      Solutions for Learning Challenges
                    </div>
                    <div className='topBox__text'>
                      The second phase of a great natio-
                    </div>
                    <div className='topBox__bottom'>
                      <div className='topBox__name'>Colton. A</div>
                      <div className='topBox__time'>1 day ago</div>
                    </div>
                  </div>
                </div>
                {/* box */}
                {/* box */}
                <div className='topBox__box'>
                  <img src={img4} alt='' className='topBox__img' />
                  <div className='topBox__right'>
                    <div className='topBox__title'>
                      Enhancing Student Achievement
                    </div>
                    <div className='topBox__text'>
                      Learn how schools are using data
                    </div>
                    <div className='topBox__bottom'>
                      <div className='topBox__name'>Colton. A</div>
                      <div className='topBox__time'>1 day ago</div>
                    </div>
                  </div>
                </div>
                {/* box */}
                {/* box */}
                <div className='topBox__box'>
                  <img src={img5} alt='' className='topBox__img' />
                  <div className='topBox__right'>
                    <div className='topBox__title'>Distance Learning</div>
                    <div className='topBox__text'>
                      Learn how schools are using data to enhance their student
                      services.
                    </div>
                    <div className='topBox__bottom'>
                      <div className='topBox__name'>Colton. A</div>
                      <div className='topBox__time'>1 day ago</div>
                    </div>
                  </div>
                </div>
                {/* box */}
              </div>
            </div>

            <div className='left__socials'>
              <div className='left__social'>Socials</div>
              <a
                href='https://www.facebook.com'
                className='left__media'
                target='_blank'
                rel='noreferrer'
              >
                <Fb className='left__icn' />
              </a>
              <a
                href='https://www.instagram.com/'
                ta
                className='left__media'
                target='_blank'
                rel='noreferrer'
              >
                <Insta className='left__icn' />
              </a>
              <a
                href='https://www.twitter.com/'
                t
                className='left__media'
                arget='_blank'
                rel='noreferrer'
              >
                <Twit className='left__icn' />
              </a>
              <a
                href='https://www.linkedin.com/'
                className='left__media'
                target='_blank'
                rel='noreferrer'
              >
                <In className='left__icn' />
              </a>
            </div>

            <div className='left__blue'>
              <div className='left__blueTitle'>Learn Better Together</div>
              <div className='left__blueText'>
                HostClass combines all of the essential tools for assignments,
                feedback and communication in one easy-to-use app. This means
                less time spent struggling with your tech setup, and more time
                for teaching and learning.
              </div>
              <button className='left__blueBtn'>Join for Free</button>
            </div>
          </div>
          <div className='right'>
            <div className='right__content'>
              {/* card */}
              <div className='right__card'>
                <div className='right__image'>
                  <div className='right__image'>
                    <img src={image1} alt='' className='right__img' />
                    <div className='right__more'>
                      Read More <BsArrowRight className='right__iconarrow' />
                    </div>
                  </div>
                  <div className='right__more'>
                    Read More <BsArrowRight className='right__iconarrow' />
                  </div>
                </div>
                <div className='right__bottom'>
                  <div className='right__smallname'>Tips</div>
                  <div className='right__name'>Student Engagement</div>
                  <div className='right__text'>
                    Learn how schools are using data to enhance their student
                    services. Having this level of insight is more important
                    than ever.  We discuss how to access student activity data
                    and reports that may already be free for your institution.
                  </div>
                  <div className='right__info'>
                    <div className='right__person'>Colton, 3 days ago</div>
                    <div className='right__time'>
                      <FaRegComment className='right__icon' /> 1
                      <span className='right__line'>|</span>
                      <AiOutlineClockCircle className='right__icon' /> 3 mins
                      read
                    </div>
                  </div>
                </div>
              </div>
              {/* card */}
              {/* card */}
              <div className='right__card'>
                <div className='right__image'>
                  <div className='right__image'>
                    <img src={image2} alt='' className='right__img' />
                    <div className='right__more'>
                      Read More <BsArrowRight className='right__iconarrow' />
                    </div>
                  </div>
                  <div className='right__more'>
                    Read More <BsArrowRight className='right__iconarrow' />
                  </div>
                </div>
                <div className='right__bottom'>
                  <div className='right__smallname'>EDUCATION</div>
                  <div className='right__name'>
                    What Assessment Looks Like in a Blended Learning Environment
                  </div>
                  <div className='right__text'>
                    The way we learn has changed drastically due to the world’s
                    current climate. We have gone from virtual to hybrid to a
                    myriad of face-to-face models to mirror the traditional K-12
                    classroom. This has not only changed what schools look like.
                  </div>
                  <div className='right__info'>
                    <div className='right__person'>Smith, 1 day ago</div>
                    <div className='right__time'>
                      <FaRegComment className='right__icon' /> 1
                      <span className='right__line'>|</span>
                      <AiOutlineClockCircle className='right__icon' /> 5 mins
                      read
                    </div>
                  </div>
                </div>
              </div>
              {/* card */}
              {/* card */}
              <div className='right__card'>
                <div className='right__image'>
                  <img src={image3} alt='' className='right__img' />
                  <div className='right__more'>
                    Read More <BsArrowRight className='right__iconarrow' />
                  </div>
                </div>
                <div className='right__bottom'>
                  <div className='right__smallname'>COMMUNITY</div>
                  <div className='right__name'>
                    7 Principles of Effective Distance Learning
                  </div>
                  <div className='right__text'>
                    A few weeks ago, Glen Irvin, Instructional Coach at Sauk
                    Rapids-Rice Public Schools, was generous enough to spend an
                    hour talking about how his district created a distance
                    learning plan for their students.
                  </div>
                  <div className='right__info'>
                    <div className='right__person'>Johnson, 1 week ago</div>
                    <div className='right__time'>
                      <FaRegComment className='right__icon' /> 1
                      <span className='right__line'>|</span>
                      <AiOutlineClockCircle className='right__icon' /> 4 mins
                      read
                    </div>
                  </div>
                </div>
              </div>
              {/* card */}
              {/* card */}
              <div className='right__card'>
                <div className='right__image'>
                  <img src={image4} alt='' className='right__img' />
                  <div className='right__more'>
                    Read More <BsArrowRight className='right__iconarrow' />
                  </div>
                </div>
                <div className='right__bottom'>
                  <div className='right__smallname'>Tips</div>
                  <div className='right__name'>
                    Video Conferencing Safety and Security Tips for Teachers and
                    Students
                  </div>
                  <div className='right__text'>
                    Videoconferencing has become one of the most popular forms
                    of communication this year, especially in education. As
                    teachers, we want to have those face-to-face conversations
                    with our students.
                  </div>
                  <div className='right__info'>
                    <div className='right__person'>Brown, 1 day ago</div>
                    <div className='right__time'>
                      <FaRegComment className='right__icon' /> 1
                      <span className='right__line'>|</span>
                      <AiOutlineClockCircle className='right__icon' /> 2 mins
                      read
                    </div>
                  </div>
                </div>
              </div>
              {/* card */}
              {/* card */}
              <div className='right__card'>
                <div className='right__image'>
                  <img src={image5} alt='' className='right__img' />
                  <div className='right__more'>
                    Read More <BsArrowRight className='right__iconarrow' />
                  </div>
                </div>
                <div className='right__bottom'>
                  <div className='right__smallname'>NEWS</div>
                  <div className='right__name'>
                    10 Productivity Tools for Educators That Give You Back Your
                    Time
                  </div>
                  <div className='right__text'>
                    Educators have more to do than ever before. With increasing
                    demands for paperwork, testing, curriculum implementation,
                    and more, it's crucial to use your time wisely.
                  </div>
                  <div className='right__info'>
                    <div className='right__person'>Charles, 2 weeks ago</div>
                    <div className='right__time'>
                      <FaRegComment className='right__icon' /> 1
                      <span className='right__line'>|</span>
                      <AiOutlineClockCircle className='right__icon' /> 10 mins
                      read
                    </div>
                  </div>
                </div>
              </div>
              {/* card */}
              {/* card */}
              <div className='right__card'>
                <div className='right__image'>
                  <img src={image6} alt='' className='right__img' />
                  <div className='right__more'>
                    Read More <BsArrowRight className='right__iconarrow' />
                  </div>
                </div>
                <div className='right__bottom'>
                  <div className='right__smallname'>EDUCATION</div>
                  <div className='right__name'>
                    4 Ways Virtual Learning Creates Future-Ready Students
                  </div>
                  <div className='right__text'>
                    Whether by necessity or choice, more students are turning to
                    virtual learning. For many, it’s been an option for several
                    years, but the number of students who utilize virtual
                    learning continues to rise in light of our current
                    situation.
                  </div>
                  <div className='right__info'>
                    <div className='right__person'>Cole, 3 weeks ago</div>
                    <div className='right__time'>
                      <FaRegComment className='right__icon' /> 1
                      <span className='right__line'>|</span>
                      <AiOutlineClockCircle className='right__icon' /> 5 mins
                      read
                    </div>
                  </div>
                </div>
              </div>
              {/* card */}
            </div>
            <ul className='right__paginations'>
              <li className='right__pagination'>
                <MdKeyboardArrowLeft />
              </li>

              <li className='right__pagination'>1</li>
              <li className='right__pagination'>2</li>
              <li className='right__pagination'>3</li>
              <li className='right__pagination'>...</li>
              <li className='right__pagination'>12</li>

              <li className='right__pagination'>
                <MdKeyboardArrowRight />
              </li>
            </ul>
          </div>
        </div>
        {/* grid */}
      </div>
    </section>
  );
}

export default Section2;
