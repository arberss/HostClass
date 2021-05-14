import React from 'react';

function SmallBanner({ img, text, icon, imgHeight }) {
  return (
    <div
      className='smallBanner'
      style={{ backgroundImage: `url(${img})`, height: `${imgHeight}rem` }}
    >
      <div className='container-middle'>
        <div className='smallBanner__content'>
          <div className='smallBanner__text'>{text}</div>
          {icon ? icon : null}
        </div>
      </div>
    </div>
  );
}

export default SmallBanner;
