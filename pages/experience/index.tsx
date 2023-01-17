import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import Experiences from 'components/Home/Experience';
import Skills from 'components/Home/Skills';

function Experience() {
  const headerData = {
    title: "Experience",
    path: "Experience",
    illustrationText: "Experience",
    customFontSize: 38
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | Experience</title>
        <meta name="description" content="Hassan Ali's Portfolio Experience Page, Hassan Ali is self-taught web developer based on Egypt, with +2 years experience as a professional web developer specializes in front-end & MERN Stack web development, this is my skills and experiences page." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData}>
        <Experiences noTitle />
        <Skills smallerPadding />
      </Layout>
    </>
  )
}

export default Experience;