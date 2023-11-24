import React from 'react';
//= Types
import { ISkill, SkillMastery, StackType } from '../../../types';
//= Styles
import classes from './skills.module.scss';
import { Icon } from '@iconify/react';

interface IProps {
  smallerPadding?: boolean;
  data: ISkill[]
}

function Skills({ smallerPadding, data }: IProps) {
  function handleTabClick(event: React.MouseEvent) {
    document.querySelectorAll(`.${classes.item}`).forEach(element => {
      element.classList.remove(classes.active);
    });
    event.currentTarget.classList.add(classes.active);


    document.querySelectorAll(`.${classes.tab}`).forEach(element => {
      element.classList.remove(classes.active);
    });
    document.getElementById(event.currentTarget.id.split('-btn')[0])!.classList.add(classes.active);
  }

  return (
    <section>
      <div className="container">
        <div className={`${classes.skills} ${smallerPadding ? classes.smallerPadding : ''}`}>
          <h2>
            <span />
            Skills
            <span />
          </h2>
          <div className={classes.skills_tabs_container}>
            <div className={classes.skills_items}>
              <div className={`${classes.item} ${classes.active}`} onClick={handleTabClick} id="front-end-btn">
                <Icon icon="uim:web-grid" />
                {/* <img src="/images/front.png" alt="client side" loading="lazy" width="45" height="45" /> */}
                <p>Front End</p>
              </div>
              <div className={classes.item} onClick={handleTabClick} id="back-end-btn">
                <Icon icon="solar:server-path-bold-duotone" />
                {/* <img src="/images/back.png" alt="server side" loading="lazy" width="45" height="45" /> */}
                <p>Back End</p>
              </div>
              <div className={classes.item} onClick={handleTabClick} id="tools-btn">
                <Icon icon="fontisto:webpack" />
                {/* <img src="/images/tools.png" alt="tools" loading="lazy" width="45" height="45" /> */}
                <p>Tools</p>
              </div>
            </div>
            <div className={classes.skills_tabs}>
              <div className={`${classes.tab} ${classes.active}`} id="front-end">
                <div className={classes.section}>
                  <p className={classes.sub_title}>
                    Proficient
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.front && skill.mastery === SkillMastery.Proficient)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={classes.compitable}>
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
                <div className={classes.section}>
                  <p className={classes.sub_title}>
                    Moderate
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.front && skill.mastery === SkillMastery.Moderate)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={classes.compitable}>
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
              <div className={classes.tab} id="back-end">
                <div className={classes.section}>
                  <p className={classes.sub_title}>
                    Proficient
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.back && skill.mastery === SkillMastery.Proficient)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={classes.compitable}>
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
                <div className={classes.section}>
                  <p className={classes.sub_title}>
                    Moderate
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.back && skill.mastery === SkillMastery.Moderate)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={classes.compitable}>
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
              <div className={classes.tab} id="tools">
                <div className={classes.section}>
                  <p className={classes.sub_title}>
                    Proficient
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.tools && skill.mastery === SkillMastery.Proficient)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={classes.compitable}>
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
                <div className={classes.section}>
                  <p className={classes.sub_title}>
                    Moderate
                  </p>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.tools && skill.mastery === SkillMastery.Moderate)).map(skill => (
                        <li key={skill._id}>
                          {
                            skill.skill.isNotCompitable
                              ?
                              <div className={classes.compitable}>
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