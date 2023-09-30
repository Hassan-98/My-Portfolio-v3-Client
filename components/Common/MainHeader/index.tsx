import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
//= Styles
import classes from "./header.module.scss";

interface IProps {
  data: {
    jobTitle: string;
    descriptionText: string;
    pictureUrl: string;
  };
}

function Header({ data }: IProps) {
  return (
    <header className="container">
      <div className={classes.header}>
        <div className="row g-0 align-items-center">
          <div className="col-lg-7">
            <p className={classes.greeting}>Hi, <span>I am</span></p>
            <h1>Hassan Ali</h1>
            <h2>{data.jobTitle}</h2>
            <p>{data.descriptionText}</p>
            <Link href="/works">
              <button className="btn">
                <Icon icon="octicon:briefcase-16" className="iconifiy-icon me-2" />
                Check out my works!
              </button>
            </Link>
          </div>
          <div className="col-lg-5">
            <div className={classes.bg} style={{ backgroundImage: `url(${data.pictureUrl})` }}></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header