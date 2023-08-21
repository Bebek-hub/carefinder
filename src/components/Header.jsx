import SetDate from "../components/SetDate";
import { MdOutlineLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <aside className="sub-header">
        <p>CareFinder</p>
        <p className="sub-header_date">
          <SetDate /> ||
          <Link className="icon">
            <MdOutlineLightMode />
          </Link>
        </p>
      </aside>

      <header className="header">
        <h1 className="header_logo">Favvy</h1>
        <div className="header-sub">
          <div className="header-sub_link">
            <NavLink>
              <Link to="/" className="sub_link">
                Home
              </Link>
              <Link to="login" className="sub_link">
                Login
              </Link>
              <Link to="find-hospital" className="sub_link">
                Find Hospital
              </Link>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
