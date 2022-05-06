import React from "react";
import classes from "./Navbar.module.css";
import { BiNews } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { TiGroupOutline } from "react-icons/ti";
import { BsBuilding } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className={classes.left_sidebar}>
      <div className={classes.imp_links}>
        <a href="#">
          <BiNews className={classes.img} /> Latest News
        </a>
        <a href="#">
          <FaUserFriends className={classes.img} /> Friends
        </a>
        <a href="#">
          <TiGroupOutline className={classes.img} /> Group
        </a>
        <a href="#">
          <BsBuilding className={classes.img} /> Marketplace
        </a>
        <a href="#">
          <AiOutlineEye className={classes.img} /> Watch
        </a>
        <a href="#">See More</a>
      </div>
      <div class={classes.shortcut_links}>
        <p>Your Shortcuts</p>
        <a href="#">
          <img src="https://media.istockphoto.com/photos/woman-working-at-home-and-reading-emails-on-her-laptop-picture-id1330800043?b=1&k=20&m=1330800043&s=170667a&w=0&h=YFuYLYWLnt1tpr90BxNWSgTE3yse4XUUml0jSTI2A9g=" />
          Web Developers
        </a>
        <a href="#">
          <img src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=" />
          Web Design course
        </a>
        <a href="#">
          <img src="https://media.istockphoto.com/photos/the-time-to-get-growing-is-now-picture-id1292991882?b=1&k=20&m=1292991882&s=170667a&w=0&h=5m-6ALajoDouoyaFWwbXrGUyRzeqS97_5Gmaww2YuJc=" />
          Full Stack Development
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwc2NyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          Website Experts
        </a>
      </div>
    </div>
  );
};

export default Navbar;
