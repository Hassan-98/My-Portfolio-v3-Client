export type Template = {
  _id: string;
  name: string;
  image: string;
  selected: boolean;
}

export interface Links {
  showEmail: boolean;
  showPhone: boolean;
  showLinkedin: boolean;
  showGithub: boolean;
  showTwitter: boolean;
}

export interface Summary {
  showSection: boolean;
  showPicture: boolean;
  enableCustomSummary: boolean;
  customSummary?: string;
  enableCustomTitle: boolean;
  customTitle?: string;
}

export interface Skills {
  showSection: boolean;
  showFrontendSkills: boolean;
  showBackendSkills: boolean;
  showToolsSkills: boolean;
  skillsPeriority: CvSkillsPeriority;
}

export interface Experiences {
  showSection: boolean;
  isLimited: boolean;
  limit?: number;
}

export interface Education {
  showSection: boolean;
  isLimited: boolean;
  limit?: number;
}

export interface Projects {
  showSection: boolean;
  isLimited: boolean;
  showTcgWorks: boolean;
  limit?: number;
}

export enum CvSkillsPeriority {
  front = "front",
  back = "back"
}

export interface IResumePreferences {
  _id: string;
  templates: Template[];
  links: Links;
  summary: Summary;
  skills: Skills;
  experiences: Experiences;
  education: Education;
  projects: Projects;
}