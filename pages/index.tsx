import Head from 'next/head';
//= Layout
import Layout from 'layouts/Main';
//= Components
import AboutMe from 'components/Home/AboutMe';
import Experience from 'components/Home/Experience';
import Skills from 'components/Home/Skills';
import Works from 'components/Home/Works';
import Testimonials from 'components/Home/Testimonials';
import Certificates from 'components/Home/Certificates';

function Home() {
  return (
    <>
      <Head>
        <title>Hassan Ali's Portfolio | Home</title>
        <meta name="description" content="Hassan Ali's Portfolio Home Page, Hassan Ali is self-taught web developer based on Egypt, with +2 years experience as a professional web developer specializes in front-end & MERN Stack web development, Welcome to my corner of the internet." />
      </Head>

      <Layout>
        <AboutMe />
        <Experience />
        <Skills />
        <Works />
        <Certificates />
        <Testimonials />
      </Layout>
    </>
  )
}

export default Home;