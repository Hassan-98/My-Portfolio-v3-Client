'use client';
import React from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Components
import DescriptionCompiler from './DescriptionCompiler';
//= Types
import { GeneralSettings, IExperience, ISkill, IWork, IResumePreferences, ICertificate, CvSkillsPeriority, StackType, SkillMastery } from '@/types';
//= Styles
import cls from './show.module.scss';

interface IProps {
  data: {
    aboutInfo: GeneralSettings;
    experiences: IExperience[];
    skills: ISkill[];
    works: IWork[];
    certificates: ICertificate[];
    preferences: IResumePreferences | undefined
  },
}

function Content({ data }: IProps) {
  if (!data.preferences) return <p>Error loading cv data</p>

  const allSkillsMode = data.preferences.skills.showFrontendSkills && data.preferences.skills.showBackendSkills;

  function proficientSkills(type?: StackType) {
    if (!data.preferences) return [];
    let skillsList = '';

    if (type) {
      skillsList += extractSkills(type, SkillMastery.Proficient);
    } else {
      if (data.preferences.skills.skillsPeriority === CvSkillsPeriority.front) {
        if (data.preferences.skills.showFrontendSkills) skillsList += extractSkills(StackType.front, SkillMastery.Proficient);
        if (data.preferences.skills.showBackendSkills) skillsList += extractSkills(StackType.back, SkillMastery.Proficient);
        if (data.preferences.skills.showToolsSkills) skillsList += extractSkills(StackType.tools, SkillMastery.Proficient);
      } else {
        if (data.preferences.skills.showBackendSkills) skillsList += extractSkills(StackType.back, SkillMastery.Proficient);
        if (data.preferences.skills.showFrontendSkills) skillsList += extractSkills(StackType.front, SkillMastery.Proficient);
        if (data.preferences.skills.showToolsSkills) skillsList += extractSkills(StackType.tools, SkillMastery.Proficient);
      }
    }

    // @ts-ignore
    return [...new Set(skillsList.trim().slice(0, -1).trim().split(' - '))].join(' - ');
  }

  function moderateSkills(type?: StackType) {
    if (!data.preferences) return [];
    let skillsList = '';

    if (type) {
      skillsList += extractSkills(type, SkillMastery.Moderate);
    } else {
      if (data.preferences.skills.skillsPeriority === CvSkillsPeriority.front) {
        if (data.preferences.skills.showFrontendSkills) skillsList += extractSkills(StackType.front, SkillMastery.Moderate);
        if (data.preferences.skills.showBackendSkills) skillsList += extractSkills(StackType.back, SkillMastery.Moderate);
        if (data.preferences.skills.showToolsSkills) skillsList += extractSkills(StackType.tools, SkillMastery.Moderate);
      } else {
        if (data.preferences.skills.showBackendSkills) skillsList += extractSkills(StackType.back, SkillMastery.Moderate);
        if (data.preferences.skills.showFrontendSkills) skillsList += extractSkills(StackType.front, SkillMastery.Moderate);
        if (data.preferences.skills.showToolsSkills) skillsList += extractSkills(StackType.tools, SkillMastery.Moderate);
      }
    }

    // @ts-ignore
    return [...new Set(skillsList.trim().slice(0, -1).trim().split(' - '))].join(' - ');
  }

  function extractSkills(type: StackType, mastry: SkillMastery) {
    return data.skills.filter(skill => (skill.type === type && skill.mastery === mastry)).map(skill => (
      `${skill.skill.name} - `
    )).join('');
  }

  function projectsDescriptionParser(description: string): string {
    let formattedText = description.replaceAll(/\*\*\*(.*?)\*\*\*/g, '<b style="display: block;">$1</b>');
    formattedText = formattedText.replaceAll(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    formattedText = formattedText.replaceAll(/--(.*?)--/g, '<li>$1</li>');
    formattedText = formattedText.replaceAll(/\/\/(.*?)\/\//g, '<i>$1</i>');
    formattedText = formattedText.replaceAll(/__(.*?)__/g, '<u>$1</u>');
    formattedText = formattedText.replaceAll(/\[(.*?)\]/g, '<a href="$1" target="_blank"><u>$1</u></a>');

    let indexofList = formattedText.indexOf('<li>');
    let indexofListEnd = formattedText.lastIndexOf('</li>');

    if (indexofList > -1) {
      formattedText = formattedText.slice(0, indexofList) + '<ul>' + formattedText.slice(indexofList, indexofListEnd + 5) + '</ul>' + formattedText.slice(indexofListEnd + 6);
    }

    return formattedText;
  }

  return (
    <div className={cls.content}>
      <div className={cls.metadata}>
        <h1>Hassan Ali</h1>
        <h2>{data.preferences.summary.enableCustomTitle ? data.preferences.summary.customTitle : data.aboutInfo.header.jobTitle}</h2>
        <div className={cls.links}>
          {
            data.preferences.links.showEmail &&
            <div className={cls.link}>
              <div>
                <Icon icon="bi:envelope-at-fill" className="iconifiy-icon me-2" />
                <b>Email Address</b>
              </div>
              <a href={`mailto:${data.aboutInfo.links.emailAddress}`}>{data.aboutInfo.links.emailAddress}</a>
            </div>
          }
          {
            data.preferences.links.showPhone &&
            <div className={cls.link}>
              <div>
                <Icon icon="bi:phone-fill" className="iconifiy-icon me-2" />
                <b>Phone</b>
              </div>
              <a href={`tel:${data.aboutInfo.links.phoneNumber}`}>{data.aboutInfo.links.phoneNumber}</a>
            </div>
          }
          {
            data.preferences.links.showGithub &&
            <div className={cls.link}>
              <div>
                <Icon icon="mdi:github" className="iconifiy-icon me-2" />
                <b>Github</b>
              </div>
              <a href={data.aboutInfo.links.github}>{data.aboutInfo.links.github}</a>
            </div>
          }
          {
            data.preferences.links.showLinkedin &&
            <div className={cls.link}>
              <div>
                <Icon icon="bi:linkedin" className="iconifiy-icon me-2" />
                <b>Linkedin</b>
              </div>
              <a href={data.aboutInfo.links.linkedin}>{data.aboutInfo.links.linkedin}</a>
            </div>
          }
          {
            data.preferences.links.showTwitter &&
            <div className={cls.link}>
              <div>
                <Icon icon="simple-icons:x" className="iconifiy-icon me-2" />
                <b>Twitter</b>
              </div>
              <a href={data.aboutInfo.links.twitter}>{data.aboutInfo.links.twitter}</a>
            </div>
          }
        </div>
      </div>

      {
        data.preferences.summary.showSection &&
        <div className={cls.section}>
          <h3>Summary</h3>
          <p>{data.preferences.summary.enableCustomSummary ? data.preferences.summary.customSummary : data.aboutInfo.header.descriptionText}</p>
        </div>
      }

      {
        data.preferences.skills.showSection &&
        <div className={cls.section}>
          <h3>Skills</h3>
          <div className={cls.skill_set}>
            {/* <span>Proficient</span> */}
            {
              allSkillsMode ?
                <>
                  {
                    data.preferences.skills.showFrontendSkills &&
                    <p><span className={cls.stack_type}>Front End :</span> {proficientSkills(StackType.front)}</p>
                  }
                  {
                    data.preferences.skills.showBackendSkills &&
                    <p><span className={cls.stack_type}>Back End :</span> {proficientSkills(StackType.back)}</p>
                  }
                </>
                :
                <p>{proficientSkills()}</p>
            }
          </div>
          <div className={cls.skill_set}>
            {/* <span>Moderate</span> */}
            {
              allSkillsMode ?
                <>
                  {
                    data.preferences.skills.showFrontendSkills &&
                    <p><span className={cls.stack_type}>Front End :</span> {moderateSkills(StackType.front)}</p>
                  }
                  {
                    data.preferences.skills.showBackendSkills &&
                    <p><span className={cls.stack_type}>Back End :</span> {moderateSkills(StackType.back)}</p>
                  }
                </>
                :
                <p>{moderateSkills()}</p>
            }
          </div>
        </div>
      }

      {
        data.preferences.experiences.showSection &&
        <div className={cls.section}>
          <h3>Work Experience</h3>
          {
            data.experiences.map(experience => (
              <div className={cls.experience} key={experience._id}>
                <div className={cls.title}>
                  <p>{experience.title} <span>@</span> <a href={experience.companyLink}>{experience.company}</a></p>
                  <p>
                    <Icon icon="solar:calendar-bold-duotone" className="iconifiy-icon me-2" />
                    {new Date(experience.startedAt).toLocaleDateString('en', { year: 'numeric', month: 'short' })}
                    &nbsp;-&nbsp;
                    {experience.endedAt ? new Date(experience.endedAt).toLocaleDateString('en', { year: 'numeric', month: 'short' }) : 'Present'}
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
        <div className={cls.section}>
          <h3>Education</h3>
          {
            data.certificates && data.certificates.toReversed?.().map(certificate => (
              <div className={cls.education} key={certificate._id}>
                <div className={cls.title}>
                  <p><a href={certificate.sourceLink ? certificate.sourceLink : '#'}>{certificate.title}</a> <span>from</span> {certificate.issuanceSource}</p>
                  <p><Icon icon="solar:calendar-bold-duotone" className="iconifiy-icon me-2" /> {new Date(certificate.issuanceDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</p>
                </div>
                {
                  certificate.sourceLink &&
                  <a className={cls.link} href={certificate.sourceLink}>
                    <span>Certificate:</span> {certificate.sourceLink}
                  </a>
                }
                {/* <p className={cls.description}>
                  {certificate.description}
                </p> */}
              </div>
            ))
          }
        </div>
      }

      {
        data.preferences.projects.showSection &&
        <div className={cls.section}>
          <h3>Projects</h3>
          {
            data.preferences.projects.showTcgWorks &&
            <div className={cls.project}>
              <div className={cls.title}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>
                  <Icon icon="fontisto:envato" style={{ fontSize: '14px', marginInlineStart: '5px' }} /> Themeforest Projects
                  <small>(12 Large-Scale Projects)</small>
                </p>
              </div>
              <p className={cls.description}>
                All projects and themes i've developed or contributed to it for  '<u>Themescamp - TCG</u>'  company at the period of Apr 2022 to Oct 2023.
                <div style={{ marginBottom: '5px' }} />
                all projects are big themeforest themes for various categories such as:
                <li><i>ecommerce</i>, <i>newspaper & magazine</i>, <i>personal portfolio</i>, <i>blog</i>, <i>restaurant</i>, <i>photography</i>, <i>business</i>, <i>agency</i>, <i>multi-purpose templates</i>, etc...</li>
              </p>
              <div className={cls.links}>
                <a href="https://hassanali.tk/works/tcg" target="_blank" rel="noreferrer">
                  <Icon icon="solar:link-round-bold-duotone" className="iconifiy-icon" /> Browse Projects: <span>https://hassanali.tk/works/tcg</span>
                </a>
              </div>
            </div>
          }
          {
            data.works.map(work => (
              <div className={cls.project} key={work._id}>
                <div className={cls.title}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 'bold' }}>{work.name}</p>
                </div>
                <p className={cls.description} dangerouslySetInnerHTML={{ __html: projectsDescriptionParser(work.description) }}></p>
                <div className={cls.links}>
                  {
                    work.links.demo &&
                    <a href={work.links.demo} target="_blank" rel="noreferrer"><Icon icon="solar:link-round-bold-duotone" className="iconifiy-icon" /> Preview: <span>{work.links.demo}</span></a>
                  }
                  {
                    work.links.github &&
                    <a href={work.links.github} target="_blank" rel="noreferrer"><Icon icon="mdi:github" className="iconifiy-icon" /> Github: <span>{work.links.github}</span></a>
                  }
                  {
                    work.links.apiRepo &&
                    <a href={work.links.apiRepo} target="_blank" rel="noreferrer"><Icon icon="solar:server-linear" className="iconifiy-icon" /> Server Code: <span>{work.links.apiRepo}</span></a>
                  }
                  {
                    work.links.apiDocs &&
                    <a href={work.links.apiDocs} target="_blank" rel="noreferrer"><Icon icon="et:documents" className="iconifiy-icon" /> Documentations: <span>{work.links.apiDocs}</span></a>
                  }
                </div>
              </div>
            ))
          }
          <div className={cls.project}>
            <div className={cls.title}>
              <p><b>Other noteworthy projects</b></p>
            </div>
            <p className={cls.description}>
              There are many other noteworthy projects listed in my portfolio
            </p>
            <div className={cls.links}>
              <a href={'https://hassanali.tk/works'} target="_blank" rel="noreferrer"><Icon icon="solar:link-round-bold-duotone" className="iconifiy-icon" /> Visit My Portfolio: <span>https://hassanali.tk</span></a>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Content