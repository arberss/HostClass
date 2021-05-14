import React from 'react';

import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

function User() {
  return (
    <div className='nav__buttons'>
      <Link to='/login' className='nav__btn'>
        <button className='button-unstyled  nav__btn--login'>
          <FormattedMessage id='buttonLogIn' />
        </button>
      </Link>
      <Link to='/signup' className='nav__btn'>
        <button className='button-primary-hover nav__btn--signup'>
          <FormattedMessage id='buttonSignUp' />
        </button>
      </Link>
    </div>
  );
}

export default User;
