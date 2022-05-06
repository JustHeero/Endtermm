import React from "react";
import classes from "./Header.module.css";
import { FaFacebook } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { RiInboxLine } from "react-icons/ri";
import { BiVideo } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div className={classes.nav_left}>
        <Link to="/main">
          <FaFacebook className={classes.logo} />
        </Link>

        <ul>
          {" "}
          <Link to="/states">
            <li>
              <GrNotification className={classes.img} />
            </li>
          </Link>
          <li>
            <RiInboxLine className={classes.img} />
          </li>
          <li>
            <BiVideo className={classes.img} />
          </li>
          <Link to="/rendering">
            <li>
              <button>Rendering</button>
            </li>
          </Link>
        </ul>
      </div>
      <div className={classes.nav_right}>
        <div className={classes.search_box}>
          <BsSearch />
          <input type="text" placeholder="Search" name="" />
        </div>
        <div className={`${classes.nav_user_icon} ${classes.online}`}>
          <Link to="/profile">
            <img src="data:image/png;base64,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" />
          </Link>
        </div>
      </div>{" "}
      <Outlet />
    </nav>
  );
};
export default Header;
