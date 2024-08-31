//= Components
import Show from '@/components/Resume/Show';
//= Static Data
import { defaultData } from "@/constants/defaultData";
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getGeneralSettings, getAllExperiences, getAllSkills, getAllWorks, getResumePreferences, getAllCertificates } from '@/services/api';
//= Types
import type { Metadata } from 'next/types';

interface IProps {
}

export const metadata: Metadata = {
  title: `Hassan Ali - Resume`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

export const revalidate = 300;

export default async function Resume({ }: IProps) {
  const preferences = await asyncHandler(() => getResumePreferences());
  let aboutInfo, experiences, skills, works, certificates;

  if (preferences?.summary.showSection) aboutInfo = await asyncHandler(() => getGeneralSettings());
  if (preferences?.skills.showSection) skills = await asyncHandler(() => getAllSkills());
  if (preferences?.experiences.showSection) {
    let limit = 0;
    if (preferences.experiences.isLimited) limit = preferences.experiences.limit as number;
    experiences = await asyncHandler(() => getAllExperiences({ limit, cvOnly: true }));
  }
  if (preferences?.projects.showSection) {
    let limit = 0;
    if (preferences.projects.isLimited) limit = preferences.projects.limit as number;
    works = await asyncHandler(() => getAllWorks({ limit, withStack: true, cvOnly: true }));
  }
  if (preferences?.education.showSection) {
    let limit = 0;
    if (preferences.education.isLimited) limit = preferences.education.limit as number;
    certificates = await asyncHandler(() => getAllCertificates({ limit, cvOnly: true }));
  }

  const data = {
    aboutInfo: aboutInfo || defaultData.aboutInfo,
    experiences: experiences || [],
    skills: skills || [],
    works: works || [],
    certificates: certificates || [],
    preferences
  }

  return (
    <Show data={data} />
  )
}