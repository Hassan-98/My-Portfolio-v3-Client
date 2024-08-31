'use client';
import React from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Types
import { IWork } from '@/types';
//= Styles
import cls from './works.module.scss';

interface IProps {
  data: IWork[]
}

function WorthNoteWorks({ data }: IProps) {
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
    <section className={cls.works}>
      <div className="container">
        <h2>
          <span />
          Other Noteworthy Works
          <span />
        </h2>
        <div className={cls.container}>
          {
            data.map(work => (
              <div className={cls.work} key={work._id}>
                <div className={cls.work_image}>
                  <img src={work.images.desktop} alt="work image" loading="lazy" />
                </div>
                <div className={cls.work_info}>
                  <h3>{work.name}</h3>
                  <p className={cls.description} dangerouslySetInnerHTML={{ __html: descriptionParser(work.description) }}></p>
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
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WorthNoteWorks