import React from 'react';
import Header from '../../shared/Header';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';
import Section3 from './Section3/Section3';
import Section4 from './Section4/Section4';
import Section5 from './Section5/Section5';
import Subscribe from '../../shared/Subscribe/Subscribe';
import Footer from '../../shared/Footer/Footer';

function Pricing() {
  return (
    <main>
      <Header>
        <Section1 />
      </Header>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default Pricing;
