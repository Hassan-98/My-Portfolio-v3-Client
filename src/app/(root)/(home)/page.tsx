//= Components
import Layout from '@/components/Layout/Main';
import AboutMe from '@/components/Home/AboutMe';
import Experience from '@/components/Home/Experience';
import Skills from '@/components/Home/Skills';
import Works from '@/components/Home/Works';
import Testimonials from '@/components/Home/Testimonials';
import Certificates from '@/components/Home/Certificates';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getGeneralSettings, getAllExperiences, getAllSkills, getAllWorks, getAllCertificates, getAllTestimonials } from '@/services/api';
//= Types
import { Importance } from '@/types';
import type { Metadata } from 'next/types';

export const revalidate = 600;
export const maxDuration = 60;

export const metadata: Metadata = {
  title: `Hassan Ali - Home`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

export default async function HomePage() {
  const [aboutInfo, experiences, skills, works, certificates, testimonials] = await Promise.all([
    asyncHandler(() => getGeneralSettings()),
    asyncHandler(() => getAllExperiences({ limit: 4 })),
    asyncHandler(() => getAllSkills()),
    asyncHandler(() => getAllWorks({ limit: 7, type: Importance.Glowing, withStack: true, website: true, tcgWorks: false })),
    asyncHandler(() => getAllCertificates({ limit: 6, website: true })),
    asyncHandler(() => getAllTestimonials())
  ]);

  return (
    <>
      <Layout data={aboutInfo}>
        <AboutMe data={aboutInfo} />
        <Experience data={experiences || []} />
        <Skills data={skills || []} />
        <Works data={works || []} />
        <Certificates data={certificates || []} />
        <Testimonials data={testimonials || []} />
      </Layout>
    </>
  )
}