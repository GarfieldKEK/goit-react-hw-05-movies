import style from '../style.module.css';

const Header = ({ children }) => {
  return <div className={style.header}>{children}</div>;
};

export default Header;
