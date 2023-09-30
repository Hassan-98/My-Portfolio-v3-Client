import React from 'react';
import { Icon } from '@iconify/react';
//= Packages
import toast from 'react-hot-toast';
//= schema
import { schema } from './validation';
//= Api
import { sendMessage } from '../../API';
//= Styles
import classes from './contact.module.scss';

function ContactForm() {
  async function handleSendMessage() {
    const name = document.querySelector<HTMLInputElement>('#name')!;
    const email = document.querySelector<HTMLInputElement>('#email')!;
    const message = document.querySelector<HTMLTextAreaElement>('#message')!;

    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    }

    //= Validation
    const validation = schema.safeParse(data);
    if (!validation.success) return validation.error.issues.forEach((issue: any) => toast.error(`${issue.path.join('.')}: ${issue.message}`));

    const responseData = await sendMessage(data);

    if (responseData) {
      toast.success(`Your message delivered successfully`);
      name.value = "";
      email.value = "";
      message.value = "";
    }
  }

  return (
    <div className={classes.form}>
      <input type="text" placeholder="Full Name" id="name" className={classes.half} />
      <input type="email" placeholder="Email Address" id="email" className={classes.half} />
      {/* <input type="text" placeholder="Subject" disabled /> */}
      <textarea cols={30} rows={8} placeholder="Message" id="message"></textarea>
      <button onClick={handleSendMessage}>Send Message <Icon icon="fa-regular:paper-plane" className="d-inline" /></button>
    </div>
  )
}

export default ContactForm