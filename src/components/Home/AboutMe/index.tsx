import React from 'react';
//= Components
import DescriptionCompiler from './DescriptionCompiler';
//= Static Data
import { defaultData } from "@/constants/defaultData";
//= Types
import { GeneralSettings } from '@/types';
//= Styles
import cls from './aboutme.module.scss';

function AboutMe({ data }: { data: GeneralSettings | undefined }): JSX.Element {
  const handledData = data || defaultData.aboutInfo;

  return (
    <section>
      <div className="container">
        <div className={cls.about_me}>
          <div className="row g-0">
            <div className={`col-lg-6 col-md-12 ${cls.years_col}`}>
              <div className={cls.experience_years}>
                <div className={cls.year}><span>{handledData.intro.experienceYears}</span><span>+</span></div>
                <p>years experience</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className={cls.info_box}>
                <p>Hassan Ali</p>
                <h3>{handledData.intro.jobTitle}</h3>
                <DescriptionCompiler text={handledData.intro.aboutMe} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe