import React from 'react';
//= Components
import DescriptionCompiler from './DescriptionCompiler';
//= Types
import { GeneralSettings, IExperience, ISkill, IWork, IResumePreferences, ICertificate, CvSkillsPeriority, StackType, SkillMastery } from 'types';
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

function Content({ data }: IProps) {
  function proficientSkills() {
    let skillsList = '';

    if (data.preferences.skills.skillsPeriority === CvSkillsPeriority.front) {
      if (data.preferences.skills.showFrontendSkills) skillsList += extractSkills(StackType.front, SkillMastery.Proficient);
      if (data.preferences.skills.showBackendSkills) skillsList += extractSkills(StackType.back, SkillMastery.Proficient);
      if (data.preferences.skills.showToolsSkills) skillsList += extractSkills(StackType.tools, SkillMastery.Proficient);
    } else {
      if (data.preferences.skills.showBackendSkills) skillsList += extractSkills(StackType.back, SkillMastery.Proficient);
      if (data.preferences.skills.showFrontendSkills) skillsList += extractSkills(StackType.front, SkillMastery.Proficient);
      if (data.preferences.skills.showToolsSkills) skillsList += extractSkills(StackType.tools, SkillMastery.Proficient);
    }

    return [...new Set(skillsList.trim().slice(0, -1).trim().split(' - '))].join(' - ');
  }

  function moderateSkills() {
    let skillsList = '';

    if (data.preferences.skills.skillsPeriority === CvSkillsPeriority.front) {
      if (data.preferences.skills.showFrontendSkills) skillsList += extractSkills(StackType.front, SkillMastery.Moderate);
      if (data.preferences.skills.showBackendSkills) skillsList += extractSkills(StackType.back, SkillMastery.Moderate);
      if (data.preferences.skills.showToolsSkills) skillsList += extractSkills(StackType.tools, SkillMastery.Moderate);
    } else {
      if (data.preferences.skills.showBackendSkills) skillsList += extractSkills(StackType.back, SkillMastery.Moderate);
      if (data.preferences.skills.showFrontendSkills) skillsList += extractSkills(StackType.front, SkillMastery.Moderate);
      if (data.preferences.skills.showToolsSkills) skillsList += extractSkills(StackType.tools, SkillMastery.Moderate);
    }

    return [...new Set(skillsList.trim().slice(0, -1).trim().split(' - '))].join(' - ');
  }

  function extractSkills(type: StackType, mastry: SkillMastery) {
    return data.skills.filter(skill => (skill.type === type && skill.mastery === mastry)).map(skill => (
      `${skill.skill.name} - `
    )).join('');
  }

  return (
    <div className={classes.content}>
      <div className={classes.metadata}>
        <h1>Hassan Ali</h1>
        <h2>{data.preferences.summary.enableCustomTitle ? data.preferences.summary.customTitle : data.aboutInfo.header.jobTitle}</h2>
        <div className={classes.links}>
          {
            data.preferences.links.showEmail &&
            <div className={classes.link}>
              <i className="fi fi-br-at me-1"></i>
              <a href={`mailto:${data.aboutInfo.links.emailAddress}`}>{data.aboutInfo.links.emailAddress}</a>
            </div>
          }
          {
            data.preferences.links.showPhone &&
            <div className={classes.link}>
              <i className="fi fi-br-phone-call me-1"></i>
              <a href={`tel:${data.aboutInfo.links.phoneNumber}`}>{data.aboutInfo.links.phoneNumber}</a>
            </div>
          }
          {
            data.preferences.links.showGithub &&
            <div className={classes.link}>
              <i className="fi fi-brands-github me-1"></i>
              <a href={data.aboutInfo.links.github}>{data.aboutInfo.links.github.split('/').at(-1)}</a>
            </div>
          }
          {
            data.preferences.links.showLinkedin &&
            <div className={classes.link}>
              <i className="fi fi-brands-linkedin me-1"></i>
              <a href={data.aboutInfo.links.linkedin}>{data.aboutInfo.links.linkedin.split('/').at(-1)}</a>
            </div>
          }
          {
            data.preferences.links.showTwitter &&
            <div className={classes.link}>
              <i className="fi fi-brands-twitter me-1"></i>
              <a href={data.aboutInfo.links.twitter}>{data.aboutInfo.links.twitter.split('/').at(-1)}</a>

            </div>
          }
        </div>
      </div>

      {
        data.preferences.summary.showSection &&
        <div className={classes.section}>
          <h3>Summary</h3>
          <p>{data.preferences.summary.enableCustomSummary ? data.preferences.summary.customSummary : data.aboutInfo.header.descriptionText}</p>
        </div>
      }

      {
        data.preferences.skills.showSection &&
        <div className={classes.section}>
          <h3>Skills</h3>
          <div className={classes.skill_set}>
            <span>Proficient</span>
            <p>{proficientSkills()}</p>
          </div>
          <div className={classes.skill_set}>
            <span>Moderate</span>
            <p>{moderateSkills()}</p>
          </div>
        </div>
      }

      {
        data.preferences.experiences.showSection &&
        <div className={classes.section}>
          <h3>Work Experience</h3>
          {
            data.experiences.map(experience => (
              <div className={classes.experience} key={experience._id}>
                <div className={classes.title}>
                  <p>{experience.title} <span>@</span> <a href={experience.companyLink}>{experience.company}</a></p>
                  <p>
                    <i className="fi fi-rr-calendar-clock me-1"></i>
                    {new Date(experience.startedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                    &nbsp;-&nbsp;
                    {experience.endedAt ? new Date(experience.endedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short' }) : 'Present'}
                  </p>
                </div>
                <DescriptionCompiler content={experience.description} />
              </div>
            ))
          }
        </div>
      }

      {
        data.preferences.education.showSection &&
        <div className={classes.section}>
          <h3>Education</h3>
          {
            data.certificates.map(certificate => (
              <div className={classes.education} key={certificate._id}>
                <div className={classes.title}>
                  <p><a href={certificate.sourceLink ? certificate.sourceLink : '#'}>{certificate.title}</a> <span>from</span> {certificate.issuanceSource}</p>
                  <p><i className="fi fi-rr-calendar-clock me-1"></i> {new Date(certificate.issuanceDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</p>
                </div>
                <p className={classes.description}>
                  {certificate.description}
                </p>
              </div>
            ))
          }
        </div>
      }

      {
        data.preferences.projects.showSection &&
        <div className={classes.section}>
          <h3>Projects</h3>
          {
            data.works.map(work => (
              <div className={classes.project} key={work._id}>
                <div className={classes.title}>
                  <p>{work.name}</p>
                  <div className={classes.links}>
                    {
                      work.links.github &&
                      <a href={work.links.github} target="_blank" rel="noreferrer"><i className="fi fi-brands-github me-1"></i> Github</a>
                    }
                    {
                      work.links.apiRepo &&
                      <a href={work.links.apiRepo} target="_blank" rel="noreferrer"><i className="fi fi-br-database me-1"></i> API Repo</a>
                    }
                    {
                      work.links.demo &&
                      <a href={work.links.demo} target="_blank" rel="noreferrer"><i className="fi fi-br-arrow-up-right-from-square me-1"></i> Demo</a>
                    }
                    {
                      work.links.apiDocs &&
                      <a href={work.links.apiDocs} target="_blank" rel="noreferrer"><i className="fi fi-br-document-signed me-1"></i> Docs</a>
                    }
                  </div>
                </div>
                <p className={classes.description}>
                  {work.description}
                </p>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Content