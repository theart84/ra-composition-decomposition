import React from 'react';

/**
 * Настраиваемый компонент списка
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const DisorderedList = (props) => (
  <ul className={props.className}>{props.children}</ul>
);

export default DisorderedList;
