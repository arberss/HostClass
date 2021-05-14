import React from 'react';
import Online from './Online';
import Universites from './Universites';

function Companies() {
  return (
    <section className='companies'>
      <div className='container-middle'>
        <Universites />
        <Online />
      </div>
    </section>
  );
}

export default Companies;
