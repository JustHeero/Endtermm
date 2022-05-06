import React from "react";
import s from "./Profile.module.css";
import Post from "./PostContainer/Post";
import { AiFillCaretDown } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { MdPhotoCamera } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { BiShare } from "react-icons/bi";
import Footer from "../Footer/Footer";

const Profile = () => {
  return (
    <div className={s.main_content}>
      <div className={s.theme}>All my posts</div>
      <div className={s.write_post_container}>
        <div className={s.user_profile}>
          <img src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=" />
          <div>
            <p>John Nicholson</p>
            <small>
              Public <AiFillCaretDown className={s.i} />
            </small>
          </div>
        </div>

        <div className={s.post_input_container}>
          <textarea
            rows="3"
            placeholder="What's on your mind, John?"
          ></textarea>

          <div className={s.add_post_links}>
            <a href="#">
              <BiVideoPlus className={s.img} /> Live Video
            </a>
            <a href="#">
              <MdPhotoCamera className={s.img} /> Photo/Video
            </a>
            <a href="#">
              <BsEmojiSmile className={s.img} /> Feeling/Activity
            </a>
          </div>
        </div>
      </div>
      <Post date="April 8 2022, 00:40 pm" like="159" />
      <Post date="March 7 2022, 20:59 am" like="19" />
      <Post date="February 10 2022, 5:40 pm" like="38" />
      <Post date="January 8 2022, 00:40 pm" like="200" />
      <Post date="December 7 2022, 20:59 am" like="152" />
      <Post date="December 10 2022, 5:40 pm" like="308" />

      <button type="button" className={s.load_more_btn}>
        Load More
      </button>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
