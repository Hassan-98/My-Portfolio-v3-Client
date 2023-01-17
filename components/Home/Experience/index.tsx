import React from 'react';
//= Styles
import classes from './experience.module.scss';

interface IProps {
  noTitle?: boolean;
}

function Experience({ noTitle }: IProps) {
  return (
    <section>
      <div className="container">
        <div className={`${classes.experience} ${noTitle ? classes.noPadding : ''}`}>
          {
            !noTitle &&
            <h2>
              <span />
              Experience
              <span />
            </h2>
          }
          <div className={classes.experiences}>
            <div className={classes.exp}>
              <h3><i className="fa-light fa-briefcase"></i> Front End Developer <span className={classes.at}>@</span> <span className={classes.company}>TCG</span></h3>
              <p className={classes.time_range}>Apr 2022 - Present</p>
              <ul className={classes.job_items}>
                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li>Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript</li>
                <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
              </ul>
            </div>
            <div className={classes.exp}>
              <h3><i className="fa-light fa-briefcase"></i> Front End Instructor <span className={classes.at}>@</span> <span className={classes.company}>Meshkat Nour</span></h3>
              <p className={classes.time_range}>Sep 2022 - Dec 2022</p>
              <ul className={classes.job_items}>
                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li>Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript</li>
              </ul>
            </div>
            <div className={classes.exp}>
              <h3><i className="fa-light fa-briefcase"></i> Front End Developer <span className={classes.at}>@</span> <span className={classes.company}>Freelancer</span></h3>
              <p className={classes.time_range}>Feb 2021 - Apr 2022</p>
              <ul className={classes.job_items}>
                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li>Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript</li>
                <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience