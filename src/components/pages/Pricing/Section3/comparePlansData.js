import { RiFolder5Fill } from 'react-icons/ri';
import { TiMicrophone } from 'react-icons/ti';
import { IoIosChatbubbles } from 'react-icons/io';
import { ImUsers, ImUserCheck } from 'react-icons/im';
import { ReactComponent as IconFolderCorrect } from '../../../../assets/img/components/Pricing/icon-foldercorrect.svg';
import { ReactComponent as IconGb } from '../../../../assets/img/components/Pricing/icon-gb.svg';
import { ReactComponent as IconBag } from '../../../../assets/img/components/Pricing/icon-bag.svg';
import { ReactComponent as IconGrade } from '../../../../assets/img/components/Pricing/icon-grade.svg';
import { FormattedMessage } from 'react-intl';

export const comparePlans = [
  {
    icon: <RiFolder5Fill className='plansSec3__icon' />,
    title: <FormattedMessage id='priceTableTd1' />,
    basic: true,
    pro1: true,
    pro2: true,
  },
  {
    icon: <IconFolderCorrect className='plansSec3__iconsvg' />,
    title: <FormattedMessage id='priceTableTd2' />,
    basic: 10,
    pro1: <FormattedMessage id='priceLimit' />,
    pro2: <FormattedMessage id='priceLimit' />,
  },
  {
    icon: <IconGb className='plansSec3__iconsvg' />,
    title: <FormattedMessage id='priceTableTd3' />,
    basic: '500MB',
    pro1: '5GB',
    pro2: <FormattedMessage id='priceLimit' />,
  },
  {
    icon: <TiMicrophone className='plansSec3__icon' />,
    title: <FormattedMessage id='priceTableTd4' />,
    basic: <FormattedMessage id='priceMinute' />,
    pro1: <FormattedMessage id='priceMinutes' />,
    pro2: <FormattedMessage id='priceMinutes' />,
  },
  {
    icon: <IoIosChatbubbles className='plansSec3__icon' />,
    title: <FormattedMessage id='priceTableTd5' />,
    basic: true,
    pro1: true,
    pro2: true,
  },
  {
    icon: <ImUsers className='plansSec3__icon' />,
    title: <FormattedMessage id='priceTableTd6' />,
    basic: false,
    pro1: true,
    pro2: true,
  },
  {
    icon: <ImUserCheck className='plansSec3__icon' />,
    title: <FormattedMessage id='priceTableTd7' />,
    basic: false,
    pro1: true,
    pro2: true,
  },
  {
    icon: <IconBag className='plansSec3__iconsvg' />,
    title: <FormattedMessage id='priceTableTd8' />,
    basic: false,
    pro1: true,
    pro2: true,
  },
  {
    icon: <IconGrade className='plansSec3__iconsvg' />,
    title: <FormattedMessage id='priceTableTd9' />,
    basic: false,
    pro1: false,
    pro2: true,
  },
];
