import React from 'react';
//= Components
import DescriptionCompiler from './DescriptionCompiler';
//= Types
import { GeneralSettings } from '../../../types';
//= Styles
import classes from './aboutme.module.scss';

function AboutMe({ data }: { data: GeneralSettings }): JSX.Element {
  return (
    <section>
      <div className="container">
        <div className={classes.about_me}>
          <div className="row g-0">
            <div className={`col-lg-6 col-md-12 ${classes.years_col}`}>
              <div className={classes.experience_years}>
                <div className={classes.year}><span>{data.intro.experienceYears}</span><span>+</span></div>
                <p>years experience</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={classes.info_box}>
                <p>Hassan Ali</p>
                <h3>{data.intro.jobTitle}</h3>
                <DescriptionCompiler text={data.intro.aboutMe} />
                <p>Here are a few technologies I’ve been working with recently:</p>
                <div className={classes.skills}>
                  {
                    data.recentStack.map(stack => (
                      <div className={classes.skill} key={stack.stack._id}>
                        <img src={stack.stack.image} alt={stack.stack.name} loading="lazy" />
                        <span>{stack.stack.name}</span>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe