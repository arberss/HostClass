import React from 'react';
import { Link } from 'react-router-dom';
// import navLogo from '../../../../assets/img/shared/Nav/nav__logo.png';
import navLogo from '../../../assets/img/shared/Nav/nav__logo.png';

function Logo() {
  return (
    <Link to='/' className='nav__logo-link'>
      <img className='nav__logo' src={navLogo} alt='logo' />
    </Link>
  );
}

export default Logo;
