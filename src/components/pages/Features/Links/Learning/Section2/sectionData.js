import { ReactComponent as IconComments } from '../../../../../../assets/img/components/Features/Links/icon-comments.svg';
import { ReactComponent as IconBadge } from '../../../../../../assets/img/components/Features/Links/icon-badge.svg';
import { ReactComponent as IconFile } from '../../../../../../assets/img/components/Features/Links/icon-file.svg';
import { ReactComponent as IconOutline } from '../../../../../../assets/img/components/Features/Links/icon-outline.svg';
import { ReactComponent as IconUsers } from '../../../../../../assets/img/components/Features/Links/icon-users.svg';
import { ReactComponent as IconGrades } from '../../../../../../assets/img/components/Features/Links/icon-grades.svg';

import { FormattedMessage } from 'react-intl';

export const onlineData1 = [
  {
    id: 1,
    icon: <IconOutline className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresLearningSec2Card1Title' />,
    text: <FormattedMessage id='featuresLearningSec2Card1Text' />,
    aos: 'flip-up',
  },
  {
    id: 2,
    icon: <IconComments className='cards__icn' />,
    title: <FormattedMessage id='featuresLearningSec2Card2Title' />,
    text: <FormattedMessage id='featuresLearningSec2Card2Text' />,
    aos: 'flip-up',
  },
  {
    id: 3,
    icon: <IconUsers className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresLearningSec2Card3Title' />,
    text: <FormattedMessage id='featuresLearningSec2Card3Text' />,
    aos: 'flip-up',
  },
];

export const onlineData2 = [
  {
    id: 1,
    icon: <IconBadge className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresLearningSec2Card4Title' />,
    text: <FormattedMessage id='featuresLearningSec2Card4Text' />,
    aos: 'flip-down',
  },
  {
    id: 2,
    icon: <IconFile className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresLearningSec2Card5Title' />,
    text: <FormattedMessage id='featuresLearningSec2Card5Text' />,
    aos: 'flip-down',
  },
  {
    id: 3,
    icon: <IconGrades className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresLearningSec2Card6Title' />,
    text: <FormattedMessage id='featuresLearningSec2Card6Text' />,
    aos: 'flip-down',
  },
];
