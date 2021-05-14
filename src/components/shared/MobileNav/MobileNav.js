import React, { useEffect } from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';
import { NavLink as Link } from 'react-router-dom';
import { menuData } from './mobileNavData';
import { ReactComponent as CloudUsers } from '../../../assets/img/components/Landing/cloudusers.svg';

function MobileNav() {
  useEffect(() => {
    const linkArrows = document.querySelectorAll('.mobileNav__icon');
    const links = document.querySelectorAll('.mobileNav__link');

    [...linkArrows].forEach((link) => {
      link.addEventListener('click', (e) => {
        const navArrow = link.querySelector('.mobileNav__arrow');

        if (
          e.target.parentElement.classList.contains('mobileNav__icon') ||
          e.target.parentElement.classList.contains('mobileNav__arrow') ||
          e.target.classList.contains('mobileNav__icon')
        ) {
          link.nextElementSibling.classList.toggle('mobileNav__show');
          navArrow.classList.toggle('arrowShow');
        }
      });
    });
  }, []);

  const { features, resources } = menuData;

  return (
    <>
      <div className='fixedBack'></div>
      <div className='mobileNav'>
        <div className='mobileNav__close'>
          <CloudUsers className='mobileNav__logo' />
          <div className='mobileNav__closebox'>
            <MdKeyboardArrowDown className='mobileNav__closeicn' />
          </div>
        </div>
        <ul className='mobileNav__list'>
          <li className='mobileNav__link'>
            <Link
              to='/features'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>
                <FormattedMessage id='navList1' />
              </span>
            </Link>
            <div className='mobileNav__icon'>
              <MdKeyboardArrowDown className='mobileNav__arrow' />
            </div>
            <ul className='mobileNav__dropdown'>
              {features.map((item, i) => {
                return (
                  <li className='mobileNav__dropLink' key={i}>
                    <Link to={'/features' + item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className='mobileNav__link'>
            <Link
              to='/pricing'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>
                <FormattedMessage id='navList2' />
              </span>
            </Link>
          </li>

          <li className='mobileNav__link'>
            <Link
              to='/support'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>
                <FormattedMessage id='navList3' />
              </span>
            </Link>
          </li>

          <li className='mobileNav__link'>
            <Link
              to='/resources'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>
                <FormattedMessage id='navList4' />
              </span>
            </Link>
            <div className='mobileNav__icon'>
              <MdKeyboardArrowDown className='mobileNav__arrow' />
            </div>

            <ul className='mobileNav__dropdown'>
              {resources.map((item, i) => {
                return (
                  <li className='mobileNav__dropLink' key={i}>
                    <Link to={'/features' + item.link}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className='mobileNav__link'>
            <Link
              to='/blog'
              className='mobileNav__al'
              activeClassName='mobileNav__activeLink'
            >
              <span className='mobileNav__linkName'>
                <FormattedMessage id='navList5' />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
