import React from 'react';

import { comparePlans } from './comparePlansData';

import { MdDone, MdClose } from 'react-icons/md';
import { FormattedMessage } from 'react-intl';

function Section3() {
  return (
    <section className='plansSec3'>
      <div className='container-third'>
        <table className='plansSec3__table'>
          <thead>
            <tr>
              <th className='plansSec3__thead plansSec3__thead--1'>
                <FormattedMessage id='priceTableTitle' />
              </th>
              <th className='plansSec3__thead plansSec3__thead--2'>
                <div className='plansSec3__thead--title'>
                  <FormattedMessage id='plansBadge2' />
                </div>
                <div className='plansSec3__thead--small'>
                  <FormattedMessage id='priceTableEveryone' />
                </div>
              </th>
              <th className='plansSec3__thead plansSec3__thead--2'>
                <div className='plansSec3__thead--title'>
                  <FormattedMessage id='plansBadge1' />
                </div>
                <div className='plansSec3__thead--small'>
                  <FormattedMessage id='plansFor1' />
                </div>
              </th>
              <th className='plansSec3__thead plansSec3__thead--2'>
                <div className='plansSec3__thead--title'>
                  <FormattedMessage id='plansBadge1' />
                </div>
                <div className='plansSec3__thead--small'>
                  <FormattedMessage id='plansFor3' />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparePlans.map((item, i) => {
              return (
                <tr key={i} data-aos='slide-left' data-aos-duration={i * 300}>
                  <td>
                    {item.icon} {item.title}
                  </td>
                  <td>
                    {item.basic === true ? (
                      <MdDone className='plansSec3__icon2' />
                    ) : item.basic === false ? (
                      <MdClose className='plansSec3__icon2 plansSec3__icon2--x' />
                    ) : typeof item.basic !== 'boolean' ? (
                      item.basic
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {item.pro1 === true ? (
                      <MdDone className='plansSec3__icon2' />
                    ) : item.pro1 === false ? (
                      <MdClose className='plansSec3__icon2 plansSec3__icon2--x' />
                    ) : typeof item.pro1 !== 'boolean' ? (
                      item.pro1
                    ) : (
                      ''
                    )}
                  </td>
                  <td>
                    {item.pro2 === true ? (
                      <MdDone className='plansSec3__icon2' />
                    ) : item.pro2 === false ? (
                      <MdClose className='plansSec3__icon2 plansSec3__icon2--x' />
                    ) : typeof item.pro2 !== 'boolean' ? (
                      item.pro2
                    ) : (
                      ''
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Section3;
