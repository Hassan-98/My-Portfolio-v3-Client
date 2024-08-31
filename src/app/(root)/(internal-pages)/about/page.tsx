//= Layout
import Layout from '@/components/Layout/Alt';
//= Components
import AboutMe from '@/components/Home/AboutMe';
import Services from '@/components/About/Services';
import Testimonials from '@/components/Home/Testimonials';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getGeneralSettings, getAllTestimonials } from '@/services/api';
//= Types
import type { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: `Hassan Ali - About`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

export const revalidate = 600;

export default async function AboutPage() {
  const [aboutInfo, testimonials] = await Promise.all([
    asyncHandler(() => getGeneralSettings()),
    asyncHandler(() => getAllTestimonials()),
  ]);

  const headerData = {
    title: "About Me",
    path: "About",
    illustrationText: "About"
  }

  return (
    <Layout headerData={headerData} data={aboutInfo}>
      <AboutMe data={aboutInfo} />
      <Services />
      <Testimonials data={testimonials || []} />
    </Layout>
  )
}