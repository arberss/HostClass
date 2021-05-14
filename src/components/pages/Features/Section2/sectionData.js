import { ReactComponent as IconDesktop } from '../../../../assets/img/components/Features/icon-desktop.svg';
import { ReactComponent as IconTablet } from '../../../../assets/img/components/Features/icon-tablet.svg';
import { ReactComponent as IconMobile } from '../../../../assets/img/components/Features/icon-mobile.svg';

import { FormattedMessage } from 'react-intl';

export const resourcesData = [
  {
    id: 1,
    icon: <IconDesktop className='card__icon section2__icon1' />,
    title: <FormattedMessage id='featuresHostCart1Title' />,
    text: <FormattedMessage id='featuresHostCart1Text' />,
    aos: 'fade-up',
    aosEasing: 'ease-in-out',
  },
  {
    id: 2,
    icon: <IconTablet className='card__icon' />,
    title: <FormattedMessage id='featuresHostCart2Title' />,
    text: <FormattedMessage id='featuresHostCart2Text' />,
    aosEasing: 'ease-in-quad',
  },
  {
    id: 3,
    icon: <IconMobile className='card__icon section2__icon3' />,
    title: <FormattedMessage id='featuresHostCart3Title' />,
    text: <FormattedMessage id='featuresHostCart3Text' />,
    aos: 'fade-up',
    aosEasing: 'ease-in-out-cubic',
  },
];
