import React from 'react';
import { FormattedMessage } from 'react-intl';
import MobileModel1 from '../../../../../shared/MobileModels/MobileModel1';
import MobileModel2 from '../../../../../shared/MobileModels/MobileModel2';
import MobileModel3 from '../../../../../shared/MobileModels/MobileModel3';

function Section3() {
  return (
    <div className='collaborativeLearningSec3'>
      <div className='collaborativeLearningSec3__circle1'></div>
      <div className='collaborativeLearningSec3__circle2'></div>
      <div className='container-middle'>
        <div className='collaborativeLearningSec3__title heading-primary u-text-center'>
          <FormattedMessage id='featuresCollabSec3Title' />
        </div>
        <div className='collaborativeLearningSec3__content'>
          <div className='collaborativeLearningSec3__col collaborativeLearningSec3__col--mob1'>
            <div className='collaborativeLearningSec3__col--mobile'>
              <MobileModel1 />
            </div>
            <div className='collaborativeLearningSec3__info'>
              <div className='collaborativeLearningSec3__name'>
                <FormattedMessage id='featuresCollabSec3Mob1Title' />
              </div>
              <div className='collaborativeLearningSec3__text'>
                <FormattedMessage id='featuresCollabSec3Mob1Text' />
              </div>
            </div>
          </div>
          <div className='collaborativeLearningSec3__col collaborativeLearningSec3__col--mob2'>
            <div className='collaborativeLearningSec3__col--mobile'>
              <MobileModel2 />
            </div>
            <div className='collaborativeLearningSec3__info'>
              <div className='collaborativeLearningSec3__name'>
                <FormattedMessage id='featuresCollabSec3Mob2Title' />
              </div>
              <div className='collaborativeLearningSec3__text'>
                <FormattedMessage id='featuresCollabSec3Mob2Text' />
              </div>
            </div>
          </div>
          <div className='collaborativeLearningSec3__col collaborativeLearningSec3__col--mob3'>
            <div className='collaborativeLearningSec3__col--mobile'>
              <MobileModel3 />
            </div>
            <div className='collaborativeLearningSec3__info'>
              <div className='collaborativeLearningSec3__name'>
                <FormattedMessage id='featuresCollabSec3Mob3Title' />
              </div>
              <div className='collaborativeLearningSec3__text'>
                <FormattedMessage id='featuresCollabSec3Mob3Text' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
