'use client';
import React from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Types
import { ISkill, SkillMastery, StackType } from '@/types';
//= Styles
import cls from './skills.module.scss';

interface IProps {
  smallerPadding?: boolean;
  data: ISkill[]
}

function Skills({ smallerPadding, data }: IProps) {
  function handleTabClick(event: React.MouseEvent) {
    document.querySelectorAll(`.${cls.item}`).forEach(element => {
      element.classList.remove(cls.active);
    });
    event.currentTarget.classList.add(cls.active);


    document.querySelectorAll(`.${cls.tab}`).forEach(element => {
      element.classList.remove(cls.active);
    });
    document.getElementById(event.currentTarget.id.split('-btn')[0])!.classList.add(cls.active);
  }

  return (
    <section>
      <div className="container">
        <div className={`${cls.skills} ${smallerPadding ? cls.smallerPadding : ''}`}>
          <h2>
            <span />
            Skills
            <span />
          </h2>
          <div className={cls.skills_tabs_container}>
            <div className={cls.skills_items}>
              <div className={`${cls.item} ${cls.active}`} onClick={handleTabClick} id="front-end-btn">
                <Icon icon="uim:web-grid" />
                {/* <img src="/images/front.png" alt="client side" loading="lazy" width="45" height="45" /> */}
                <p>Front End</p>
              </div>
              <div className={cls.item} onClick={handleTabClick} id="back-end-btn">
                <Icon icon="solar:server-path-bold-duotone" />
                {/* <img src="/images/back.png" alt="server side" loading="lazy" width="45" height="45" /> */}
                <p>Back End</p>
              </div>
              <div className={cls.item} onClick={handleTabClick} id="tools-btn">
                <Icon icon="fontisto:webpack" />
                {/* <img src="/images/tools.png" alt="tools" loading="lazy" width="45" height="45" /> */}
                <p>Tools</p>
              </div>
            </div>
            <div className={cls.skills_tabs}>
              <div className={`${cls.tab} ${cls.active}`} id="front-end">
                <div className={cls.section}>
                  <p className={cls.sub_title}>
                    Proficient
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.front && skill.mastery === SkillMastery.Proficient)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={cls.compitable}>
                                <img src={skill.skill.image} alt="skill" loading="lazy" width="80" height="80" />
                              </div>
                              :
                              <img src={skill.skill.image} alt="skill" loading="lazy" width="80" height="80" />
                          }
                          {skill.skill.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={cls.section}>
                  <p className={cls.sub_title}>
                    Moderate
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.front && skill.mastery === SkillMastery.Moderate)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={cls.compitable}>
                                <img src={skill.skill.image} alt="skill" loading="lazy" />
                              </div>
                              :
                              <img src={skill.skill.image} alt="skill" loading="lazy" />
                          }
                          {skill.skill.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className={cls.tab} id="back-end">
                <div className={cls.section}>
                  <p className={cls.sub_title}>
                    Proficient
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.back && skill.mastery === SkillMastery.Proficient)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={cls.compitable}>
                                <img src={skill.skill.image} alt="skill" loading="lazy" />
                              </div>
                              :
                              <img src={skill.skill.image} alt="skill" loading="lazy" />
                          }
                          {skill.skill.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={cls.section}>
                  <p className={cls.sub_title}>
                    Moderate
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.back && skill.mastery === SkillMastery.Moderate)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={cls.compitable}>
                                <img src={skill.skill.image} alt="skill" loading="lazy" />
                              </div>
                              :
                              <img src={skill.skill.image} alt="skill" loading="lazy" />
                          }
                          {skill.skill.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <div className={cls.tab} id="tools">
                <div className={cls.section}>
                  <p className={cls.sub_title}>
                    Proficient
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.tools && skill.mastery === SkillMastery.Proficient)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={cls.compitable}>
                                <img src={skill.skill.image} alt="skill" loading="lazy" />
                              </div>
                              :
                              <img src={skill.skill.image} alt="skill" loading="lazy" />
                          }
                          {skill.skill.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
                <div className={cls.section}>
                  <p className={cls.sub_title}>
                    Moderate
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.tools && skill.mastery === SkillMastery.Moderate)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={cls.compitable}>
                                <img src={skill.skill.image} alt="skill" loading="lazy" />
                              </div>
                              :
                              <img src={skill.skill.image} alt="skill" loading="lazy" />
                          }
                          {skill.skill.name}
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills