import React from 'react';
import './SelectLaguage.css';
import { AiOutlineArrowUp } from 'react-icons/ai';
import SingleLanguage from './SingleLanguage';
import { dataLocalStorage } from './dataLocalStorage';

import ukflag from '../../../assets/img/shared/Footer/unitedStateFlag.svg';
import germanyflag from '../../../assets/img/shared/Footer/germanyFlag.svg';
import franceflag from '../../../assets/img/shared/Footer/france.svg';
import albaniaflag from '../../../assets/img/shared/Footer/albania.svg';
import spainflag from '../../../assets/img/shared/Footer/spain.svg';
import italyflag from '../../../assets/img/shared/Footer/italy.svg';
import chinaflag from '../../../assets/img/shared/Footer/china.svg';

import { useDispatch, useSelector } from 'react-redux';
import { chooseLanguage } from '../../../store/actions/chooseLanguageAction';

function SelectLanguage() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const languages = [
    { value: 'en-GB', lang: 'English', flag: ukflag },
    { value: 'sq-AL', lang: 'Albanian', flag: albaniaflag },
    { value: 'de-DE', lang: 'German', flag: germanyflag },
    { value: 'fr-FR', lang: 'French', flag: franceflag },
    { value: 'it-IT', lang: 'Italian', flag: italyflag },
    { value: 'es-ES', lang: 'Espanol', flag: spainflag },
    { value: 'zh-CN', lang: 'Chinese', flag: chinaflag },
  ];

  const handleLanguageChange = (language, locale) => {
    dispatch(chooseLanguage(locale));
    dataLocalStorage.setLanguage(language);
    dataLocalStorage.setLocale(locale);
  };
  let flag = null;
  switch (dataLocalStorage.getLocale()) {
    case 'en-GB':
      flag = ukflag;
      break;
    case 'sq-AL':
      flag = albaniaflag;
      break;
    case 'de-DE':
      flag = germanyflag;
      break;
    case 'fr-FR':
      flag = franceflag;
      break;
    case 'it-IT':
      flag = italyflag;
      break;
    case 'es-ES':
      flag = spainflag;
      break;
    case 'zh-CN':
      flag = chinaflag;
      break;
    default:
      flag = ukflag;
  }

  return (
    <div className='select-language'>
      <img src={flag} alt='selected flag' />
      {dataLocalStorage.getLanguage() || 'English'}
      <AiOutlineArrowUp className='arrow' styles='up' />

      <div className='dropdown'>
        {/* {languages
          .sort(function (a, b) {
            let lang1 = a.lang.toUpperCase();
            let lang2 = b.lang.toUpperCase();
            if (lang1 < lang2) {
              return -1;
            }
            if (lang1 > lang2) {
              return 1;
            }
            // names must be equal
            return 0;
          }) */}
        {languages.map((thisLang, i) => {
          return (
            <SingleLanguage
              value={thisLang.value}
              key={i}
              handleLanguageChange={() =>
                handleLanguageChange(thisLang.lang, thisLang.value)
              }
              styles={thisLang.value === language && 'selected'}
              language={thisLang.lang}
              flag={thisLang.flag}
            ></SingleLanguage>
          );
        })}
      </div>
    </div>
  );
}
export default SelectLanguage;
