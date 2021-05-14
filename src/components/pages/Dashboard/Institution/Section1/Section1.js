import React from 'react';
import DashboardNav from '../../DashboardNav/DashboardNav';
import LinkPage from '../../DashboardNav/LinkPage';

import logo from '../../../../../assets/img/components/Dashboard/Institution/uni-logo.png';

function Section1() {
  return (
    <>
      <DashboardNav LinkPg={<LinkPage pageName={'Institution Page'} />} />
      <div className='instSec1'>
        <div className='container-middle-small'>
          <img src={logo} alt='' className='instSec1__img' />
        </div>
      </div>
    </>
  );
}

export default Section1;
