'use client';
import React from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Styles
import cls from './contact.module.scss';

function ContactInfo() {
  return (
    <div className={cls.info}>
      <h2>Have a project or question in mind? Just send me a message.</h2>
      <p>Do you fancy saying hi to me or do you want to get started with your project and you need my help? Feel free to contact me.</p>
      <div className={cls.box}>
        <Icon icon="teenyicons:mobile-outline" className={`iconifiy-icon ${cls.box_icon}`} />
        {/* <i className={`fa-solid fa-mobile-screen-button ${cls.box_icon}`}></i> */}
        <div className={cls.box_info}>
          <p>Call me now</p>
          <p>+201146321817</p>
        </div>
      </div>
      <div className={cls.box}>
        <Icon icon="ant-design:message-outlined" className={`iconifiy-icon ${cls.box_icon}`} />
        {/* <i className={`fa-solid fa-envelope ${cls.box_icon}`}></i> */}
        <div className={cls.box_info}>
          <p>Chat with me</p>
          <p>7assan.3li1998@gmail.com</p>
        </div>
      </div>
      <div className={cls.social}>
        <p>Follow me on social media</p>
        <div className={cls.icons_container}>
          <span></span>
          <div className={cls.icons}>
            <a href="https://github.com/Hassan-98" target='_blank'>
              <Icon icon="mdi:github" className={`iconifiy-icon nomargin`} />
            </a>
            <a href="https://twitter.com/aeae9992" target='_blank'>
              <Icon icon="mdi:twitter" className={`iconifiy-icon nomargin`} />
            </a>
            <a href="https://www.linkedin.com/in/hassan1998" target='_blank'>
              <Icon icon="ant-design:linkedin-filled" className={`iconifiy-icon nomargin`} />
            </a>
            <a href="mailto:7assan.3li1998@gmail.com" target='_blank'>
              <Icon icon="mdi:google" className={`iconifiy-icon nomargin`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo