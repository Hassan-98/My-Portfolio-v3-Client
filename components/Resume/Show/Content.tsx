import React from 'react';
//= Styles
import classes from './show.module.scss';

function Content() {
  return (
    <div className={classes.content}>
      <div className={classes.metadata}>
        <h1>Hassan Ali</h1>
        <h2>MERN Stack Web Developer</h2>
        <div className={classes.links}>
          <div className={classes.link}>
            <i className="fi fi-br-at me-1"></i>
            7assan.3li1998@gmail.com
          </div>
          <div className={classes.link}>
            <i className="fi fi-br-phone-call me-1"></i>
            +201146321817
          </div>
          <div className={classes.link}>
            <i className="fi fi-brands-github me-1"></i>
            /Hassan 98
          </div>
          <div className={classes.link}>
            <i className="fi fi-brands-linkedin me-1"></i>
            /hassan1998
          </div>
          {/* <div className={classes.link}>
            <i className="fi fi-brands-twitter me-1"></i>
            /aeae9992
          </div> */}
        </div>
      </div>

      <div className={classes.section}>
        <h3>Summary</h3>
        <p>I’m Hassan Ali, MERN Stack web developer from Egypt, Innovative Web Developer with 2 years of experience in website design and development. Demonstrated talent for front and back end web development to optimize online presence. Expert in languages such as HTML, CSS, JavaScript and Node.js as well as React and Vue frameworks.</p>
      </div>

      <div className={classes.section}>
        <h3>Skills</h3>
        <div className={classes.skill_set}>
          <span>Proficient</span>
          <p>HTML5 - CSS3 - JavaScript (ES6+) - OOP - jQuery - Bootstrap - Sass - Vue.js - Nuxt.js - React.js - Next.js - Git - Github - Node.js - Express - MongoDB</p>
        </div>
        <div className={classes.skill_set}>
          <span>Moderate</span>
          <p>TypeScript - Jasmine - PostgreSQL</p>
        </div>
      </div>

      <div className={classes.section}>
        <h3>Work Experience</h3>
        <div className={classes.experience}>
          <div className={classes.title}>
            <p>Front End Web Developer <span>@</span> TCG</p>
            <p><i className="fi fi-rr-calendar-clock me-1"></i> Apr 2022 - Present</p>
          </div>
          <ul className={classes.description}>
            <li>Transformed native HTML CSS jQuery web templates into multiple frameworks, such as Vue Nuxt.js and React Next.js</li>
            <li>Produced websites compatible with multiple browsers.</li>
          </ul>
        </div>
        <div className={classes.experience}>
          <div className={classes.title}>
            <p>Front End Web Developer <span>@</span> Freelancer</p>
            <p><i className="fi fi-rr-calendar-clock me-1"></i> Dec 2021 - Apr 2022</p>
          </div>
          <ul className={classes.description}>
            <li>Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.</li>
            <li>Guided customers on project stages and iterations with input on best practices, user needs and technology capabilities.</li>
          </ul>
        </div>
        <div className={classes.experience}>
          <div className={classes.title}>
            <p>Front End Web Developer <span>@</span> Freelancer</p>
            <p><i className="fi fi-rr-calendar-clock me-1"></i> Dec 2021 - Apr 2022</p>
          </div>
          <ul className={classes.description}>
            <li>Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.</li>
            <li>Guided customers on project stages and iterations with input on best practices, user needs and technology capabilities.</li>
          </ul>
        </div>
      </div>

      <div className={classes.section}>
        <h3>Education</h3>
        <div className={classes.education}>
          <div className={classes.title}>
            <p>Bachelor s Degree of Engineering <span>from</span> Sohag University</p>
            <p><i className="fi fi-rr-calendar-clock me-1"></i> Sep 2016 - Jul 2021</p>
          </div>
          <p className={classes.description}></p>
        </div>
        <div className={classes.education}>
          <div className={classes.title}>
            <p>Full Stack Web Development Nanodegree <span>from</span> Udacity</p>
            <p><i className="fi fi-rr-calendar-clock me-1"></i> Aug 2016 - Sep 2022</p>
          </div>
          <p className={classes.description}>
            Udacity Professional development completed in Full Stack Web Development using Typescript, Node.js Express Unit testing and PostgreSQL and AWS Services
          </p>
        </div>
        <div className={classes.education}>
          <div className={classes.title}>
            <p>Full Stack Web Development Specialization <span>from</span> Coursera</p>
            <p><i className="fi fi-rr-calendar-clock me-1"></i> Apr 2021 - May 2021</p>
          </div>
          <p className={classes.description}>
            Hong Kong University of Science, Coursera Completed professional development in Full Stack Development With Bootstrap
            React, Node.js Express.js and MongoDB
          </p>
        </div>
        <div className={classes.education}>
          <div className={classes.title}>
            <p>Full Stack Web Development Specialization <span>from</span> Coursera</p>
            <p><i className="fi fi-rr-calendar-clock me-1"></i> Apr 2021 - May 2021</p>
          </div>
          <p className={classes.description}>
            Hong Kong University of Science, Coursera Completed professional development in Full Stack Development With Bootstrap
            React, Node.js Express.js and MongoDB
          </p>
        </div>
      </div>

      <div className={classes.section}>
        <h3>Projects</h3>
        <div className={classes.project}>
          <div className={classes.title}>
            <p>Markety Online Store</p>
            <div className={classes.links}>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-brands-github me-1"></i> Github</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-arrow-up-right-from-square me-1"></i> Demo</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-database me-1"></i> API</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-document-signed me-1"></i> Docs</a>
            </div>
          </div>
          <p className={classes.description}>
            Hong Kong University of Science, Coursera Completed professional development in Full Stack Development With Bootstrap
            React, Node.js Express.js and MongoDB
          </p>
        </div>
        <div className={classes.project}>
          <div className={classes.title}>
            <p>Markety Online Store</p>
            <div className={classes.links}>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-brands-github me-1"></i> Github</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-arrow-up-right-from-square me-1"></i> Demo</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-database me-1"></i> API</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-document-signed me-1"></i> Docs</a>
            </div>
          </div>
          <p className={classes.description}>
            Hong Kong University of Science, Coursera Completed professional development in Full Stack Development With Bootstrap
            React, Node.js Express.js and MongoDB
          </p>
        </div>
        <div className={classes.project}>
          <div className={classes.title}>
            <p>Markety Online Store</p>
            <div className={classes.links}>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-brands-github me-1"></i> Github</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-arrow-up-right-from-square me-1"></i> Demo</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-database me-1"></i> API</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-document-signed me-1"></i> Docs</a>
            </div>
          </div>
          <p className={classes.description}>
            Hong Kong University of Science, Coursera Completed professional development in Full Stack Development With Bootstrap
            React, Node.js Express.js and MongoDB
          </p>
        </div>
        <div className={classes.project}>
          <div className={classes.title}>
            <p>Markety Online Store</p>
            <div className={classes.links}>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-brands-github me-1"></i> Github</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-arrow-up-right-from-square me-1"></i> Demo</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-database me-1"></i> API</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-document-signed me-1"></i> Docs</a>
            </div>
          </div>
          <p className={classes.description}>
            Hong Kong University of Science, Coursera Completed professional development in Full Stack Development With Bootstrap
            React, Node.js Express.js and MongoDB
          </p>
        </div>
        <div className={classes.project}>
          <div className={classes.title}>
            <p>Markety Online Store</p>
            <div className={classes.links}>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-brands-github me-1"></i> Github</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-arrow-up-right-from-square me-1"></i> Demo</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-database me-1"></i> API</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-document-signed me-1"></i> Docs</a>
            </div>
          </div>
          <p className={classes.description}>
            Hong Kong University of Science, Coursera Completed professional development in Full Stack Development With Bootstrap
            React, Node.js Express.js and MongoDB
          </p>
        </div>
        <div className={classes.project}>
          <div className={classes.title}>
            <p>Markety Online Store</p>
            <div className={classes.links}>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-brands-github me-1"></i> Github</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-arrow-up-right-from-square me-1"></i> Demo</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-database me-1"></i> API</a>
              <a href="http://markety.ml" target="_blank" rel="noreferrer"><i className="fi fi-br-document-signed me-1"></i> Docs</a>
            </div>
          </div>
          <p className={classes.description}>
            Hong Kong University of Science, Coursera Completed professional development in Full Stack Development With Bootstrap
            React, Node.js Express.js and MongoDB
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content