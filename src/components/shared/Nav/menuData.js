import { ReactComponent as IconDevice } from '../../../assets/img/shared/Nav/icon-device.svg';
import { ReactComponent as IconExam } from '../../../assets/img/shared/Nav/icon-exam.svg';
import { ReactComponent as IconIdea } from '../../../assets/img/shared/Nav/icon-idea.svg';
import { ReactComponent as IconChart } from '../../../assets/img/shared/Nav/icon-chart.svg';
import { ReactComponent as IconLayer } from '../../../assets/img/shared/Nav/icon-layer.svg';
import { ReactComponent as IconVideochat } from '../../../assets/img/shared/Nav/icon-videochat.svg';

import { ReactComponent as IconBlog } from '../../../assets/img/shared/Nav/icon-blog.svg';
import { ReactComponent as IconChat } from '../../../assets/img/shared/Nav/icon-chat.svg';
import { ReactComponent as IconGraduated } from '../../../assets/img/shared/Nav/icon-graduated.svg';
import { ReactComponent as IconSpeech } from '../../../assets/img/shared/Nav/icon-speech.svg';
import { ReactComponent as IconPaper } from '../../../assets/img/shared/Nav/icon-paper.svg';
import { ReactComponent as IconMarketing } from '../../../assets/img/shared/Nav/icon-marketing.svg';

import { FormattedMessage } from 'react-intl';

export const menuData = {
  features: [
    {
      icon: <IconExam className='dropdown__icon' />,
      title: <FormattedMessage id='featuresLearningSec1Title' />,
      text: <FormattedMessage id='featuresSubMenu1Title' />,
      link: '/learning',
    },
    {
      icon: <IconVideochat className='dropdown__icon' />,
      title: <FormattedMessage id='featuresConfSec1TitleTop' />,
      text: <FormattedMessage id='featuresSubMenu2Title' />,
      link: '/conferencing',
    },
    {
      icon: <IconChart className='dropdown__icon' />,
      title: <FormattedMessage id='featuresAlayticsTitleTop' />,
      text: <FormattedMessage id='featuresSubMenu3Title' />,
      link: '/analytics',
    },
    {
      icon: <IconLayer className='dropdown__icon' />,
      title: <FormattedMessage id='featuresSecurityTitleTop' />,
      text: <FormattedMessage id='featuresSubMenu4Title' />,
      link: '/security',
    },
    {
      icon: <IconIdea className='dropdown__icon' />,
      title: <FormattedMessage id='featuresCollabSec1TitleTop' />,
      text: <FormattedMessage id='featuresSubMenu5Title' />,
      link: '/collaboration',
    },
    {
      icon: <IconDevice className='dropdown__icon' />,
      title: <FormattedMessage id='featuresDevicesSec1TitleTop' />,
      text: <FormattedMessage id='featuresSubMenu6Title' />,
      link: '/devices',
    },
  ],
  resources: [
    {
      icon: <IconGraduated className='dropdown__icon' />,
      title: 'Students and Teachers',
    },
    {
      icon: <IconMarketing className='dropdown__icon' />,
      title: 'Online Demo',
    },
    {
      icon: <IconBlog className='dropdown__icon' />,
      title: 'Blog',
    },
    {
      icon: <IconSpeech className='dropdown__icon' />,
      title: 'Community',
    },
    {
      icon: <IconChat className='dropdown__icon' />,
      title: 'Webinars',
    },
    {
      icon: <IconPaper className='dropdown__icon' />,
      title: 'Documentation',
    },
  ],
};
