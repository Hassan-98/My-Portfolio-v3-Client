import { Stack } from "../stack/types";

export interface GeneralSettings {
  header: {
    jobTitle: string;
    descriptionText: string;
    pictureUrl: string;
  };
  intro: {
    experienceYears: number;
    jobTitle: string;
    aboutMe: string;
  };
  links: {
    emailAddress: string;
    phoneNumber: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
  recentStack: {
    stack: Stack;
    order: number;
  }[];
}