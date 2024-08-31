'use client';
import React from 'react';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
//= Types
import { IWork } from '@/types';
//= Styles
import cls from './works.module.scss';

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

    currentViewBtn.classList.add(cls.hide);
    otherViewBtn!.classList.remove(cls.hide);

    work_image?.classList.toggle(cls.mobile_view);
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
        <div className={`${cls.works} ${worksPage ? cls.noPaddingTop : ''}`}>
          {
            !worksPage &&
            <h2>
              <span />
              Projects
              <span />
            </h2>
          }
          <div className={cls.works_container}>
            <div className={cls.work}>
              <div className={cls.work_image}>
                <Link href="/works/tcg">
                  <img src="/images/TCG-image.avif" alt="work image" loading="lazy" />
                </Link>
              </div>
              <div className={cls.work_info}>
                <h3>
                  <a href="/works/tcg">
                    <Icon icon="fontisto:envato" /> Themeforest Projects
                  </a>
                </h3>
                <small>(12 Big Projects)</small>
                <div className={cls.description}>
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
                </div>
                <div className={cls.bottom}>
                  <div className={cls.actions}>
                    <Link href="/works/tcg">
                      <Icon icon="grommet-icons:view" className={`iconifiy-icon ${cls.view}`} /> View All Projects
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {
              data.map((work, index) => (
                <div className={cls.work} key={work._id}>
                  {
                    index % 2 !== 0 &&
                    <div className={cls.work_image}>
                      <div className={cls.topbar}>
                        <div className={cls.actions}>
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className={cls.search}>
                          <span>{work.links.demo}</span>
                        </div>
                        <div className={cls.switch_view} data-tooltip={"Switch view"} data-direction='left'>
                          <Icon icon="basil:desktop-solid" className={`iconifiy-icon mobile ${cls.hide}`} onClick={(e) => toggleView(e, work)} />
                          <Icon icon="teenyicons:mobile-solid" className={`iconifiy-icon`} onClick={(e) => toggleView(e, work)} />
                        </div>
                      </div>
                      <a href={work.links.demo ? work.links.demo : '#'} target="_blank" rel="noreferrer">
                        <img src={work.images.desktop} alt="work image" loading="lazy" />
                      </a>
                    </div>
                  }
                  <div className={cls.work_info}>
                    <h3>
                      <a href={work.links.demo ? work.links.demo : '#'} target="_blank" rel="noreferrer">
                        {work.name}
                      </a>
                    </h3>
                    <div className={cls.description} dangerouslySetInnerHTML={{ __html: descriptionParser(work.description) }}></div>
                    <p className={cls.stack}>Built With</p>
                    <div className={cls.bottom}>
                      <ul>
                        {
                          work.stack.map((stack) => (
                            <li key={stack._id} className={stack.stack.isNotCompitable ? cls.compitable : ''} data-tooltip={stack.stack.name} data-direction='bottom'>
                              <img src={stack.stack.image} alt="skill" loading="lazy" title={stack.stack.name} />
                            </li>
                          ))
                        }
                      </ul>
                      <div className={cls.actions}>
                        {
                          work.links.github &&
                          <a href={work.links.github} target="_blank" rel="noreferrer" data-tooltip="Visit github repo" data-direction='bottom' aria-label='Visit github repo'>
                            <Icon icon="mdi:github" className={`iconifiy-icon ${cls.github}`} />
                          </a>
                        }
                        {
                          work.links.apiRepo &&
                          <a href={work.links.apiRepo} target="_blank" rel="noreferrer" data-tooltip="Visit api repo" data-direction='bottom' aria-label='Visit api repo'>
                            <Icon icon="fluent:server-link-20-filled" className={`iconifiy-icon ${cls.github}`} />
                          </a>
                        }
                        {
                          work.links.demo &&
                          <a href={work.links.demo} target="_blank" rel="noreferrer" data-tooltip="View project demo" data-direction='bottom' aria-label='View project demo'>
                            <Icon icon="mdi:link-box" className={`iconifiy-icon ${cls.demo}`} />
                          </a>
                        }
                      </div>
                    </div>
                  </div>
                  {
                    index % 2 === 0 &&
                    <div className={cls.work_image}>
                      <div className={cls.topbar}>
                        <div className={cls.actions}>
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className={cls.search}>
                          <span>{work.links.demo}</span>
                        </div>
                        <div className={cls.switch_view} data-tooltip={"Switch view"} data-direction='left'>
                          <Icon icon="basil:desktop-solid" className={`iconifiy-icon mobile ${cls.hide}`} onClick={(e) => toggleView(e, work)} />
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
            <Link href="/works" className={cls.view_more}><button><Icon icon="grommet-icons:view" className={`iconifiy-icon ${cls.demo}`} /> View alot more projects</button></Link>
          }
        </div>
      </div>
    </section>
  )
}

export default Works