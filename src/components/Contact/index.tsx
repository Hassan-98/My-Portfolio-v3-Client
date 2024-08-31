import React from 'react';
//= Components
import Form from './Form';
import Info from './Info';
//= Styles
import cls from './contact.module.scss';

function Contact() {
  return (
    <section>
      <div className="container">
        <div className={cls.contact}>
          <Info />
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact