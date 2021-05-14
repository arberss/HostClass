import React from 'react';
import Slider from 'react-slick';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';
import julian from '../../../../assets/img/components/Landing/julian.png';
import michal from '../../../../assets/img/components/Landing/michal.png';
import meritt from '../../../../assets/img/components/Landing/meritt.png';

import { FormattedMessage } from 'react-intl';

// slide arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <RiArrowRightSLine className='slide__icon' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <RiArrowLeftSLine className='slide__icon' />
    </div>
  );
}
// slide arrows

//component
function Testimional({ slideClass }) {
  const settings = {
    infinite: false,
    slidesToShow: 2.5,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className={'testimionals ' + slideClass}>
      <div className='container-second'>
        <div className='testimionals__content'>
          <div className='testimionals__smalltext'>
            <FormattedMessage id='testimionals' />
          </div>
          <div className='testimionals__title heading-primary'>
            <FormattedMessage id='testimionalTitle' />
          </div>
          <Slider className='slide' {...settings}>
            {/* slide */}
            <div className='slide__card'>
              <div className='slide__title'>
                <FormattedMessage id='testimionalPersonTitle' />
              </div>
              <div className='slide__line'></div>
              <div className='slide__footer'>
                <img src={michal} alt='' className='slide__img' />
                <div className='slide__personinfo'>
                  <div className='slide__name'>Jose Barnet</div>
                  <div className='slide__uni'>Stetson University</div>
                </div>
              </div>
            </div>
            {/* slide */}
            {/* slide */}
            <div className='slide__card'>
              <div className='slide__title'>
                <FormattedMessage id='testimionalPersonTitle' />
              </div>
              <div className='slide__line'></div>
              <div className='slide__footer'>
                <img src={julian} alt='' className='slide__img' />
                <div className='slide__personinfo'>
                  <div className='slide__name'>Jose Barnet</div>
                  <div className='slide__uni'>Student</div>
                </div>
              </div>
            </div>
            {/* slide */}
            {/* slide */}
            <div className='slide__card'>
              <div className='slide__title'>
                <FormattedMessage id='testimionalPersonTitle' />
              </div>
              <div className='slide__line'></div>
              <div className='slide__footer'>
                <img src={meritt} alt='' className='slide__img' />
                <div className='slide__personinfo'>
                  <div className='slide__name'>Jose Barnet</div>
                  <div className='slide__uni'>Stetson University</div>
                </div>
              </div>
            </div>
            {/* slide */}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimional;
