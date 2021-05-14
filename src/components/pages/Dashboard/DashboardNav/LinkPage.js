import React from 'react';

import { ReactComponent as IconDashboard } from '../../../../assets/img/components/Dashboard/icon-dashboard.svg';

function LinkPage({ pageName }) {
  return (
    <div className='dashLinkPage'>
      <IconDashboard className='dashLinkPage__icon' />{' '}
      <span className='dashLinkPage__title'>
        Dashboard {'>'} {pageName}
      </span>
    </div>
  );
}

export default LinkPage;
