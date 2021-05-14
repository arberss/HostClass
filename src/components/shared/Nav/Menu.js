import React from 'react';

import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink as Link } from 'react-router-dom';
import { menuData } from './menuData';

import { FormattedMessage } from 'react-intl';

function Menu() {
  return (
    <ul className='nav__menu'>
      <li className='nav__list'>
        <Link to='/features' activeClassName='nav__activeLink'>
          <FormattedMessage id='navList1' />
          <MdKeyboardArrowDown className='nav__list--d-arrow' />
        </Link>

        <div className='dropdown dropdown--features'>
          <div className='dropdown__name'>
            <FormattedMessage id='navList1' />
          </div>
          <div className='dropdown__data'>
            {menuData.features.map((item, i) => {
              const { icon, title, text, link } = item;

              return (
                <Link
                  to={'/features' + link}
                  className='dropdown__link'
                  key={i}
                >
                  <div className='dropdown__icn dropdown__icn--first'>
                    {icon}
                  </div>
                  <div className='dropdown__info'>
                    <div className='dropdown__title'>{title}</div>
                    <div className='dropdown__text'>{text}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </li>
      <li className='nav__list'>
        <Link to='/pricing' activeClassName='nav__activeLink'>
          <FormattedMessage id='navList2' />
        </Link>
      </li>
      <li className='nav__list'>
        <Link to='/support' activeClassName='nav__activeLink'>
          <FormattedMessage id='navList3' />
        </Link>
      </li>
      <li className='nav__list'>
        <Link to='/resources' activeClassName='nav__activeLink'>
          <FormattedMessage id='navList4' />
          <MdKeyboardArrowDown className='nav__list--d-arrow' />
        </Link>

        <div className='dropdown dropdown--resources'>
          <div className='dropdown__name'>Resources</div>
          <div className='dropdown__data'>
            {menuData.resources.map((item, i) => {
              const { icon, title } = item;

              return (
                <Link to='/' className='dropdown__link' key={i}>
                  <div className='dropdown__icn dropdown__icn--second'>
                    {icon}
                  </div>
                  <div className='dropdown__info'>
                    <div className='dropdown__title'>{title}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </li>
      <li className='nav__list'>
        <Link to='/blog' activeClassName='nav__activeLink'>
          <FormattedMessage id='navList5' />
        </Link>
      </li>
    </ul>
  );
}

export default Menu;
