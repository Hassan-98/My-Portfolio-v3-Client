import React from 'react';
//= Components
import Topbar from './Topbar';
import Content from './Content';
//= Types
import { GeneralSettings, IExperience, ISkill, IWork, ICertificate, IResumePreferences } from '../../../types';
//= Styles
import classes from './show.module.scss';

interface IProps {
  data: {
    aboutInfo: GeneralSettings;
    experiences: IExperience[];
    skills: ISkill[];
    works: IWork[];
    certificates: ICertificate[];
    preferences: IResumePreferences
  }
}

function Show({ data }: IProps) {
  return (
    <section className={classes.resume}>
      <Topbar />
      <Content data={data} />
    </section>
  )
}

export default Show