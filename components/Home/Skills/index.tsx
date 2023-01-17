import React from 'react';
//= Styles
import classes from './skills.module.scss';

interface IProps {
  smallerPadding?: boolean;
}

function Skills({ smallerPadding }: IProps) {
  function handleTabClick(event: React.MouseEvent) {
    document.querySelectorAll(`.${classes.item}`).forEach(element => {
      element.classList.remove(classes.active);
    });
    event.currentTarget.classList.add(classes.active);


    document.querySelectorAll(`.${classes.tab}`).forEach(element => {
      element.classList.remove(classes.active);
    });
    document.getElementById(event.currentTarget.id.split('-btn')[0])!.classList.add(classes.active);
  }

  return (
    <section>
      <div className="container">
        <div className={`${classes.skills} ${smallerPadding ? classes.smallerPadding : ''}`}>
          <h2>
            <span />
            Skills
            <span />
          </h2>
          <div className={classes.skills_tabs_container}>
            <div className={classes.skills_items}>
              <div className={`${classes.item} ${classes.active}`} onClick={handleTabClick} id="front-end-btn">
                <img src="/images/browser.png" alt="client side" loading="lazy" />
                <p>Front End</p>
              </div>
              <div className={classes.item} onClick={handleTabClick} id="back-end-btn">
                <img src="/images/server.svg" alt="server side" loading="lazy" />
                <p>Back End</p>
              </div>
              <div className={classes.item} onClick={handleTabClick} id="tools-btn">
                <img src="/images/tools.svg" alt="tools" loading="lazy" />
                <p>Tools</p>
              </div>
            </div>
            <div className={classes.skills_tabs}>
              <div className={`${classes.tab} ${classes.active}`} id="front-end">
                <div className={classes.section}>
                  <h3 className={classes.sub_title}>
                    Proficient:
                  </h3>
                  <ul>
                    <li>
                      <img src="/images/stack-icons/html.svg" alt="skill" loading="lazy" />
                      HTML
                    </li>
                    <li>
                      <img src="/images/stack-icons/css.svg" alt="skill" loading="lazy" />
                      CSS
                    </li>
                    <li>
                      <img src="/images/stack-icons/javascript.svg" alt="skill" loading="lazy" />
                      JavaScript
                    </li>
                    <li>
                      <img src="/images/stack-icons/typescript.svg" alt="skill" loading="lazy" />
                      TypeScript
                    </li>
                    <li>
                      <img src="/images/stack-icons/jquery.svg" alt="skill" loading="lazy" />
                      jQuery
                    </li>
                    <li>
                      <img src="/images/stack-icons/bootstrap.svg" alt="skill" loading="lazy" />
                      Bootstrap
                    </li>
                    <li>
                      <img src="/images/stack-icons/sass.svg" alt="skill" loading="lazy" />
                      Sass
                    </li>
                    <li>
                      <img src="/images/stack-icons/react.svg" alt="skill" loading="lazy" />
                      React
                    </li>
                    <li>
                      <img src="/images/stack-icons/redux.svg" alt="skill" loading="lazy" />
                      Redux
                    </li>
                    <li>
                      <img src="/images/stack-icons/next.svg" alt="skill" loading="lazy" />
                      Nextjs
                    </li>
                    <li>
                      <img src="/images/stack-icons/vue.svg" alt="skill" loading="lazy" />
                      Vue
                    </li>
                    <li>
                      <img src="/images/stack-icons/nuxt.svg" alt="skill" loading="lazy" />
                      Nuxt
                    </li>
                  </ul>
                </div>
                <div className={classes.section}>
                  <h3 className={classes.sub_title}>
                    Moderate:
                  </h3>
                  <ul>
                    <li>
                      <div className={classes.compitable}><img src="/images/stack-icons/material-ui.svg" alt="skill" loading="lazy" /></div>
                      Material UI
                    </li>
                    <li>
                      <img src="/images/stack-icons/gatsby.svg" alt="skill" loading="lazy" />
                      Gatsby
                    </li>
                    <li>
                      <img src="/images/stack-icons/jest.svg" alt="skill" loading="lazy" />
                      Jest
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.tab} id="back-end">
                <div className={classes.section}>
                  <h3 className={classes.sub_title}>
                    Proficient:
                  </h3>
                  <ul>
                    <li>
                      <img src="/images/stack-icons/nodejs.svg" alt="skill" loading="lazy" />
                      Node.js
                    </li>
                    <li>
                      <div className={classes.compitable}><img src="/images/stack-icons/express.svg" alt="skill" loading="lazy" /></div>
                      Express
                    </li>
                    <li>
                      <img src="/images/stack-icons/mongodb.svg" alt="skill" loading="lazy" />
                      MongoDB
                    </li>
                    <li>
                      <img src="/images/stack-icons/typescript.svg" alt="skill" loading="lazy" />
                      TypeScript
                    </li>
                  </ul>
                </div>
                <div className={classes.section}>
                  <h3 className={classes.sub_title}>
                    Moderate:
                  </h3>
                  <ul>
                    <li>
                      <div className={classes.compitable}><img src="/images/stack-icons/prisma.svg" alt="skill" loading="lazy" /></div>
                      Prisma
                    </li>
                    <li>
                      <img src="/images/stack-icons/jest.svg" alt="skill" loading="lazy" />
                      Jest
                    </li>
                    <li>
                      <img src="/images/stack-icons/postgresql.svg" alt="skill" loading="lazy" />
                      PostgreSQL
                    </li>
                  </ul>
                </div>
              </div>
              <div className={classes.tab} id="tools">
                <div className={classes.section}>
                  <h3 className={classes.sub_title}>
                    Proficient:
                  </h3>
                  <ul>
                    <li>
                      <img src="/images/stack-icons/git.svg" alt="skill" loading="lazy" />
                      Git
                    </li>
                    <li>
                      <img src="/images/stack-icons/github.svg" alt="skill" loading="lazy" />
                      GitHub
                    </li>
                    <li>
                      <img src="/images/stack-icons/npm.svg" alt="skill" loading="lazy" />
                      NPM
                    </li>
                    <li>
                      <img src="/images/stack-icons/yarn.svg" alt="skill" loading="lazy" />
                      Yarn
                    </li>
                    <li>
                      <div className={classes.compitable}><img src="/images/stack-icons/vercel.svg" alt="skill" loading="lazy" /></div>
                      Vercel
                    </li>
                  </ul>
                </div>
                <div className={classes.section}>
                  <h3 className={classes.sub_title}>
                    Moderate:
                  </h3>
                  <ul>
                    <li>
                      <img src="/images/stack-icons/netlify.svg" alt="skill" loading="lazy" />
                      Netlify
                    </li>
                    <li>
                      <img src="/images/stack-icons/amazon-aws.svg" alt="skill" loading="lazy" />
                      AWS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills