import React, { useEffect } from 'react';
import MobileNav from '../MobileNav/MobileNav';
import HamburgerMenu from './HamburgerMenu';
import Logo from './Logo';
import Menu from './Menu';
import User from './User';

function Nav() {
  useEffect(() => {
    const nav = document.querySelector('.nav');
    const headerContent = document.querySelector('.header');
    const page = document.querySelector('.page');

    const firstScroll = document.querySelector('.sec1Scroll');
    const firstNoScroll = document.querySelector('.sec1NoScroll');

    window.addEventListener('scroll', () => {
      const navHeight = nav.scrollHeight;
      const scrollHeight = window.pageYOffset;

      if (scrollHeight > navHeight) {
        nav.classList.add('navDesktopActive');

        if (firstScroll !== null) {
          firstScroll.style.marginTop = navHeight + 'px';
        }
        if (firstNoScroll !== null) {
          firstNoScroll.style.marginTop = 0;
        }

        // this is only for features links
        if (page !== null) {
          page.style.marginTop = navHeight + 'px';
        }
      } else {
        nav.classList.remove('navDesktopActive');
        if (firstScroll !== null) {
          firstScroll.style.marginTop = 0;
        }
        if (firstNoScroll !== null) {
          firstNoScroll.style.marginTop = -navHeight + 'px';
        }

        // this is only for features links
        if (page !== null) {
          page.style.marginTop = 0;
        }
      }
    });
  }, []);

  return (
    <nav className='nav'>
      <div className='container'>
        <div className='nav__content'>
          {/* <HamburgerMenu /> */}
          <Logo />
          <Menu />
          <MobileNav />
          <User />
          <HamburgerMenu />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
