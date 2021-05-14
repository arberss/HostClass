import React from 'react';

function LayoutPhoto({
  container,
  imageClass,
  sectionClass,
  children,
  paddingSide,
}) {
  return (
    <>
      <div
        className={'layoutPhoto ' + imageClass}
        data-aos={paddingSide === 'right' ? 'fade-left' : 'fade-right'}
        data-aos-duration='800'
      ></div>
      <div className={container + ' layoutPhoto__content'}>
        <div
          className={'layoutPhoto__' + paddingSide + ' ' + sectionClass}
          data-aos={paddingSide === 'right' ? 'zoom-in-right' : 'zoom-in-left'}
          data-aos-duration='800'
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default LayoutPhoto;
