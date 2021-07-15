import React from 'react';

/**
 * Настраиваемый компонент обертки
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Card = (props) => (
  <div className={props.className}>{props.children}</div>
);

export default Card;
