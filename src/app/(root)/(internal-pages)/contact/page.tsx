//= Layout
import Layout from '@/components/Layout/Alt';
//= Components
import ContactForm from '@/components/Contact';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getGeneralSettings } from '@/services/api';
//= Types
import type { Metadata } from 'next/types';

interface IProps {
}

export const metadata: Metadata = {
  title: `Hassan Ali - Contact`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

export const revalidate = 1800;

export default async function ContactPage({ }: IProps) {
  const [aboutInfo] = await Promise.all([
    asyncHandler(() => getGeneralSettings())
  ]);

  const headerData = {
    title: "Contact Me",
    path: "Contact",
    illustrationText: "Contact",
    customFontSize: 46
  }

  return (
    <Layout headerData={headerData} data={aboutInfo}>
      <ContactForm />
    </Layout>
  )
}