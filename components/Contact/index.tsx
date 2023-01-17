import React from 'react';
//= Components
import Form from './Form';
import Info from './Info';
//= Styles
import classes from './contact.module.scss';

function Contact() {
  return (
    <section>
      <div className="container">
        <div className={classes.contact}>
          <Info />
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact