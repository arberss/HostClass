import React from 'react';
import Header from '../../shared/Header';

import Subscribe from '../../shared/Subscribe/Subscribe';
import Footer from '../../shared/Footer/Footer';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section5 from '../Pricing/Section5/Section5';
import Testimional from '../Landing/Testimonials/Testimional';

function Support() {
  return (
    <main>
      <Header>
        <Section1 />
      </Header>
      <Section2 />

      <Section5 />
      <Testimional slideClass={'supportSec3'} />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default Support;
