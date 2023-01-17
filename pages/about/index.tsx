import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import AboutMe from 'components/Home/AboutMe';
import Testimonials from 'components/Home/Testimonials';

function About() {
  const headerData = {
    title: "About Me",
    path: "About",
    illustrationText: "About"
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | About Me</title>
        <meta name="description" content="Hassan Ali's Portfolio About Page, Hassan Ali is self-taught web developer based on Egypt, who specializes in front-end & MERN Stack web development, this is my projects and About page." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData}>
        <AboutMe />
        <Testimonials />
      </Layout>
    </>
  )
}

export default About;