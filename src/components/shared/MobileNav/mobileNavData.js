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
      icon: <IconExam className='mobileNav__icon' />,
      title: 'Learning Management',
      link: '/learning',
    },
    {
      icon: <IconVideochat className='mobileNav__icon' />,
      title: 'Web Conferencing',
      link: '/conferencing',
    },
    {
      icon: <IconChart className='mobileNav__icon' />,
      title: 'Data & Analytics',
      link: '/analytics',
    },
    {
      icon: <IconLayer className='mobileNav__icon' />,
      title: 'Security',
      link: '/security',
    },
    {
      icon: <IconIdea className='mobileNav__icon' />,
      title: 'Collaboration',
      link: '/collaboration',
    },
    {
      icon: <IconDevice className='mobileNav__icon' />,
      title: 'Multiple Devices',
      link: '/devices',
    },
  ],
  resources: [
    {
      icon: <IconGraduated className='mobileNav__icon' />,
      title: 'Students and Teachers',
    },
    {
      icon: <IconMarketing className='mobileNav__icon' />,
      title: 'Online Demo',
    },
    {
      icon: <IconBlog className='mobileNav__icon' />,
      title: 'Blog',
    },
    {
      icon: <IconSpeech className='mobileNav__icon' />,
      title: 'Community',
    },
    {
      icon: <IconChat className='mobileNav__icon' />,
      title: 'Webinars',
    },
    {
      icon: <IconPaper className='mobileNav__icon' />,
      title: 'Documentation',
    },
  ],
};
