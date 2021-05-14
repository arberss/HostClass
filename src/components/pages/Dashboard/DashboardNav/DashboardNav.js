import React from 'react';

import img1 from '../../../../assets/img/components/Dashboard/img1.png';

import { AiOutlineSearch, AiOutlineGlobal } from 'react-icons/ai';
import { IoIosChatbubbles } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';
import { MdArrowDropDown } from 'react-icons/md';

function DashboardNav({ LinkPg }) {
  return (
    <nav className='dashNav'>
      <div className='dashNav__content'>
        {LinkPg}
        <div className='dashNav__inputbox'>
          <input type='text' className='dashNav__input' placeholder='Search' />
          <AiOutlineSearch className='dashNav__icon' />
        </div>

        <div className='dashNav__right'>
          <div className='dashNav__icons'>
            <div className='dashNav__iconcircle'>
              <AiOutlineGlobal className='dashNav__icn' />
            </div>
            <div className='dashNav__iconcircle'>
              <IoIosChatbubbles className='dashNav__icn' />
            </div>
            <div className='dashNav__iconcircle'>
              <FaBell className='dashNav__icn' />
              <div className='dashNav__red'></div>
            </div>
          </div>
          <span className='dashNav__line'></span>
          <div className='dashNav__name'>Ashley Robinson</div>
          <img src={img1} alt='' className='dashNav__img' />
          <div className='dashNav__arrow'>
            <MdArrowDropDown className='dashNav__arrowicn' />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNav;
