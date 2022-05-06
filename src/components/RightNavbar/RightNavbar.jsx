import React from 'react';
import classes from './RightNavbar.module.css';
import { BsFillGeoAltFill } from 'react-icons/bs';


const RightNavbar = () => {
    return (     
   <div className={classes.right_sidebar}>
     <div className={classes.sidebar_title}>
         <h4>Events</h4>
         <a href='#'>See All</a>
     </div>
     <div className={classes.event}>
         <div className={classes.left_event}>
             <h3>10</h3>
             <span>April</span>
         </div>
         <div className={classes.right_event}>
             <h4>Social Media</h4>
             <p><BsFillGeoAltFill className={classes.i}/> Willson Tech Park</p>
             <a href='#'>More Info</a>
         </div>
     </div>

     <div className={classes.event}>
         <div className={classes.left_event}>
             <h3>11</h3>
             <span>April</span>
         </div>
         <div className={classes.right_event}>
             <h4>Mobile Marketing</h4>
             <p><BsFillGeoAltFill className={classes.i}/> Willson Tech Park</p>
             <a href='#'>More Info</a>
         </div>
     </div>
   
   <div className={classes.sidebar_title}>
   <h4>Advertisement</h4>
	<a href="#">Close</a>
   </div>
   <div className={classes.img}>
          <img src='https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWVldGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' className={classes.sidebar_ads}></img>
   </div>

 <div className={classes.sidebar_title}>
    <h4>Conversation</h4>
	<a href="#">Hide Chat</a>
   </div>

<div className={classes.online_list}>
    <div className={classes.online}>
        <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'></img>
    </div>
    <p>Alison Mina</p>
</div>

<div className={classes.online_list}>
    <div className={classes.online}>
        <img src='https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'></img>
    </div>
    <p>Jackson Aston</p>
</div>

   </div>
    )
}

export default RightNavbar;