'use client';
import React from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Styles
import cls from './footer.module.scss';

function Footer() {
  return (
    <>
      <div className={cls.top_bar}>
        <div className="container">
          <div className={cls.content}>
            <h3>Get In Touch</h3>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. or you have a question or just want to say hi, I’ll try my best to get back to you!</p>
            <a href="mailto:7assan.3li1998@gmail.com"><button>Say Hello</button></a>
          </div>
        </div>
      </div>
      <footer className={cls.footer}>
        <div className={`container ${cls.layer}`}>
          <p className={cls.paragraph}>
            I Want To Hear From <br />
            You Please <a href="mailto:7assan.3li1998@gmail.com">Contact Me!</a>
          </p>
          <div className={cls.bottom_bar}>
            <p className={cls.email}>7assan.3li1998@gmail.com</p>
            <Icon icon="fluent:arrow-turn-down-left-20-filled" className="iconifiy-icon" />
            <p className={cls.copyright}>Copyright &copy; 2018-{new Date().getFullYear()} By Hassan Ali | All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer