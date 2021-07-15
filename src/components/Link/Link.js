/**
 * Настраиваемый компонент ссылки
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Link = (props) => {
  return (
    <a className={props.className} href={props.link}>
      {props.children}
    </a>
  );
};

export default Link;
