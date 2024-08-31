//= Layout
import Layout from '@/components/Layout/Alt';
//= Components
import TcgWorks from '@/components/Works/TcgWorks';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getGeneralSettings, getAllWorks } from '@/services/api';
//= Types
import type { Metadata } from 'next/types';

interface IProps {
}

export const metadata: Metadata = {
  title: `Hassan Ali - TCG Works`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

export const revalidate = 3600;

export default async function Works({ }: IProps) {
  const [aboutInfo, works] = await Promise.all([
    asyncHandler(() => getGeneralSettings()),
    asyncHandler(() => getAllWorks({ withStack: true, tcgWorks: true })),
  ]);

  const headerData = {
    title: "TCG Works",
    path: "Works",
    illustrationText: "Works",
    customFontSize: 66
  }

  return (
    <Layout headerData={headerData} data={aboutInfo}>
      <TcgWorks data={works || []} />
    </Layout>
  )
}
