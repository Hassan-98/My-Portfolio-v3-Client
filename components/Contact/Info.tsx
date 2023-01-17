import React from 'react';
//= Styles
import classes from './contact.module.scss';

function ContactInfo() {
  return (
    <div className={classes.info}>
      <h2>Have a project or question in mind? Just send me a message.</h2>
      <p>Do you fancy saying hi to me or do you want to get started with your project and you need my help? Feel free to contact me.</p>
      <div className={classes.box}>
        <i className={`fa-light fa-mobile ${classes.box_icon}`}></i>
        <div className={classes.box_info}>
          <p>Call me now</p>
          <p>+201146321817</p>
        </div>
      </div>
      <div className={classes.box}>
        <i className={`fa-light fa-envelope ${classes.box_icon}`}></i>
        <div className={classes.box_info}>
          <p>Chat with me</p>
          <p>7assan.3li1998@gmail.com</p>
        </div>
      </div>
      <div className={classes.social}>
        <p>Follow me on social media</p>
        <div className={classes.icons_container}>
          <span></span>
          <div className={classes.icons}>
            <i className="fa-brands fa-github"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            <i className="fa-brands fa-google"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo