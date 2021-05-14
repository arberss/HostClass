import React from 'react';

import map from '../../../../../assets/img/components/Dashboard/Institution/map.png';
import img1 from '../../../../../assets/img/components/Dashboard/Institution/img1.png';

import { ReactComponent as IconResp } from '../../../../../assets/img/components/Dashboard/Institution/icon-resp.svg';
import { ReactComponent as IconUni } from '../../../../../assets/img/components/Dashboard/Institution/uni.svg';

import { BsInfoCircle } from 'react-icons/bs';
import { AiOutlineDatabase } from 'react-icons/ai';

function Section2() {
  return (
    <div className='instSec2'>
      <div className='instSec2__content'>
        <div className='instSec2__left'>
          <div className='instSec2__title'>Help Desk</div>
          <div className='instSec2__bottom'>
            <div className='instSec2__fl'>
              <div className='instSec2__img1box'>
                <img src={img1} alt='' className='instSec2__img1' />
              </div>
              <ul className='instSec2__list'>
                <li className='instSec2__li'>
                  <BsInfoCircle className='instSec2__icnli' />
                  Student Help
                </li>
                <li className='instSec2__li'>
                  <IconUni className='instSec2__icnli' />
                  University
                </li>
                <li className='instSec2__li'>
                  <IconResp className='instSec2__icnli' />
                  Labs
                </li>
                <li className='instSec2__li'>
                  <AiOutlineDatabase className='instSec2__icnli' />
                  IT Resources
                </li>
              </ul>
            </div>
            <div className='instSec2__title2'>Academic Contacts</div>
            <table className='instSec2__table'>
              <thead>
                <tr>
                  <th className='th th--1'></th>
                  <th className='th th--2'>Name</th>
                  <th className='th th--3'>Role</th>
                  <th className='th th--4'>Contact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='td td--id'>1</td>
                  <td>John Doe</td>
                  <td>Student Support</td>
                  <td>john.doe@support.com</td>
                </tr>
                <tr>
                  <td className='td td--id'>2</td>
                  <td>Lana Ray</td>
                  <td>Student Support</td>
                  <td>lana.ray@support.com</td>
                </tr>
                <tr>
                  <td className='td td--id'>3</td>
                  <td>Anson Little</td>
                  <td>Student Support</td>
                  <td>anson.little@support.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='instSec2__right'>
          <img src={map} alt='' className='instSec2__img' />
        </div>
      </div>
    </div>
  );
}

export default Section2;
