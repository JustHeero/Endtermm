import React from "react";
import s from "./Post.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { FaEllipsisV } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { BiShare } from "react-icons/bi";

const Profile = (props) => {
  return (
    <div className={s.main_content}>
      <div className={s.post_container}>
        <div className={s.post_row}>
          <div className={s.user_profile}>
            <img src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=" />
            <div>
              <p>Alex Johnson</p>
              <span>{props.date}</span>
            </div>
          </div>
          <a href="#">
            <FaEllipsisV clasName={s.i} />
          </a>
        </div>

        <p className={s.post_text}>
          This site is a clone of the Facebook site. Made only for the lesson.
          Made for Web Development lesson. Made by a Student of faculty
          Information Security Systems. <a href="#">#IITU</a>{" "}
          <a href="#">#Almaty2022</a>
        </p>
        <img
          src="https://images.unsplash.com/photo-1569158049406-6dc6f71ccd48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJlYXV0aWZ1bCUyMG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          className={s.post_img}
        />

        <div className={s.post_row}>
          <div className={s.activity_icons}>
            <div>
              <BiLike className={s.img} />
              {props.like}
            </div>
            <div>
              <GoCommentDiscussion className={s.img} /> 45
            </div>
            <div>
              <BiShare className={s.img} /> 20
            </div>
          </div>
          <div className={s.post_profile_icon}>
            <img src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=" />

            <AiFillCaretDown className={s.i} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
