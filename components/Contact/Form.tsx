import React from 'react';
//= Styles
import classes from './contact.module.scss';

function ContactForm() {
  return (
    <div className={classes.form}>
      <input type="text" placeholder="Full Name" className={classes.half} />
      <input type="email" placeholder="Email Address" className={classes.half} />
      <input type="text" placeholder="Subject" />
      <textarea cols={30} rows={8} placeholder="Message"></textarea>
      <button>Send Message <i className="fa-light fa-paper-plane"></i></button>
    </div>
  )
}

export default ContactForm