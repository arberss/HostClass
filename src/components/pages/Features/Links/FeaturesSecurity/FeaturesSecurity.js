import React from 'react';

import Header from '../../../../shared/Header/index';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';

import Subscribe from '../../../../shared/Subscribe/Subscribe';
import Footer from '../../../../shared/Footer/Footer';

function FeaturesSecurity() {
  return (
    <main>
      <Header>
        <Section1 />
      </Header>
      <Section2 />
      <Section3 />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default FeaturesSecurity;