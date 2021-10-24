import { Link, useLocation } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import logo from "../../assets/logo.svg";
import { MenuList } from "./MenuList";

function MainNavigation() {
  const location = useLocation();
  //console.log(location.pathname);

  const menuList = MenuList.map(({ url, title, test }, index) => {
    //console.log(index);
    //console.log(url);
    //console.log(location.pathname === url);
    return (
      <li
        key={index}
        className={location.pathname === url ? `${classes.active}` : " "}
      >
        <Link to={`${url}?name=${test}&age=10`}>{title}</Link>
      </li>
    );
  });

  return (
    <header className={classes.header}>
      <Link to="/safes">
        <img src={logo} alt="logo"></img>
      </Link>
      
      <nav>
        <ul>{menuList}</ul>
        <ul className={classes.right}>
          <li>Documentation</li>
          <li>(Admin) Davis R.</li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
