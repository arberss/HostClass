import { FiFileText, FiUserCheck, FiUpload, FiUsers } from 'react-icons/fi';
import { BiComment } from 'react-icons/bi';
import { AiOutlineStar, AiOutlineFile, AiOutlineFileAdd } from 'react-icons/ai';
import { BsCheckCircle, BsClock } from 'react-icons/bs';
import { MdVoicemail, MdDevicesOther } from 'react-icons/md';

import { FormattedMessage } from 'react-intl';

export const plansData = [
  {
    planId: 1,
    badge: <FormattedMessage id='plansBadge1' />,
    price: '15.99',
    month: <FormattedMessage id='plansMonth' />,
    text: <FormattedMessage id='plans1Title' />,
    lists: [
      {
        id: 1,
        logo: <FiFileText className='plans__icons' />,
        text: <FormattedMessage id='plans1Li1' />,
      },
      {
        id: 2,
        logo: <BiComment className='plans__icons' />,
        text: <FormattedMessage id='plans1Li2' />,
      },
      {
        id: 3,
        logo: <FiUserCheck className='plans__icons' />,
        text: <FormattedMessage id='plans1Li3' />,
      },
      {
        id: 4,
        logo: <AiOutlineStar className='plans__icons' />,
        text: <FormattedMessage id='plans1Li4' />,
      },
      {
        id: 5,
        logo: <FiUpload className='plans__icons' />,
        text: <FormattedMessage id='plans1Li5' />,
      },
      {
        id: 6,
        logo: <BsCheckCircle className='plans__icons' />,
        text: <FormattedMessage id='plans1Li6' />,
      },
    ],
    button: <FormattedMessage id='plans1Btn' />,
    aos: 'fade-up-right',
  },
  {
    planId: 2,
    badge: <FormattedMessage id='plansBadge2' />,
    price: <FormattedMessage id='plansPrice2' />,
    month: 'per month',
    text: <FormattedMessage id='plans2Title' />,
    lists: [
      {
        id: 7,
        logo: <FiUsers className='plans__icons' />,
        text: <FormattedMessage id='plans2Li1' />,
      },
      {
        id: 8,
        logo: <AiOutlineFile className='plans__icons' />,
        text: <FormattedMessage id='plans2Li2' />,
      },
      {
        id: 9,
        logo: <MdVoicemail className='plans__icons' />,
        text: <FormattedMessage id='plans2Li3' />,
      },
      {
        id: 10,
        logo: <BsClock className='plans__icons' />,
        text: <FormattedMessage id='plans2Li4' />,
      },
      {
        id: 11,
        logo: <MdDevicesOther className='plans__icons' />,
        text: <FormattedMessage id='plans2Li5' />,
      },
    ],
    button: <FormattedMessage id='plans2Btn' />,
    // aos: 'fade-up',
  },
  {
    planId: 3,
    badge: <FormattedMessage id='plansBadge3' />,
    price: '25.99',
    month: <FormattedMessage id='plansMonth' />,
    text: <FormattedMessage id='plans3Title' />,
    lists: [
      {
        id: 12,
        logo: <FiUsers className='plans__icons' />,
        text: <FormattedMessage id='plans2Li1' />,
      },
      {
        id: 13,
        logo: <AiOutlineFile className='plans__icons' />,
        text: <FormattedMessage id='plans2Li2' />,
      },
      {
        id: 14,
        logo: <MdVoicemail className='plans__icons' />,
        text: <FormattedMessage id='plans2Li3' />,
      },
      {
        id: 15,
        logo: <BsClock className='plans__icons' />,
        text: <FormattedMessage id='plans2Li4' />,
      },
      {
        id: 16,
        logo: <MdDevicesOther className='plans__icons' />,
        text: <FormattedMessage id='plans2Li5' />,
      },
      {
        id: 17,
        logo: <AiOutlineFileAdd className='plans__icons' />,
        text: <FormattedMessage id='plans3Li1' />,
      },
    ],
    button: <FormattedMessage id='plans3Btn' />,
    aos: 'fade-up-left',
  },
];
