import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import MainWorks from 'components/Home/Works';
import WorthNoteWorks from 'components/Works/WorthNoteWorks';
//= Api
import { getGeneralSettings, getAllWorks } from '../../API';
//= Types
import { GeneralSettings, Importance, IWork } from '../../types';

interface IProps {
  aboutInfo: GeneralSettings;
  works: IWork[];
}

function Works({ aboutInfo, works }: IProps) {
  const headerData = {
    title: "Portfolio",
    path: "Works",
    illustrationText: "Works",
    customFontSize: 68
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | Works</title>
        <meta name="description" content="Hassan Ali's Projects, Hassan is self-taught web developer based on Egypt, with +2 years experience as a web developer specializes in MERN Stack web development." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData} data={aboutInfo}>
        <MainWorks worksPage data={works.filter(work => work.importance === Importance.Glowing)} />
        <WorthNoteWorks data={works.filter(work => work.importance === Importance.Legacy)} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const [aboutInfo, works] = await Promise.all([
      getGeneralSettings(),
      getAllWorks({ withStack: true, website: true, tcgWorks: false })
    ]);

    return {
      props: {
        aboutInfo,
        works
      },
      revalidate: 600
    }
  } catch {
    return {
      props: {
        aboutInfo: null,
        works: []
      },
      revalidate: 600
    }
  }
}

export default Works;