import React, {useState} from 'react';

/**
 * Кастомный компонент input
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const SearchInput = (props) => {
  const [input, setInput] = useState('initState');

  const onChangeHandler = (event) => {
    const {value} = event.target;
    setInput(value)
    props.onChange(event)
  }

  return (
    <input
      type={props.type}
      onChange={onChangeHandler}
      value={input}
      className={props.className}
      name={props.name}
      placeholder={props.placeholder}
    />
  )
}

export default SearchInput;