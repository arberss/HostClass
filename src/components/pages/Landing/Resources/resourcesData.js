import { ReactComponent as PdfIcon } from '../../../../assets/img/components/Landing/pdfIcon.svg';
import { ReactComponent as PlayIcon } from '../../../../assets/img/components/Landing/playIcon.svg';
import { ReactComponent as SearchIcon } from '../../../../assets/img/components/Landing/searchIcon.svg';

import { FormattedMessage } from 'react-intl';

export const resourcesData = [
  {
    id: 1,
    icon: <PdfIcon className='card__icon' />,
    title: <FormattedMessage id='resourcesCard1Title' />,
    text: <FormattedMessage id='resourcesCard1Text' />,
    button: <FormattedMessage id='resourcesCard1Button' />,
    aos: 'slide-right',
  },
  {
    id: 2,
    icon: <PlayIcon className='card__icon' />,
    title: <FormattedMessage id='resourcesCard2Title' />,
    text: <FormattedMessage id='resourcesCard2Text' />,
    button: <FormattedMessage id='resourcesCard2Button' />,
    aos: 'slide-up',
  },
  {
    id: 3,
    icon: <SearchIcon className='card__icon' />,
    title: <FormattedMessage id='resourcesCard3Title' />,
    text: <FormattedMessage id='resourcesCard3Text' />,
    button: <FormattedMessage id='resourcesCard3Button' />,
    aos: 'slide-left',
  },
];
