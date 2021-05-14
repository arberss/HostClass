import React from 'react';
import DashSideNav from '../DashSideNav/DashSideNav';
import Section1 from './Section1/Section1';
import Section2 from './Section2/Section2';

function Institution() {
  return (
    <main>
      <div className='dashFlex'>
        <DashSideNav />
        <div className='dashFlex__right'>
          <Section1 />
          <Section2 />
        </div>
      </div>
    </main>
  );
}

export default Institution;
