import React from 'react';
//= Components
import DescriptionCompiler from './DescriptionCompiler';
//= Types
import { IExperience } from 'types';
//= Styles
import classes from './experience.module.scss';

interface IProps {
  noTitle?: boolean;
  data: IExperience[]
}

function Experience({ noTitle, data }: IProps) {
  return (
    <section>
      <div className="container">
        <div className={`${classes.experience} ${noTitle ? classes.noPadding : ''}`}>
          {
            !noTitle &&
            <h2>
              <span />
              Experience
              <span />
            </h2>
          }
          <div className={classes.experiences}>
            {
              data.map(experience => (
                <div className={classes.exp} key={experience._id}>
                  <h3>
                    <i className="fa-light fa-briefcase"></i> {experience.title}
                    <span className={classes.at}>@</span>
                    <span className={classes.company}><a href={experience.companyLink} target="_blank" rel="noreferrer">{experience.company}</a></span>
                  </h3>
                  <p className={classes.time_range}>
                    {new Date(experience.startedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                    &nbsp;-&nbsp;
                    {experience.endedAt ? new Date(experience.endedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) : 'Present'}
                  </p>
                  <DescriptionCompiler content={experience.description} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience