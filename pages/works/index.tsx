import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import MainWorks from 'components/Home/Works';
import WorthNoteWorks from 'components/Works/WorthNoteWorks';

function Works() {
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
      <Layout headerData={headerData}>
        <MainWorks worksPage />
        <WorthNoteWorks />
      </Layout>
    </>
  )
}

export default Works;