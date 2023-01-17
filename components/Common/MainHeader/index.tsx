import React from 'react';
//= Styles
import classes from "./header.module.scss";

function Header() {
  return (
    <header className="container">
      <div className={classes.header}>
        <div className="row g-0 align-items-center">
          <div className="col-lg-7">
            <p className={classes.greeting}>Hi, <span>I am</span></p>
            <h1>Hassan Ali</h1>
            <h2>Software Engineer</h2>
            <p>I'm a self-taught software engineer based on Egypt, with over 2 years experience specializing in MERN Stack web development.</p>
            <button className="btn">
              <i className="fa-regular fa-briefcase me-2"></i>
              Check out my works!
            </button>
          </div>
          <div className="col-lg-5">
            <div className={classes.bg}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header