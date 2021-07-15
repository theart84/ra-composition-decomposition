import Link from '../Link/Link'

/**
 * Настраиваемый компонент логотипа
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Logo = (props) => (
  <div
    className={props.className}
  >
    <Link link={props.logoURL}/>    
  </div>
);

export default Logo;
