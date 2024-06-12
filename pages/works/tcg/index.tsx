import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import TcgWorks from 'components/Works/TcgWorks';
//= Api
import { getGeneralSettings, getAllWorks } from '../../../API';
//= Types
import { GeneralSettings, IWork } from '../../../types';

interface IProps {
  aboutInfo: GeneralSettings;
  works: IWork[];
}

function Works({ aboutInfo, works }: IProps) {
  const headerData = {
    title: "TCG Works",
    path: "Works",
    illustrationText: "Works",
    customFontSize: 66
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | TCG Works</title>
        <meta name="description" content="Hassan Ali's Projects for tcg - themescamp, Hassan is self-taught web developer based on Egypt, with +2 years experience as a web developer specializes in MERN Stack web development." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData} data={aboutInfo}>
        <TcgWorks data={works} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const [aboutInfo, works] = await Promise.all([
      getGeneralSettings(),
      getAllWorks({ withStack: true, tcgWorks: true }),
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