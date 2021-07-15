import React from 'react';

/**
 * Компонент принимает пропс для ссылки на изображение, можно также передать доп.разметку через props.children
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Logo = (props) => (
  <div
    className={props.className}
  >
    <a href={props.logoURL}
    >
      {props.children}
    </a>
  </div>
);

export default Logo;
