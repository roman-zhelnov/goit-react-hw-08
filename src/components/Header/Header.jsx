import clsx from "clsx";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  return (
    <div className={s.navigationBox}>
      <div>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
      </div>
      <div>Welcome, who?</div>
      <div>
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        <NavLink className={buildLinkClass} to="/register">
          Register
        </NavLink>
        <NavLink className={buildLinkClass} to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};
export default Header;
