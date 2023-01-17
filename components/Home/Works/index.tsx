import React from 'react';
import Link from 'next/link';
//= Styles
import classes from './works.module.scss';

interface IProps {
  worksPage?: boolean;
}

function Works({ worksPage }: IProps) {
  function toggleView(event: React.MouseEvent) {
    const work_image = event.currentTarget.parentElement?.parentElement?.parentElement;
    const currentViewBtn = event.currentTarget;
    const otherViewBtn = event.currentTarget.nextElementSibling || event.currentTarget.previousElementSibling;
    const image = work_image?.querySelector('img')!;

    const desktop_img = "https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/gp.webp_1651143797909?alt=media";
    const mobile_img = "/images/mobile-gp.png";

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
            <div className={classes.work}>
              <div className={classes.work_image}>
                <div className={classes.topbar}>
                  <div className={classes.actions}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={classes.search}>
                    <span>https://markety.ml</span>
                  </div>
                  <div className={classes.switch_view}>
                    <i className="fa-solid fa-desktop" title="toggle desktop view" onClick={toggleView}></i>
                    <i className={`fa-sharp fa-solid fa-mobile ${classes.hide}`} title="toggle mobile view" onClick={toggleView}></i>
                  </div>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/screencapture-markety-ml-2022-04-21-08_28_1333.png_1651143642568?alt=media" alt="work image" loading="lazy" />
              </div>
              <div className={classes.work_info}>
                <h3>Markety</h3>
                <p className={classes.description}>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                </p>
                <p className={classes.stack}>Built With</p>
                <div className={classes.bottom}>
                  <ul>
                    <li>
                      <img src="/images/stack-icons/nodejs.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/react.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/sass.svg" alt="skill" loading="lazy" />
                    </li>
                    <li className={classes.compitable}>
                      <img src="/images/stack-icons/material-ui.svg" alt="skill" loading="lazy" />
                    </li>
                  </ul>
                  <div className={classes.actions}>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      <i className={`fa-brands fa-github ${classes.github}`} title="Github Repo"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      <i className={`fa-solid fa-server ${classes.github}`} title="API Github Repo"></i>
                    </a>
                    <a href="https://hassanali.tk" target="_blank" rel="noreferrer">
                      <i className={`fa-regular fa-arrow-up-right-from-square ${classes.demo}`} title="View Demo"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.work}>
              <div className={classes.work_info}>
                <h3>Ajil corp.</h3>
                <p className={classes.description}>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.
                </p>
                <p className={classes.stack}>Built With</p>
                <div className={classes.bottom}>
                  <ul>
                    <li>
                      <img src="/images/stack-icons/react.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/bootstrap.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/sass.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/typescript.svg" alt="skill" loading="lazy" />
                    </li>
                  </ul>
                  <div className={classes.actions}>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      <i className={`fa-brands fa-github ${classes.github}`} title="Github Repo"></i>
                    </a>
                    <a href="https://hassanali.tk" target="_blank" rel="noreferrer">
                      <i className={`fa-solid fa-arrow-up-right-from-square ${classes.demo}`} title="View Demo"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={classes.work_image}>
                <div className={classes.topbar}>
                  <div className={classes.actions}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={classes.search}>
                    <span>https://ajel.hassanali.tk</span>
                  </div>
                  <div className={classes.switch_view}>
                    <i className="fa-solid fa-desktop" title="toggle desktop view" onClick={toggleView}></i>
                    <i className={`fa-sharp fa-solid fa-mobile ${classes.hide}`} title="toggle mobile view" onClick={toggleView}></i>
                  </div>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/ajil-c.png_1668984205175?alt=media" alt="work image" loading="lazy" />
              </div>
            </div>
            <div className={classes.work}>
              <div className={classes.work_image}>
                <div className={classes.topbar}>
                  <div className={classes.actions}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={classes.search}>
                    <span>https://gplate.hassanali.tk</span>
                  </div>
                  <div className={classes.switch_view}>
                    <i className="fa-solid fa-desktop" title="toggle desktop view" onClick={toggleView}></i>
                    <i className={`fa-sharp fa-solid fa-mobile ${classes.hide}`} title="toggle mobile view" onClick={toggleView}></i>
                  </div>
                </div>
                <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/gp.webp_1651143797909?alt=media" alt="work image" loading="lazy" />
              </div>
              <div className={classes.work_info}>
                <h3>GP Resturant</h3>
                <p className={classes.description}>
                  A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks.
                </p>
                <p className={classes.stack}>Built With</p>
                <div className={classes.bottom}>
                  <ul>
                    <li>
                      <img src="/images/stack-icons/react.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/bootstrap.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/sass.svg" alt="skill" loading="lazy" />
                    </li>
                  </ul>
                  <div className={classes.actions}>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      <i className={`fa-brands fa-github ${classes.github}`} title="Github Repo"></i>
                    </a>
                    <a href="https://hassanali.tk" target="_blank" rel="noreferrer">
                      <i className={`fa-solid fa-arrow-up-right-from-square ${classes.demo}`} title="View Demo"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.work}>
              <div className={classes.work_info}>
                <h3>Edu EMS System</h3>
                <p className={classes.description}>
                  A web app for visualizing personalized Spotify data. View your top artists recently played tracks, and detailed audio information about each track.
                </p>
                <p className={classes.description}>
                  Create and save new playlists of recommended tracks based on your existing playlists and more.
                </p>
                <p className={classes.stack}>Built With</p>
                <div className={classes.bottom}>
                  <ul>
                    <li>
                      <img src="/images/stack-icons/nodejs.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/react.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/bootstrap.svg" alt="skill" loading="lazy" />
                    </li>
                    <li>
                      <img src="/images/stack-icons/sass.svg" alt="skill" loading="lazy" />
                    </li>
                  </ul>
                  <div className={classes.actions}>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                      <i className={`fa-brands fa-github ${classes.github}`} title="Github Repo"></i>
                    </a>
                    <a href="https://hassanali.tk" target="_blank" rel="noreferrer">
                      <i className={`fa-solid fa-arrow-up-right-from-square ${classes.demo}`} title="View Demo"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className={classes.work_image}>
                <div className={classes.topbar}>
                  <div className={classes.actions}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={classes.search}>
                    <span>https://edu-ems.cf</span>
                  </div>
                  <div className={classes.switch_view}>
                    <i className="fa-solid fa-desktop" title="toggle desktop view" onClick={toggleView}></i>
                    <i className={`fa-sharp fa-solid fa-mobile ${classes.hide}`} title="toggle mobile view" onClick={toggleView}></i>
                  </div>
                </div>
                <img src="/images/edu-ems.png" alt="work image" loading="lazy" />
              </div>
            </div>
          </div>
          {
            !worksPage &&
            <Link href="/works"><button><i className="fa-regular fa-eye me-1"></i> View All Works</button></Link>
          }
        </div>
      </div>
    </section>
  )
}

export default Works