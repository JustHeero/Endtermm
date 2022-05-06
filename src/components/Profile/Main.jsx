import React from "react";
import s from "./Main.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BiVideoPlus } from "react-icons/bi";
import { MdPhotoCamera } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { FaEllipsisV } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { BiShare } from "react-icons/bi";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className={s.main_content}>
      <div className={s.story_gallery}>
        <div className={`${s.story} ${s.story1}`}>
          <img src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <p>Post Story</p>
        </div>

        <div className={`${s.story} ${s.story2}`}>
          <img src="https://images.unsplash.com/photo-1461800919507-79b16743b257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <p>Alison</p>
        </div>

        <div className={`${s.story} ${s.story3}`}>
          <img src="https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <p>Jackson</p>
        </div>

        <div className={`${s.story} ${s.story4}`}>
          <img src="https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?b=1&k=20&m=1321462048&s=170667a&w=0&h=mlDKCuG5oXoX5zeCl6ixK1MiG1Y--ZmE4N6ku0NUKOE=" />
          <p>Samona</p>
        </div>

        <div className={`${s.story} ${s.story5}`}>
          <img src="https://media.istockphoto.com/photos/african-mid-woman-using-smartphone-at-home-picture-id1319763415?b=1&k=20&m=1319763415&s=170667a&w=0&h=J9vN7w33elL-hY1CogyTB2BzzKpiEbmPqTdsQ6fBbuI=" />
          <p>John Doe</p>
        </div>
      </div>

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

      <div className={s.post_container}>
        <div className={s.post_row}>
          <div className={s.user_profile}>
            <img src="https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk=" />
            <div>
              <p>John Doe</p>
              <span>April 5 2022, 00:40 pm</span>
            </div>
          </div>
          <a href="#">
            <FaEllipsisV className={s.i} />
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
              <BiLike className={s.img} /> 120
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

      <div className={s.post_container}>
        <div className={s.post_row}>
          <div className={s.user_profile}>
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <div>
              <p>John Doe</p>
              <span>April 5 2022, 00:40 pm</span>
            </div>
          </div>
          <a href="#">
            <FaEllipsisV className={s.i} />
          </a>
        </div>

        <p className={s.post_text}>
          This site is a clone of the Facebook site. Made only for the lesson.
          Made for Web Development lesson. Made by a Student of faculty
          Information Security Systems. <a href="#">#IITU</a>{" "}
          <a href="#">#Almaty2022</a>
        </p>
        <img
          src="https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className={s.post_img}
        />

        <div className={s.post_row}>
          <div className={s.activity_icons}>
            <div>
              <BiLike className={s.img} /> 120
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

      <div className={s.post_container}>
        <div className={s.post_row}>
          <div className={s.user_profile}>
            <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <div>
              <p>John Doe</p>
              <span>April 5 2022, 00:40 pm</span>
            </div>
          </div>
          <a href="#">
            <FaEllipsisV className={s.i} />
          </a>
        </div>

        <p className={s.post_text}>
          This site is a clone of the Facebook site. Made only for the lesson.
          Made for Web Development lesson. Made by a Student of faculty
          Information Security Systems. <a href="#">#IITU</a>{" "}
          <a href="#">#Almaty2022</a>
        </p>
        <img
          src="https://media.istockphoto.com/photos/outdoor-portrait-of-a-smiling-young-woman-wearing-a-knitted-orange-picture-id1324042692?b=1&k=20&m=1324042692&s=170667a&w=0&h=k8viLHtPbzj1bX0GnnJt4QjCoGdIlwJZJ4jhzLljgiQ="
          className={s.post_img}
        />

        <div className={s.post_row}>
          <div className={s.activity_icons}>
            <div>
              <BiLike className={s.img} /> 120
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

      <div className={s.post_container}>
        <div className={s.post_row}>
          <div className={s.user_profile}>
            <img src="https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
            <div>
              <p>John Doe</p>
              <span>April 5 2022, 00:40 pm</span>
            </div>
          </div>
          <a href="#">
            <FaEllipsisV className={s.i} />
          </a>
        </div>

        <p className={s.post_text}>
          This site is a clone of the Facebook site. Made only for the lesson.
          Made for Web Development lesson. Made by a Student of faculty
          Information Security Systems. <a href="#">#IITU</a>{" "}
          <a href="#">#Almaty2022</a>
        </p>
        <img
          src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhdXRpZnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className={s.post_img}
        />

        <div className={s.post_row}>
          <div className={s.activity_icons}>
            <div>
              <BiLike className={s.img} /> 120
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

      <div className={s.post_container}>
        <div className={s.post_row}>
          <div className={s.user_profile}>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
            <div>
              <p>John Doe</p>
              <span>April 5 2022, 00:40 pm</span>
            </div>
          </div>
          <a href="#">
            <FaEllipsisV className={s.i} />
          </a>
        </div>

        <p className={s.post_text}>
          This site is a clone of the Facebook site. Made only for the lesson.
          Made for Web Development lesson. Made by a Student of faculty
          Information Security Systems. <a href="#">#IITU</a>{" "}
          <a href="#">#Almaty2022</a>
        </p>
        <img
          src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          className={s.post_img}
        />

        <div className={s.post_row}>
          <div className={s.activity_icons}>
            <div>
              <BiLike className={s.img} /> 120
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
      <button type="button" className={s.load_more_btn}>
        Load More
      </button>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
