//= Layout
import Layout from '@/components/Layout/Alt';
//= Components
import AllCertificates from '@/components/Home/Certificates';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getGeneralSettings, getAllCertificates } from '@/services/api';
//= Types
import type { Metadata } from 'next/types';

interface IProps {
}

export const metadata: Metadata = {
  title: `Hassan Ali - Certificate`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

export const revalidate = 600;
export const maxDuration = 60;

export default async function Certificates({ }: IProps) {
  const [aboutInfo, certificates] = await Promise.all([
    asyncHandler(() => getGeneralSettings()),
    asyncHandler(() => getAllCertificates({ website: true }))
  ]);

  const headerData = {
    title: "Certificates",
    path: "Certificates",
    illustrationText: "Certs",
    customFontSize: 65
  }

  return (
    <Layout headerData={headerData} data={aboutInfo}>
      <AllCertificates certsPage data={certificates || []} />
    </Layout>
  )
}