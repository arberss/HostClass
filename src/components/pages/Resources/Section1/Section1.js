import React from 'react';
import LayoutPhoto from '../../../../layouts/LayoutPhoto';

function Section1() {
  return (
    <div className='content resourcesSec1 sec1NoScroll'>
      <LayoutPhoto
        container={'container-second'}
        imageClass={'resourcesSec1__photo'}
        sectionClass={'classroom'}
        paddingSide={'right'}
      >
        {/* <div className='content__photo'>
  </div>
  <div className='container-second content__data'>
    <div className='classroom'> */}
        <div className='classroom__text' data-aos='zoom-out-right'>
          <h1 className='classroom__title heading-primary'>
            Get the most out of HostClass
          </h1>
          <p className='text-primary'>
            Use our helpful resources to learn more about HostClass. Thousands
            of educator have approved that by integrating HostClass they have
            sparked creativity and enabled unlimited opportunities for learning.
          </p>
        </div>
        {/* </div>
  </div> */}
      </LayoutPhoto>
    </div>
  );
}

export default Section1;
