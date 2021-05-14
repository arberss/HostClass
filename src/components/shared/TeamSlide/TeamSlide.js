import React from 'react';

import Slider from 'react-slick';

import { BsArrowRight } from 'react-icons/bs';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

// slide arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <RiArrowRightSLine className='card__icn' />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <RiArrowLeftSLine className='card__icn' />
    </div>
  );
}
// slide arrows

function TeamSlide({ title, icon, teamName, dataArray }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1260,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='teamSlide'>
      {/* <div className='container-middle-small'> */}
      <div className='teamSlide__title'>{title || ''}</div>
      {icon}
      <div className='teamSlide__teamName'>{teamName}</div>

      <div className='teamSlide__content'>
        <Slider {...settings}>
          {dataArray &&
            dataArray.map((item, i) => {
              const { job, name, img } = item;
              return (
                <div className='card' key={i}>
                  <div className='card__top'>
                    <div className='card__job'>{job}</div>
                    <div className='card__name'>{name}</div>
                  </div>
                  <img src={img} alt='' className='card__img' />
                  <div className='card__bottom'>
                    <div className='card__read'>Read Bio</div>
                    <BsArrowRight className='card__icon' />
                  </div>
                </div>
              );
            })}
        </Slider>
      </div>
      {/* </div> */}
    </div>
  );
}

export default TeamSlide;
