import React from 'react';
import Header from '../../shared/Header/index';
import Classroom from './Classroom/Classroom';
import Together from './Together/Together';
import ToolBanner from './ToolBanner/ToolBanner';
import Companies from './Companies/Companies';
import Resources from './Resources/Resources';
import Testimionals from './Testimonials/Testimionals';
import Plans from './Plans/Plans';
import Subscribe from '../../shared/Subscribe/Subscribe';
import Footer from '../../shared/Footer/Footer';

function Landing() {
  return (
    <main>
      <Header>
        <Classroom />
      </Header>
      <Together />
      <ToolBanner />
      <Companies />
      <Resources />
      <Plans />
      <Testimionals />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default Landing;
