//= Layout
import Layout from '@/components/Layout/Alt';
//= Components
import MainWorks from '@/components/Home/Works';
import WorthNoteWorks from '@/components/Works/WorthNoteWorks';
//= Api
import { asyncHandler } from '@/utils/asyncHandler';
import { getGeneralSettings, getAllWorks } from '@/services/api';
//= Types
import { Importance } from '@/types';
import type { Metadata } from 'next/types';

interface IProps {
}

export const metadata: Metadata = {
  title: `Hassan Ali - Works`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

export const revalidate = 600;

export default async function Works({ }: IProps) {
  const [aboutInfo, works] = await Promise.all([
    asyncHandler(() => getGeneralSettings()),
    asyncHandler(() => getAllWorks({ withStack: true, website: true, tcgWorks: false }))
  ]);

  const headerData = {
    title: "Portfolio",
    path: "Works",
    illustrationText: "Works",
    customFontSize: 68
  }

  return (
    <Layout headerData={headerData} data={aboutInfo}>
      <MainWorks worksPage data={works?.filter(work => work.importance === Importance.Glowing) || []} />
      <WorthNoteWorks data={works?.filter(work => work.importance === Importance.Legacy) || []} />
    </Layout>
  )
}