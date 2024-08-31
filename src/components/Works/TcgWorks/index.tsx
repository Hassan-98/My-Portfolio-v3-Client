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
  return (
    <section className={cls.works}>
      <div className="container">
        <h2>
          <span />
          Projects For <a href="https://themeforest.net/user/themescamp"> themescamp <i>-TCG-</i></a>
          <span />
        </h2>
        <div className={cls.container}>
          {
            data.length ? data.map(work => (
              <div className={cls.work} key={work._id}>
                <div className={cls.work_image}>
                  <img src={work.images.desktop} alt="work image" loading="lazy" />
                </div>
                <div className={cls.work_info}>
                  <h3>{work.name}</h3>
                  <p className={cls.description}>
                    {work.description}
                  </p>
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
                        <a href={work.links.github} target="_blank" rel="noreferrer" data-tooltip="Visit project at envato" data-direction='bottom' aria-label='Visit project at envato'>
                          <Icon icon="simple-icons:envato" className={`iconifiy-icon ${cls.github}`} />
                        </a>
                      }
                      {
                        work.links.demo &&
                        <a href={work.links.demo} target="_blank" rel="noreferrer" data-tooltip="View project demo" data-direction='bottom' aria-label='View project demo'>
                          <Icon icon="fluent:link-square-12-filled" className={`iconifiy-icon ${cls.demo}`} />
                        </a>
                      }
                    </div>
                  </div>
                </div>
              </div>
            ))
              :
              <p style={{ width: '100%', fontSize: '30px', margin: '100px 0 0', textAlign: 'center' }}>No Works Yet</p>
          }
        </div>
      </div>
    </section>
  )
}

export default WorthNoteWorks