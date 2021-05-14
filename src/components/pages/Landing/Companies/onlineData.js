import { ReactComponent as ContentIcon } from '../../../../assets/img/components/Landing/content.svg';
import { ReactComponent as KeyboardIcon } from '../../../../assets/img/components/Landing/keyboard.svg';
import { ReactComponent as UsersIcon } from '../../../../assets/img/components/Landing/users.svg';

import { FormattedMessage } from 'react-intl';

export const onlineData = [
  {
    id: 1,
    icon: <ContentIcon className='cards__icn' />,
    title: <FormattedMessage id='onlineCard1Title' />,
    text: <FormattedMessage id='onlineCard1Text' />,
    aos: 'fade-right',
  },
  {
    id: 2,
    icon: <KeyboardIcon className='cards__icn' />,
    title: <FormattedMessage id='onlineCard2Title' />,
    text: <FormattedMessage id='onlineCard2Text' />,
    aos: 'fade-left',
  },
  {
    id: 3,
    icon: <UsersIcon className='cards__icn2' />,
    title: <FormattedMessage id='onlineCard3Title' />,
    text: <FormattedMessage id='onlineCard3Text' />,
    aos: 'fade-up',
  },
];
