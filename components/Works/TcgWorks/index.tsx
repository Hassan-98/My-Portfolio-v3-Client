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
          Projects For <a href="https://themeforest.net/user/themescamp"> themescamp <i>-TCG-</i></a>
          <span />
        </h2>
        <div className={classes.container}>
          {
            data.length ? data.map(work => (
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
                        <a href={work.links.github} target="_blank" rel="noreferrer" data-tooltip="Visit project at envato" data-direction='bottom' aria-label='Visit project at envato'>
                          <Icon icon="simple-icons:envato" className={`iconifiy-icon ${classes.github}`} />
                        </a>
                      }
                      {
                        work.links.demo &&
                        <a href={work.links.demo} target="_blank" rel="noreferrer" data-tooltip="View project demo" data-direction='bottom' aria-label='View project demo'>
                          <Icon icon="fluent:link-square-12-filled" className={`iconifiy-icon ${classes.demo}`} />
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