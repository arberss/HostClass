import React, { useState } from 'react';
import Header from '../../shared/Header/index';
import Footer from '../../shared/Footer/Footer';

import { BsEnvelope } from 'react-icons/bs';
import { RiLock2Line } from 'react-icons/ri';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import LayoutPhoto from '../../../layouts/LayoutPhoto';
import { FormattedMessage, useIntl } from 'react-intl';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const intl = useIntl();

  return (
    <>
      <Header>
        <div className='login account sec1Scroll'>
          <LayoutPhoto
            container={'container-third login__content'}
            imageClass={'login__img'}
            sectionClass={'account__content'}
            paddingSide={'left'}
          >
            <div className='account__title heading-secondary u-text-center'>
              <FormattedMessage id='loginTitle' />
            </div>
            <div className='account__text text-primary u-text-center'>
              <FormattedMessage id='loginText' />
            </div>

            <form action='' className='form'>
              <div className='form__input-content'>
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
              <div className='form__input-content'>
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
              <div className='form__account'>
                <div className='form__remember'>
                  <input type='checkbox' name='remember' id='remember' />
                  <label htmlFor='remember' className='form__label-checkbox'>
                    <FormattedMessage id='accRemember' />
                  </label>
                </div>
                <div className='form__pass-forgot'>
                  <RiLock2Line className='form__icon-passforgot' />
                  <Link to='/' className='account__link'>
                    <FormattedMessage id='accForgotPw' />
                  </Link>
                </div>
              </div>

              <button className='form__button button-primary'>
                <FormattedMessage id='buttonLogIn' />
              </button>
            </form>
            <div className='account__register'>
              <FormattedMessage id='accsignup' />
              <Link to='/signup' className='account__link'>
                <FormattedMessage id='buttonSignUpNow' />
              </Link>
            </div>
          </LayoutPhoto>
        </div>
      </Header>
      <Footer />
    </>
  );
}

export default Login;
