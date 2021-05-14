import React from 'react';
import { FormattedMessage } from 'react-intl';

function Section3() {
  return (
    <div className='scheduleExpert'>
      <div className='container-middle'>
        <div className='scheduleExpert__content'>
          <div className='scheduleExpert__title'>
            <FormattedMessage id='featuresAnalyticsSec3Text' />
          </div>
          <button className='scheduleExpert__button'>
            <FormattedMessage id='buttonExpert' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section3;
