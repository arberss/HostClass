import React from 'react';
import Header from '../../shared/Header/index';
import Footer from '../../shared/Footer/Footer';
import Subscribe from '../../shared/Subscribe/Subscribe';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import TeamSlide from '../../shared/TeamSlide/TeamSlide';

import Testimional from '../Landing/Testimonials/Testimional';

import { slide1 } from './slidesData';

import { ReactComponent as Megaphone } from '../../../assets/img/components/About/megaphone.svg';
import { ReactComponent as IconDev } from '../../../assets/img/components/About/icon-dev.svg';
import { ReactComponent as Uniform } from '../../../assets/img/components/About/uniform.svg';
import SmallBanner from '../../shared/SmallBanner/SmallBanner';

import banner1 from '../../../assets/img/components/About/banner1.webp';
import banner2 from '../../../assets/img/components/About/banner2.webp';
import banner3 from '../../../assets/img/components/About/banner3.webp';

import { FiArrowRightCircle } from 'react-icons/fi';

const banner = {
  text1:
    'We build tools to help teachers and students everywhere be more creative and productive in the paperless classroom.',
  imgHeight1: 40,
  text2:
    'As creators and supporters of education technology, we’re proud to work together on something we love.',
  imgHeight2: 35,
  text3: 'Be part of something great. View our career oportunites.',
  imgHeight3: 25,
  icon3: <FiArrowRightCircle className='smallBanner__icon' />,
};

function About() {
  return (
    <main>
      <Header>
        <Section1 />
      </Header>
      <Section2 />
      <TeamSlide
        title={'Our Team'}
        icon={<Megaphone className='teamSlide__icon' />}
        teamName={'Lidership'}
        dataArray={slide1}
      />
      <SmallBanner
        text={banner.text1}
        img={banner1}
        imgHeight={banner.imgHeight1}
      />
      <TeamSlide
        icon={<IconDev className='teamSlide__icon' />}
        teamName={'DEVELOPMENT & PRODUCT'}
        dataArray={slide1}
      />
      <SmallBanner
        text={banner.text2}
        img={banner2}
        imgHeight={banner.imgHeight2}
      />
      <TeamSlide
        icon={<Uniform className='teamSlide__icon' />}
        teamName={'CUSTOMER SUPPORT, SALES & MARKETING'}
        dataArray={slide1}
      />
      <SmallBanner
        text={banner.text3}
        img={banner3}
        imgHeight={banner.imgHeight3}
        icon={banner.icon3}
      />
      <Testimional slideClass={'supportSec3'} />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default About;
