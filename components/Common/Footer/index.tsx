import React from 'react';
//= Styles
import classes from './footer.module.scss';

function Footer() {
  return (
    <>
      <div className={classes.top_bar}>
        <div className="container">
          <div className={classes.content}>
            <h3>Get In Touch</h3>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. or you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <a href="mailto:7assan.3li1998@gmail.com"><button>Say Hello</button></a>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <div className={`container ${classes.layer}`}>
          <p className={classes.paragraph}>
            I Want To Hear From <br />
            You Please <a href="mailto:7assan.3li1998@gmail.com">Contact Me!</a>
          </p>
          <div className={classes.bottom_bar}>
            <p className={classes.email}>7assan.3li1998@gmail.com</p>
            <i className="fa-solid fa-arrow-turn-down-left"></i>
            <p className={classes.copyright}>Copyright &copy; {new Date().getFullYear()} By Hassan Ali | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer