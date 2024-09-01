//= Layout
import Layout from '@/components/Layout/Alt';
//= Components
import Experiences from '@/components/Home/Experience';
import Skills from '@/components/Home/Skills';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getGeneralSettings, getAllExperiences, getAllSkills } from '@/services/api';
//= Types
import type { Metadata } from 'next/types';

interface IProps {
}

export const metadata: Metadata = {
  title: `Hassan Ali - Experience`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

export const revalidate = 600;
export const dynamic = 'force-static';
export const maxDuration = 60;

export default async function ExperiencePage({ }: IProps) {
  const [aboutInfo, experiences, skills] = await Promise.all([
    asyncHandler(() => getGeneralSettings()),
    asyncHandler(() => getAllExperiences({})),
    asyncHandler(() => getAllSkills()),
  ]);

  const headerData = {
    title: "Experience",
    path: "Experience",
    illustrationText: "Experience",
    customFontSize: 38
  }

  return (
    <Layout headerData={headerData} data={aboutInfo}>
      <Experiences noTitle data={experiences || []} />
      <Skills smallerPadding data={skills || []} />
    </Layout>
  )
}
