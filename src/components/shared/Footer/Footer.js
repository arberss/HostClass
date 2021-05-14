import React, { useEffect, useState } from 'react';
import { linksData } from './linksData';

import { FormattedMessage } from 'react-intl';

import { NavLink as Link } from 'react-router-dom';

// svg logo image
import { ReactComponent as CloudUsers } from '../../../assets/img/components/Landing/cloudusers.svg';
import { ReactComponent as PlaystoreIcon } from '../../../assets/img/components/Landing/playstoreIcon.svg';

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiOutlineCopyright,
  AiOutlinePhone,
} from 'react-icons/ai';
import { RiAppleFill } from 'react-icons/ri';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { BiEnvelope } from 'react-icons/bi';

import SelectLanguage from '../SelectLanguage/SelectLanguage';
import { dataLocalStorage } from '../SelectLanguage/dataLocalStorage';

function Footer(props) {
  return (
    <section className='footer'>
      <div className='container-middle'>
        <div className='footer__top'>
          <div className='footer__title'>
            <div className='footer__logo'>
              <CloudUsers className='footer__logoicon' />
              HostClass
            </div>
            <div className='footer__text'>
              <FormattedMessage id='footerTitle' />
            </div>
          </div>
          <ul className='footer__social'>
            <li>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillFacebook />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noreferrer'
              >
                <AiOutlineInstagram />
              </a>
            </li>
            <li>
              <a
                href='https://www.twitter.com/'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillTwitterSquare />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillLinkedin />
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__middle'>
          <div className='footer__links'>
            {linksData &&
              linksData.map((item) => {
                const { title, links } = item;
                return (
                  <div className='link' key={title}>
                    <div className='link__title'>{title}</div>
                    <ul className='link__list'>
                      {links.map((link) => {
                        const { to, name } = link;
                        return (
                          <li key={name}>
                            <Link to={to}>{name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}

            <div className='footer__buttons store'>
              <a href='/' className='store__buttons footer__btn'>
                <PlaystoreIcon className='store__buttons--playstore' />
                <div className='store__btns'>
                  <div className='store__btns--text'>Get it on</div>
                  <div className='store__btns--title'>Google Play</div>
                </div>
              </a>

              <a href='/' className='store__buttons footer__btn'>
                <RiAppleFill className='store__buttons--apple' />
                <div className='store__btns'>
                  <div className='store__btns--text'>Download on the</div>
                  <div className='store__btns--title'>App Store</div>
                </div>
              </a>
            </div>
          </div>

          <SelectLanguage
            setLanguage={props.setLanguage}
            language={props.language}
          />
        </div>

        <div className='footer__bottom'>
          <div className='info'>
            <div className='info__text info__text--left'>
              <AiOutlineCopyright className='footer__icon' /> Copyright{' '}
              {new Date().getFullYear()}, All Rights Reserved
            </div>
            <div className='info__privacy'>
              Privacy <span className='info__privacy--line'>|</span>
              <span className='info__privacy--term'>Term of use</span>
            </div>
          </div>
          <div className='info'>
            <div className='info__text info__text--right'>
              <BiEnvelope className='footer__icon' />
              support@hostclass.com
            </div>
            <div className='info__text'>
              <AiOutlinePhone className='footer__icon footer__icon--call' />{' '}
              +223 45545 252
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
