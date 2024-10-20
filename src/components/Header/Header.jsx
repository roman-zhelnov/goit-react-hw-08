import clsx from "clsx";
import s from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selector";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={s.navigationBox}>
      <div>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
      </div>
      {isLoggedIn && <div>Welcome, {user.name}</div>}
      <div className="flex gap-5">
        <NavLink className={buildLinkClass} to="/contacts">
          Contacts
        </NavLink>
        {!isLoggedIn && (
          <>
            <NavLink className={buildLinkClass} to="/register">
              Register
            </NavLink>
            <NavLink className={buildLinkClass} to="/login">
              Login
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <button className="btn btn-outline btn-primary">LogOut</button>
        )}
      </div>
    </div>
  );
};
export default Header;
