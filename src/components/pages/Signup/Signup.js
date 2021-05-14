import React, { useState } from 'react';
import Header from '../../shared/Header';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import { BsEnvelope } from 'react-icons/bs';
import { RiLock2Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';

import { settings } from './signupData';
import { slideData } from './signupData';
import { FormattedMessage, useIntl } from 'react-intl';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const intl = useIntl();

  return (
    <Header>
      <div className='signup account sec1Scroll'>
        <div className='features'>
          <div className='features__content'>
            <div className='features__title'>
              HostClass <FormattedMessage id='navList1' />{' '}
            </div>
            <Slider className='slide' {...settings}>
              {/* slide */}
              {slideData &&
                slideData.map((item) => {
                  const { id, image, title } = item;
                  return (
                    <div className='slide__body' key={id}>
                      <img src={image} alt='' className='slide__img' />
                      <div className='slide__title text-primary'>{title}</div>
                    </div>
                  );
                })}
              {/* slide */}
            </Slider>
          </div>
        </div>

        <div className='container-second signup__content'>
          <div className='account__content signup__padding'>
            <div className='account__title heading-secondary u-text-center'>
              <FormattedMessage id='signupAccount' />
            </div>

            <div className='account__register signup__login u-text-center'>
              <FormattedMessage id='acclogin' />
              <Link to='/login' className='account__link'>
                <FormattedMessage id='buttonLogIn' />
              </Link>
            </div>

            <form action='' className='form'>
              <div className='form__input-content signup__input'>
                <label htmlFor='name' className='form__label'>
                  <FormattedMessage id='accFullName' />
                </label>
                <input
                  type='text'
                  name='name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={intl.formatMessage({ id: 'accEnterFullName' })}
                  className='form__input'
                />
                <FiUser className='form__icon' />
              </div>
              <div className='form__input-content signup__input'>
                <label htmlFor='email' className='form__label'>
                  <FormattedMessage id='accEmail' />
                </label>
                <input
                  type='email'
                  name='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={intl.formatMessage({ id: 'accEnterEmail' })}
                  className='form__input'
                />
                <BsEnvelope className='form__icon' />
              </div>
              <div className='form__input-content signup__input'>
                <label htmlFor='password' className='form__label'>
                  <FormattedMessage id='accPass' />
                </label>
                {!showPassword ? (
                  <AiOutlineEyeInvisible
                    className='form__icon form__icon--pass'
                    onClick={() => setShowPassword(true)}
                  />
                ) : (
                  <AiOutlineEye
                    className='form__icon form__icon--pass'
                    onClick={() => setShowPassword(false)}
                  />
                )}
                <input
                  type={!showPassword ? 'password' : 'text'}
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={intl.formatMessage({ id: 'accEnterPass' })}
                  className='form__input'
                />
                <RiLock2Line className='form__icon' />
              </div>

              <div className='signup__policy'>
                <input type='checkbox' name='policy' id='policy' />
                <label
                  htmlFor='policy'
                  className='form__label-checkbox signup__checkbox'
                >
                  <FormattedMessage id='accAccept' />
                  <Link to='' className='signup__link'>
                    <FormattedMessage id='PrivatePolicy' />
                  </Link>{' '}
                  &{' '}
                  <Link to='' className='signup__link'>
                    <FormattedMessage id='TermUse' />
                  </Link>
                </label>
              </div>

              <button className='form__button button-primary signup__button'>
                <FormattedMessage id='buttonSignUp' />
              </button>
              <div className='signup__line'>
                <span className='signup__hr'></span>
                <span className='signup__or'>
                  <FormattedMessage id='or' />
                </span>
                <span className='signup__hr'></span>
              </div>
              <button className='signup__googlebtn button-primary'>
                <FcGoogle className='signup__icon' />
                <FormattedMessage id='buttonSignUpWith' /> Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </Header>
  );
}

export default Signup;
