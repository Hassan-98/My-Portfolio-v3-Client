import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
//= Types
import { IWork } from '../../../types';
//= Styles
import classes from './works.module.scss';

interface IProps {
  worksPage?: boolean;
  data: IWork[]
}

function Works({ worksPage, data }: IProps) {
  function toggleView(event: React.MouseEvent<SVGSVGElement>, work: IWork) {
    const work_image = event.currentTarget.parentElement?.parentElement?.parentElement;
    const currentViewBtn = event.currentTarget;
    const otherViewBtn = event.currentTarget.nextElementSibling || event.currentTarget.previousElementSibling;
    const image = work_image?.querySelector('img')!;

    const desktop_img = work.images.desktop;
    const mobile_img = work.images.mobile;

    image.src = currentViewBtn.className.baseVal.includes('mobile') ? desktop_img : mobile_img;

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
                <Link href="/works/tcg">
                  <img src="/images/TCG-image.avif" alt="work image" loading="lazy" />
                </Link>
              </div>
              <div className={classes.work_info}>
                <h3>TCG Projects</h3>
                <p className={classes.description}>
                  All projects and themes i've developed or contributed to it for  '<u>Themescamp - TCG</u>'  company at the period of Apr 2022 to Oct 2023.
                  <br />
                  all projects are big themeforest themes for various categories such as <u><i>ecommerce</i></u>, <u><i>newspaper & magazine</i></u>, <u><i>personal portfolio</i></u>, <u><i>agency themes</i></u>, <u><i>multi-purpose templates</i></u>, etc...
                </p>
                <div className={classes.bottom}>
                  <div className={classes.actions}>
                    <Link href="/works/tcg">
                      <Icon icon="grommet-icons:view" className={`iconifiy-icon ${classes.view}`} /> View Works
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {
              data.map((work, index) => (
                <div className={classes.work} key={work._id}>
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
                          <Icon icon="basil:desktop-solid" className={`iconifiy-icon ${classes.hide}`} onClick={(e) => toggleView(e, work)} />
                          <Icon icon="teenyicons:mobile-solid" className={`iconifiy-icon`} onClick={(e) => toggleView(e, work)} />
                        </div>
                      </div>
                      <a href={work.links.demo ? work.links.demo : '#'} target="_blank" rel="noreferrer">
                        <img src={work.images.desktop} alt="work image" loading="lazy" />
                      </a>
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
                            <li key={stack._id} className={stack.stack.isNotCompitable ? classes.compitable : ''} data-tooltip={stack.stack.name} data-direction='bottom'>
                              <img src={stack.stack.image} alt="skill" loading="lazy" title={stack.stack.name} />
                            </li>
                          ))
                        }
                      </ul>
                      <div className={classes.actions}>
                        {
                          work.links.github &&
                          <a href={work.links.github} target="_blank" rel="noreferrer" data-tooltip="Visit github repo" data-direction='bottom'>
                            <Icon icon="mdi:github" className={`iconifiy-icon ${classes.github}`} />
                          </a>
                        }
                        {
                          work.links.apiRepo &&
                          <a href={work.links.apiRepo} target="_blank" rel="noreferrer" data-tooltip="Visit api repo" data-direction='bottom'>
                            <Icon icon="fluent:server-link-20-filled" className={`iconifiy-icon ${classes.github}`} />
                          </a>
                        }
                        {
                          work.links.demo &&
                          <a href={work.links.demo} target="_blank" rel="noreferrer" data-tooltip="View project demo" data-direction='bottom'>
                            <Icon icon="mdi:link-box" className={`iconifiy-icon ${classes.demo}`} />
                          </a>
                        }
                      </div>
                    </div>
                  </div>
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
                          <Icon icon="basil:desktop-solid" className={`iconifiy-icon ${classes.hide}`} onClick={(e) => toggleView(e, work)} />
                          <Icon icon="teenyicons:mobile-solid" className={`iconifiy-icon`} onClick={(e) => toggleView(e, work)} />
                        </div>
                      </div>
                      <a href={work.links.demo ? work.links.demo : '#'} target="_blank" rel="noreferrer">
                        <img src={work.images.desktop} alt="work image" loading="lazy" />
                      </a>
                    </div>
                  }
                </div>
              ))
            }
          </div>
          {
            !worksPage &&
            <Link href="/works" className={classes.view_more}><button><Icon icon="grommet-icons:view" className={`iconifiy-icon ${classes.demo}`} /> View alot more projects</button></Link>
          }
        </div>
      </div>
    </section>
  )
}

export default Works