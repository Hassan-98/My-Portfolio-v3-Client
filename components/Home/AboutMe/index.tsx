import React from 'react';
//= Styles
import classes from './aboutme.module.scss';

function AboutMe() {
  return (
    <section>
      <div className="container">
        <div className={classes.about_me}>
          <div className="row g-0">
            <div className={`col-lg-6 col-md-12 ${classes.years_col}`}>
              <div className={classes.experience_years}>
                <div className={classes.year}><span>2</span><span>+</span></div>
                <p>years experience</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={classes.info_box}>
                <p>Hassan Ali</p>
                <h3>MERN Stack Developer</h3>

                <p>Hello! My name is Hassan, a <span className={classes.highlight}>self-taught</span> software engineer based on Egypt, with <span className={classes.highlight}>+2 years experience</span> as a professional Web developer, specializing in <span className={classes.highlight}>MERN Stack web development</span>, Welcome to my corner of the internet.</p>

                <p>My interest in web development started back in <span className={classes.highlight}>2018</span> when I decided to try to create my first personal website — turns out hacking together a custom website taught me a lot about HTML & CSS!</p>

                <p>Here are a few technologies I’ve been working with recently:</p>

                <div className={classes.skills}>
                  <div className={classes.skill}>
                    <img src="/images/stack-icons/nodejs.svg" alt="Node.js" loading="lazy" />
                    <span>Node.js</span>
                  </div>
                  <div className={classes.skill}>
                    <img src="/images/stack-icons/mongodb.svg" alt="MongoDB" loading="lazy" />
                    <span>MongoDB</span>
                  </div>
                  <div className={classes.skill}>
                    <img src="/images/stack-icons/react.svg" alt="React" loading="lazy" />
                    <span>React</span>
                  </div>
                  <div className={classes.skill}>
                    <img src="/images/stack-icons/vue.svg" alt="Vue" loading="lazy" />
                    <span>Vue</span>
                  </div>
                  <div className={classes.skill}>
                    <img src="/images/stack-icons/typescript.svg" alt="TypeScript" loading="lazy" />
                    <span>TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe