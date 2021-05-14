import React from 'react';
import Section1 from './Section1/Section1';

import Header from '../../shared/Header';
import Universites from '../Landing/Companies/Universites';
import Section4 from '../Pricing/Section4/Section4';
import Subscribe from '../../shared/Subscribe/Subscribe';
import Footer from '../../shared/Footer/Footer';
import Section2 from './Section2/Section2';

function Partners() {
  return (
    <main>
      <Header>
        <Section1 />
      </Header>
      <Section2 />
      <Section4 />
      <div className='container-middle'>
        <Universites />
      </div>
      <Subscribe />
      <Footer />
    </main>
  );
}

export default Partners;
