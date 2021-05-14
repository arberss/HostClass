import React from 'react';

import Header from '../../shared/Header/index';
import Subscribe from '../../shared/Subscribe/Subscribe';
import Footer from '../../shared/Footer/Footer';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

function Blog() {
  return (
    <main>
      <Header>
        <Section1 />
      </Header>
      <Section2 />
      <Subscribe />
      <Footer />
    </main>
  );
}

export default Blog;
