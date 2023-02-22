import React from 'react';
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
                          <li key={stack._id} className={stack.stack.isNotCompitable ? classes.compitable : ''}>
                            <img src={stack.stack.image} alt="skill" loading="lazy" />
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
                          <i className={`fa-regular fa-arrow-up-right-from-square ${classes.demo}`} title="View Demo"></i>
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