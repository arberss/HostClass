import React, { useEffect } from 'react';

import nav__logo from '../../../../assets/img/components/Dashboard/nav__logo.png';

import { ReactComponent as IconUni } from '../../../../assets/img/components/Dashboard/uni.svg';
import { ReactComponent as IconGlobe } from '../../../../assets/img/components/Dashboard/globe.svg';
import { ReactComponent as IconBook } from '../../../../assets/img/components/Dashboard/open-book.svg';
import { ReactComponent as IconGroup } from '../../../../assets/img/components/Dashboard/group.svg';
import { ReactComponent as IconCalendar } from '../../../../assets/img/components/Dashboard/calendar.svg';

import { NavLink as Link } from 'react-router-dom';

function DashSideNav() {
  useEffect(() => {
    const hambMenu = document.querySelector('.dashSideNav__hamburger');
    const dashNav = document.querySelector('.dashSideNav');
    const dashFlexRight = document.querySelector('.dashFlex__right');
    const dashSideNavImg = document.querySelector('.dashSideNav__img');

    hambMenu.addEventListener('click', () => {
      dashNav.classList.toggle('dashSideNav__show');

      if (dashNav.classList.contains('dashSideNav__show')) {
        dashNav.style.width = '18rem';
        dashFlexRight.style.marginLeft = '18rem';
        dashSideNavImg.style.width = '10rem';
      } else {
        dashNav.style.width = '6rem';
        dashFlexRight.style.marginLeft = '6rem';
        dashSideNavImg.style.width = '0';
      }
    });
  }, []);

  return (
    <div className='dashSideNav'>
      <div className='dashSideNav__top'>
        <div className='dashSideNav__hamburger'>
          <div className='dashSideNav__line dashSideNav__line--1'></div>
          <div className='dashSideNav__line dashSideNav__line--2'></div>
          <div className='dashSideNav__line dashSideNav__line--3'></div>
        </div>
        <img src={nav__logo} alt='' className='dashSideNav__img' />
      </div>
      <ul className='dashSideNav__list'>
        <li className='dashSideNav__li'>
          <Link
            to='/dashboard/institution'
            activeClassName='dashSideNav__active'
          >
            <div className='dashSideNav__iconbody'>
              <IconUni className='dashSideNav__icon' />
            </div>
            <span className='dashSideNav__linkname'>Institution Page</span>
          </Link>
        </li>
        <li className='dashSideNav__li'>
          <Link to='/dashboard/institution'>
            <div className='dashSideNav__iconbody'>
              <IconGlobe className='dashSideNav__icon' />
            </div>
            <span className='dashSideNav__linkname'>Activity Stream</span>
          </Link>
        </li>
        <li className='dashSideNav__li'>
          <Link to='/dashboard/institution'>
            <div className='dashSideNav__iconbody'>
              <IconBook className='dashSideNav__icon' />
            </div>
            <span className='dashSideNav__linkname'>Courses</span>
          </Link>
        </li>
        <li className='dashSideNav__li'>
          <Link to='/dashboard/institution'>
            <div className='dashSideNav__iconbody'>
              <IconGroup className='dashSideNav__icon' />
            </div>
            <span className='dashSideNav__linkname'>Organisations</span>
          </Link>
        </li>
        <li className='dashSideNav__li'>
          <Link to='/dashboard/institution'>
            <div className='dashSideNav__iconbody'>
              <IconCalendar className='dashSideNav__icon' />
            </div>
            <span className='dashSideNav__linkname'>Calendar</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DashSideNav;
