import React, { useEffect } from 'react';
import { NavLink as Link } from 'react-router-dom';

import ReactDOMServer from 'react-dom/server';

import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { FormattedMessage } from 'react-intl';

function Section5() {
  useEffect(() => {
    // dom selectors
    const accordions = document.querySelectorAll('.accordions__accordion');
    const accBottom = document.querySelectorAll('.accordions__bottom');
    let iconBody = document.querySelectorAll('.accordions__icon');
    let accTop = document.querySelectorAll('.accordions__top');

    // set auto hight in first accordion
    accBottom[0].style.maxHeight = accBottom[0].scrollHeight + 'rem';

    [...accordions].forEach((accordion) => {
      const accrd = accordion.querySelector('.accordions__top');
      accrd.addEventListener('click', (e) => {
        let iconPlus = accordion.querySelector('.accordions__icon');
        let accBody = accordion.querySelector('.accordions__bottom');

        // remove all currect active classes
        accBottom.forEach((item) => {
          item.classList.remove('accordions__show');
          item.style.maxHeight = 0;
        });
        iconBody.forEach(
          (item) =>
            (item.innerHTML = ReactDOMServer.renderToString(
              <AiOutlinePlusCircle className='accordions__icon' />
            ))
        );
        accTop.forEach((item) =>
          item.classList.remove('accordions__top--active')
        );

        accBody.classList.toggle('accordions__show');

        if (accBody.classList.contains('accordions__show')) {
          accBody.style.maxHeight = accBody.scrollHeight + 'rem';
          accrd.classList.add('accordions__top--active');

          iconPlus.innerHTML = ReactDOMServer.renderToString(
            <AiOutlineMinusCircle className='accordions__icon' />
          );
        } else {
          accBody.style.maxHeight = 0;
          iconPlus.innerHTML = ReactDOMServer.renderToString(
            <AiOutlinePlusCircle className='accordions__icon' />
          );
        }
      });
    });
  }, []);

  return (
    <section className='pricingSec5'>
      <div className='container-middle'>
        <div className='pricingSec5__content'>
          <div className='pricingSec5__faqbox'>
            <div className='pricingSec5__faqtitle'>FAQ</div>
            <div className='pricingSec5__faqtext'>
              <FormattedMessage id='priceSec5Title' />
            </div>
          </div>

          <div className='questions'>
            <ul className='questions__tabs'>
              <li className='questions__tab'>
                <Link className='questions__link' to='/'>
                  <FormattedMessage id='priceSec5Tab1' />
                </Link>
              </li>
              <li className='questions__tab'>
                <Link
                  activeClassName='questions__active'
                  className='questions__link'
                  to='/'
                >
                  <FormattedMessage id='priceSec5Tab2' />
                </Link>
              </li>
              <li className='questions__tab'>
                <Link className='questions__link' to='/'>
                  <FormattedMessage id='priceSec5Tab3' />
                </Link>
              </li>
              <li className='questions__tab'>
                <Link className='questions__link' to='/'>
                  <FormattedMessage id='priceSec5Tab4' />
                </Link>
              </li>
            </ul>

            <div className='accordions'>
              <div className='accordions__accordion'>
                <div className='accordions__top accordions__top--active'>
                  <div className='accordions__title'>
                    <FormattedMessage id='priceAcd1Title' />
                  </div>
                  <div className='accordions__icon'>
                    <AiOutlineMinusCircle className='accordions__icn' />
                  </div>
                </div>
                <div className='accordions__bottom accordions__show'>
                  <div className='accordions__text'>
                    <FormattedMessage id='priceAcd1Text' />
                  </div>
                </div>
              </div>

              <div className='accordions__accordion'>
                <div className='accordions__top'>
                  <div className='accordions__title'>
                    <FormattedMessage id='priceAcd2Title' />
                  </div>
                  <div className='accordions__icon'>
                    <AiOutlinePlusCircle className='accordions__icn' />
                  </div>
                </div>
                <div className='accordions__bottom'>
                  <div className='accordions__text'>
                    <FormattedMessage id='priceAcd1Text' />
                  </div>
                </div>
              </div>

              <div className='accordions__accordion'>
                <div className='accordions__top'>
                  <div className='accordions__title'>
                    <FormattedMessage id='priceAcd3Title' />
                  </div>
                  <div className='accordions__icon'>
                    <AiOutlinePlusCircle className='accordions__icn' />
                  </div>
                </div>
                <div className='accordions__bottom'>
                  <div className='accordions__text'>
                    <FormattedMessage id='priceAcd1Text' />
                  </div>
                </div>
              </div>

              <div className='accordions__accordion'>
                <div className='accordions__top'>
                  <div className='accordions__title'>
                    <FormattedMessage id='priceAcd4Title' />
                  </div>
                  <div className='accordions__icon'>
                    <AiOutlinePlusCircle className='accordions__icn' />
                  </div>
                </div>
                <div className='accordions__bottom'>
                  <div className='accordions__text'>
                    <FormattedMessage id='priceAcd1Text' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section5;
