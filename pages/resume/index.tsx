import Head from 'next/head';
//= Components
import Show from 'components/Resume/Show';

function Resume() {
  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | Resume</title>
        <meta name="description" content="Hassan Ali's Portfolio About Page, Hassan Ali is self-taught web developer based on Egypt, with +2 years experience as a professional web developer specializes in front-end & MERN Stack web development, this is my resume preview page." />
      </Head>
      {/* Page Content */}
      <Show />
    </>
  )
}

export default Resume;