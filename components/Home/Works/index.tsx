import React from 'react';
import Link from 'next/link';
//= Types
import { IWork } from '../../../types';
//= Styles
import classes from './works.module.scss';

interface IProps {
  worksPage?: boolean;
  data: IWork[]
}

function Works({ worksPage, data }: IProps) {
  function toggleView(event: React.MouseEvent, work: IWork) {
    const work_image = event.currentTarget.parentElement?.parentElement?.parentElement;
    const currentViewBtn = event.currentTarget;
    const otherViewBtn = event.currentTarget.nextElementSibling || event.currentTarget.previousElementSibling;
    const image = work_image?.querySelector('img')!;

    const desktop_img = work.images.desktop;
    const mobile_img = work.images.mobile;

    image.src = currentViewBtn.className.includes('mobile') ? desktop_img : mobile_img;

    currentViewBtn.classList.add(classes.hide);
    otherViewBtn!.classList.remove(classes.hide);

    work_image?.classList.toggle(classes.mobile_view);
  }

  return (
    <section>
      <div className="container">
        <div className={`${classes.works} ${worksPage ? classes.noPaddingTop : ''}`}>
          {
            !worksPage &&
            <h2>
              <span />
              Works
              <span />
            </h2>
          }
          <div className={classes.works_container}>
            {
              data.map((work, index) => (
                <div className={classes.work} key={work._id}>
                  {
                    index % 2 === 0 &&
                    <div className={classes.work_image}>
                      <div className={classes.topbar}>
                        <div className={classes.actions}>
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className={classes.search}>
                          <span>{work.links.demo}</span>
                        </div>
                        <div className={classes.switch_view}>
                          <i className="fa-solid fa-desktop" title="toggle desktop view" onClick={(e) => toggleView(e, work)}></i>
                          <i className={`fa-solid fa-mobile-screen-button ${classes.hide}`} title="toggle mobile view" onClick={(e) => toggleView(e, work)}></i>
                        </div>
                      </div>
                      <img src={work.images.desktop} alt="work image" loading="lazy" />
                    </div>
                  }
                  <div className={classes.work_info}>
                    <h3>{work.name}</h3>
                    <p className={classes.description}>
                      {work.description}
                    </p>
                    <p className={classes.stack}>Built With</p>
                    <div className={classes.bottom}>
                      <ul>
                        {
                          work.stack.map((stack) => (
                            <li key={stack._id} className={stack.stack.isNotCompitable ? classes.compitable : ''}>
                              <img src={stack.stack.image} alt="skill" loading="lazy" title={stack.stack.name} />
                            </li>
                          ))
                        }
                      </ul>
                      <div className={classes.actions}>
                        {
                          work.links.github &&
                          <a href={work.links.github} target="_blank" rel="noreferrer">
                            <i className={`fa-brands fa-github ${classes.github}`} title="Github Repo"></i>
                          </a>
                        }
                        {
                          work.links.apiRepo &&
                          <a href={work.links.apiRepo} target="_blank" rel="noreferrer">
                            <i className={`fa-solid fa-server ${classes.github}`} title="API Github Repo"></i>
                          </a>
                        }
                        {
                          work.links.demo &&
                          <a href={work.links.demo} target="_blank" rel="noreferrer">
                            <i className={`fa-solid fa-arrow-up-right-from-square ${classes.demo}`} title="View Demo"></i>
                          </a>
                        }
                      </div>
                    </div>
                  </div>
                  {
                    index % 2 !== 0 &&
                    <div className={classes.work_image}>
                      <div className={classes.topbar}>
                        <div className={classes.actions}>
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className={classes.search}>
                          <span>{work.links.demo}</span>
                        </div>
                        <div className={classes.switch_view}>
                          <i className="fa-solid fa-desktop" title="toggle desktop view" onClick={(e) => toggleView(e, work)}></i>
                          <i className={`fa-solid fa-mobile-screen-button ${classes.hide}`} title="toggle mobile view" onClick={(e) => toggleView(e, work)}></i>
                        </div>
                      </div>
                      <img src={work.images.desktop} alt="work image" loading="lazy" />
                    </div>
                  }
                </div>
              ))
            }
          </div>
          {
            !worksPage &&
            <Link href="/works"><button><i className="fa-regular fa-eye me-1"></i> View All Portfolio</button></Link>
          }
        </div>
      </div>
    </section>
  )
}

export default Works