import React from 'react';
//= Components
import Topbar from './Topbar';
import Content from './Content';
//= Styles
import classes from './show.module.scss';

function Show() {
  return (
    <section className={classes.resume}>
      <Topbar />
      <Content />
    </section>
  )
}

export default Show