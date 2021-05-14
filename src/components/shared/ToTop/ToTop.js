import React, { useEffect } from 'react';

import { MdKeyboardArrowUp } from 'react-icons/md';

function ToTop() {
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const topDiv = document.querySelector('.toTop');

      let scrollableHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const RATIO = 0.6;

      if (document.documentElement.scrollTop / scrollableHeight > RATIO) {
        topDiv.classList.add('toTop__show');
      } else {
        topDiv.classList.remove('toTop__show');
      }
    });
  }, []);

  return (
    <div
      className='toTop'
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <MdKeyboardArrowUp className='toTop__icon' />
    </div>
  );
}

export default ToTop;
