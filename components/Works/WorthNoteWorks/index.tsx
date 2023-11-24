import React from 'react';
import { Icon } from '@iconify/react';
//= Types
import { IWork } from '../../../types';
//= Styles
import classes from './works.module.scss';

interface IProps {
  data: IWork[]
}

function WorthNoteWorks({ data }: IProps) {
  return (
    <section className={classes.works}>
      <div className="container">
        <h2>
          <span />
          Other Noteworthy Works
          <span />
        </h2>
        <div className={classes.container}>
          {
            data.map(work => (
              <div className={classes.work} key={work._id}>
                <div className={classes.work_image}>
                  <img src={work.images.desktop} alt="work image" loading="lazy" />
                </div>
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
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default WorthNoteWorks