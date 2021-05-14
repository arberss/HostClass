import { RiArrowLeftSLine } from 'react-icons/ri';
import { RiArrowRightSLine } from 'react-icons/ri';

import marketing from '../../../assets/img/components/Signup/viral-marketing.png';
import chat from '../../../assets/img/components/Signup/video-chat.png';
import chart from '../../../assets/img/components/Signup/line-chart.png';
import cooperation from '../../../assets/img/components/Signup/cooperation.png';

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

export const settings = {
  infinite: false,
  dots: true,
  slidesToShow: 1,
  speed: 500,
  rows: 2,
  slidesPerRow: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1110,
      settings: {
        slidesToShow: 1,
        rows: 1,
        slidesPerRow: 2,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1.5,
        rows: 2,
        slidesPerRow: 2,
      },
    },
    {
      breakpoint: 839,
      settings: {
        slidesToShow: 1,
        rows: 2,
        slidesPerRow: 2,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        rows: 1,
        slidesPerRow: 1,
      },
    },
  ],
};

export const slideData = [
  {
    id: 1,
    image: marketing,
    title: <FormattedMessage id='featuresLearningSec1Title' />,
  },
  {
    id: 2,
    image: chart,
    title: <FormattedMessage id='featuresAlayticsTitleTop' />,
  },
  {
    id: 3,
    image: cooperation,
    title: <FormattedMessage id='featuresCollabSec1TitleTop' />,
  },
  {
    id: 4,
    image: chat,
    title: <FormattedMessage id='featuresConfSec1TitleTop' />,
  },

  {
    id: 5,
    image: marketing,
    title: <FormattedMessage id='featuresLearningSec1Title' />,
  },
  {
    id: 6,
    image: chart,
    title: <FormattedMessage id='featuresAlayticsTitleTop' />,
  },
  {
    id: 7,
    image: cooperation,
    title: <FormattedMessage id='featuresCollabSec1TitleTop' />,
  },
  {
    id: 8,
    image: chat,
    title: <FormattedMessage id='featuresConfSec1TitleTop' />,
  },

  {
    id: 9,
    image: marketing,
    title: <FormattedMessage id='featuresLearningSec1Title' />,
  },
  {
    id: 10,
    image: chart,
    title: <FormattedMessage id='featuresAlayticsTitleTop' />,
  },
  {
    id: 11,
    image: cooperation,
    title: <FormattedMessage id='featuresCollabSec1TitleTop' />,
  },
  {
    id: 12,
    image: chat,
    title: <FormattedMessage id='featuresConfSec1TitleTop' />,
  },
];
