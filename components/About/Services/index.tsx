import React from 'react';
import { CodingIcon, SeoIcon, CleanIcon, ResponsiveIcon, CreativeIcon, SupportIcon, DotsIcon } from 'components/Common/SVGs'
//= Styles
import classes from './services.module.scss';

function Services() {
  return (
    <section className={classes.services}>
      <div className="container">
        <h2>
          <span />
          Services
          <span />
        </h2>
        <div className={classes.container}>
          <div className={classes.service}>
            <div className={classes.icon}>
              <CodingIcon />
            </div>
            <h3>Development</h3>
            <p>I'm expert at developing and building any kind of websites or web applications</p>
            <div className={classes.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={classes.service}>
            <div className={classes.icon}>
              <SeoIcon />
            </div>
            <h3>SEO</h3>
            <p>I write SEO friendly code that helps search engines find and rank your website</p>
            <div className={classes.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={classes.service}>
            <div className={classes.icon}>
              <CleanIcon />
            </div>
            <h3>Clean Code</h3>
            <p>I write clean and organized code that makes website fast and easy to maintain</p>
            <div className={classes.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={classes.service}>
            <div className={classes.icon}>
              <ResponsiveIcon />
            </div>
            <h3>Responsive Design</h3>
            <p>I'm expert at developing and building responsive websites that suites all screens</p>
            <div className={classes.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={classes.service}>
            <div className={classes.icon}>
              <CreativeIcon />
            </div>
            <h3>Creative Work</h3>
            <p>I'm love creating bright websites ideas and develop & build it to be real websites</p>
            <div className={classes.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={classes.service}>
            <div className={classes.icon}>
              <SupportIcon />
            </div>
            <h3>Support</h3>
            <p>I always support and help my clients to make the best web development service</p>
            <div className={classes.dots}>
              <DotsIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services