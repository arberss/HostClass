import { ReactComponent as IconComment } from '../../../../assets/img/components/Features/icon-comment.svg';
import { ReactComponent as IconEmpty } from '../../../../assets/img/components/Features/icon-empty.svg';
import { ReactComponent as IconFile } from '../../../../assets/img/components/Features/icon-file.svg';
import { ReactComponent as IconFolder } from '../../../../assets/img/components/Features/icon-folder.svg';
import { ReactComponent as IconImage } from '../../../../assets/img/components/Features/icon-image.svg';
import { ReactComponent as IconShare } from '../../../../assets/img/components/Features/icon-share.svg';

import { FormattedMessage } from 'react-intl';

export const onlineData1 = [
  {
    id: 1,
    icon: <IconShare className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresSec4Card1Title' />,
    text: <FormattedMessage id='featuresSec4Card1Text' />,
    aos: 'slide-left',
  },
  {
    id: 2,
    icon: <IconEmpty className='cards__icn' />,
    title: <FormattedMessage id='featuresSec4Card2Title' />,
    text: <FormattedMessage id='featuresSec4Card2Text' />,
    aos: 'slide-left',
  },
  {
    id: 3,
    icon: <IconComment className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresSec4Card3Title' />,
    text: <FormattedMessage id='featuresSec4Card3Text' />,
    aos: 'slide-left',
  },
];

export const onlineData2 = [
  {
    id: 1,
    icon: <IconFolder className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresSec4Card4Title' />,
    text: <FormattedMessage id='featuresSec4Card4Text' />,
    aos: 'slide-right',
  },
  {
    id: 2,
    icon: <IconImage className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresSec4Card5Title' />,
    text: <FormattedMessage id='featuresSec4Card5Text' />,
    aos: 'slide-right',
  },
  {
    id: 3,
    icon: <IconFile className='cards__icn cards__icn--1' />,
    title: <FormattedMessage id='featuresSec4Card6Title' />,
    text: <FormattedMessage id='featuresSec4Card6Text' />,
    aos: 'slide-right',
  },
];
