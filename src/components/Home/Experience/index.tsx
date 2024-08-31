'use client';
import React from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Components
import DescriptionCompiler from './DescriptionCompiler';
//= Types
import { IExperience } from '@/types';
//= Styles
import cls from './experience.module.scss';

interface IProps {
  noTitle?: boolean;
  data: IExperience[]
}

function Experience({ noTitle, data }: IProps) {
  return (
    <section>
      <div className="container">
        <div className={`${cls.experience} ${noTitle ? cls.noPadding : ''}`}>
          {
            !noTitle &&
            <h2>
              <span />
              Experience
              <span />
            </h2>
          }
          <div className={cls.experiences}>
            {
              data.map(experience => (
                <div className={cls.exp} key={experience._id}>
                  <h3>
                    <Icon icon="ion:briefcase" className="iconifiy-icon me-2" /> {experience.title}
                    <span className={cls.at}>@</span>
                    <span className={cls.company}><a href={experience.companyLink} target="_blank" rel="noreferrer">{experience.company}</a></span>
                  </h3>
                  <p className={cls.time_range}>
                    <Icon icon="lets-icons:date-range" className="iconifiy-icon me-2" />
                    {new Date(experience.startedAt).toLocaleDateString('en', { year: 'numeric', month: 'short' })}
                    &nbsp;-&nbsp;
                    {experience.endedAt ? new Date(experience.endedAt).toLocaleDateString('en', { year: 'numeric', month: 'short' }) : 'Present'}
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