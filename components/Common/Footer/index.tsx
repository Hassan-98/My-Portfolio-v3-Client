import React from 'react';
import { Icon } from '@iconify/react';
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
            <Icon icon="fluent:arrow-turn-down-left-20-filled" className="iconifiy-icon" />
            <p className={classes.copyright}>Copyright &copy; 2018-{new Date().getFullYear()} By Hassan Ali | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer