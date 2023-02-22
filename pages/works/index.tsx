import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import MainWorks from 'components/Home/Works';
import WorthNoteWorks from 'components/Works/WorthNoteWorks';
//= Api
import { getGeneralSettings, getAllWorks } from '../../api';
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
        <meta name="description" content="Hassan Ali's Portfolio Works Page, Hassan Ali is self-taught web developer based on Egypt, with +2 years experience as a professional web developer specializes in front-end & MERN Stack web development, this is my projects and works page." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData} data={aboutInfo}>
        <MainWorks worksPage data={works.filter(work => work.importance === Importance.Glowing)} />
        <WorthNoteWorks data={works.filter(work => work.importance === Importance.Legacy)} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const [aboutInfo, works] = await Promise.all([
      getGeneralSettings(),
      getAllWorks({ withStack: true })
    ]);

    return {
      props: {
        aboutInfo,
        works
      }
    }
  } catch {
    return {
      props: {
        aboutInfo: null,
        works: []
      }
    }
  }
}

export default Works;