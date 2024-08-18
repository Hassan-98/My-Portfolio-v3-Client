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

    console.log(currentViewBtn.className);


    image.src = currentViewBtn.className.baseVal.includes('mobile') ? desktop_img : mobile_img;

    currentViewBtn.classList.add(classes.hide);
    otherViewBtn!.classList.remove(classes.hide);

    work_image?.classList.toggle(classes.mobile_view);
  }

  function descriptionParser(description: string): string {
    let formattedText = description.replaceAll(/\*\*\*(.*?)\*\*\*/g, '<b style="display: block;">$1</b>');
    formattedText = formattedText.replaceAll(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    formattedText = formattedText.replaceAll(/--(.*?)--/g, '<li>$1</li>');
    formattedText = formattedText.replaceAll(/\/\/(.*?)\/\//g, '<i>$1</i>');
    formattedText = formattedText.replaceAll(/__(.*?)__/g, '<u>$1</u>');
    formattedText = formattedText.replaceAll(/\[(.*?)\]/g, '<a href="$1" target="_blank">$1</a>');

    let indexofList = formattedText.indexOf('<li>');
    let indexofListEnd = formattedText.lastIndexOf('</li>');

    if (indexofList > -1) {
      formattedText = formattedText.slice(0, indexofList) + '<ul>' + formattedText.slice(indexofList, indexofListEnd + 5) + '</ul>' + formattedText.slice(indexofListEnd + 6);
    }

    return formattedText;
  }

  return (
    <section>
      <div className="container">
        <div className={`${classes.works} ${worksPage ? classes.noPaddingTop : ''}`}>
          {
            !worksPage &&
            <h2>
              <span />
              Projects
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
                <h3>
                  <a href="/works/tcg">
                    <Icon icon="fontisto:envato" /> Themeforest Projects
                  </a>
                </h3>
                <small>(12 Big Projects)</small>
                <p className={classes.description}>
                  All projects and themes i've developed or contributed to it for  '<u>Themescamp - TCG</u>'  company at the period of Apr 2022 to Oct 2023.
                  <hr style={{ marginBottom: '10px' }} />
                  All projects are big themeforest themes for various categories such as
                  <ul>
                    <li><i>ecommerce</i></li>
                    <li><i>newspaper & magazine</i></li>
                    <li><i>personal portfolio</i></li>
                    <li><i>agency themes</i></li>
                    <li><i>multi-purpose templates</i>, etc...</li>
                  </ul>
                </p>
                <div className={classes.bottom}>
                  <div className={classes.actions}>
                    <Link href="/works/tcg">
                      <Icon icon="grommet-icons:view" className={`iconifiy-icon ${classes.view}`} /> View All Projects
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
                        <div className={classes.switch_view} data-tooltip={"Switch view"} data-direction='left'>
                          <Icon icon="basil:desktop-solid" className={`iconifiy-icon mobile ${classes.hide}`} onClick={(e) => toggleView(e, work)} />
                          <Icon icon="teenyicons:mobile-solid" className={`iconifiy-icon`} onClick={(e) => toggleView(e, work)} />
                        </div>
                      </div>
                      <a href={work.links.demo ? work.links.demo : '#'} target="_blank" rel="noreferrer">
                        <img src={work.images.desktop} alt="work image" loading="lazy" />
                      </a>
                    </div>
                  }
                  <div className={classes.work_info}>
                    <h3>
                      <a href={work.links.demo ? work.links.demo : '#'} target="_blank" rel="noreferrer">
                        {work.name}
                      </a>
                    </h3>
                    <p className={classes.description} dangerouslySetInnerHTML={{ __html: descriptionParser(work.description) }}></p>
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
                          <a href={work.links.github} target="_blank" rel="noreferrer" data-tooltip="Visit github repo" data-direction='bottom' aria-label='Visit github repo'>
                            <Icon icon="mdi:github" className={`iconifiy-icon ${classes.github}`} />
                          </a>
                        }
                        {
                          work.links.apiRepo &&
                          <a href={work.links.apiRepo} target="_blank" rel="noreferrer" data-tooltip="Visit api repo" data-direction='bottom' aria-label='Visit api repo'>
                            <Icon icon="fluent:server-link-20-filled" className={`iconifiy-icon ${classes.github}`} />
                          </a>
                        }
                        {
                          work.links.demo &&
                          <a href={work.links.demo} target="_blank" rel="noreferrer" data-tooltip="View project demo" data-direction='bottom' aria-label='View project demo'>
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
                        <div className={classes.switch_view} data-tooltip={"Switch view"} data-direction='left'>
                          <Icon icon="basil:desktop-solid" className={`iconifiy-icon mobile ${classes.hide}`} onClick={(e) => toggleView(e, work)} />
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