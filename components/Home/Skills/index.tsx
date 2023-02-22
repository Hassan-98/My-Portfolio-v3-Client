import React from 'react';
//= Types
import { ISkill, SkillMastery, StackType } from '../../../types';
//= Styles
import classes from './skills.module.scss';

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
                <img src="/images/front.png" alt="client side" loading="lazy" />
                <p>Front End</p>
              </div>
              <div className={classes.item} onClick={handleTabClick} id="back-end-btn">
                <img src="/images/back.png" alt="server side" loading="lazy" />
                <p>Back End</p>
              </div>
              <div className={classes.item} onClick={handleTabClick} id="tools-btn">
                <img src="/images/tools.png" alt="tools" loading="lazy" />
                <p>Tools</p>
              </div>
            </div>
            <div className={classes.skills_tabs}>
              <div className={`${classes.tab} ${classes.active}`} id="front-end">
                <div className={classes.section}>
                  <h3 className={classes.sub_title}>
                    Proficient:
                  </h3>
                  <ul>
                    {
                      data.filter(skill => (skill.type === StackType.front && skill.mastery === SkillMastery.Proficient)).map(skill => (
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
                  <h3 className={classes.sub_title}>
                    Moderate:
                  </h3>
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
                  <h3 className={classes.sub_title}>
                    Proficient:
                  </h3>
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
                  <h3 className={classes.sub_title}>
                    Moderate:
                  </h3>
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
                  <h3 className={classes.sub_title}>
                    Proficient:
                  </h3>
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
                  <h3 className={classes.sub_title}>
                    Moderate:
                  </h3>
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