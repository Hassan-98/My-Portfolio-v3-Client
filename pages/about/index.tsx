import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import AboutMe from 'components/Home/AboutMe';
import Services from 'components/About/Services';
import Testimonials from 'components/Home/Testimonials';
//= Api
import { getGeneralSettings, getAllTestimonials } from '../../API';
//= Types
import { GeneralSettings, ITestimonial } from '../../types';

export interface IProps {
  aboutInfo: GeneralSettings;
  testimonials: ITestimonial[];
}

function About({ aboutInfo, testimonials }: IProps) {
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
        <meta name="description" content="About Hassan Ali, Hassan is self-taught web developer based on Egypt, with +2 years experience as a web developer specializes in MERN Stack web development." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData} data={aboutInfo}>
        <AboutMe data={aboutInfo} />
        <Services />
        <Testimonials data={testimonials} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const [aboutInfo, testimonials] = await Promise.all([
      getGeneralSettings(),
      getAllTestimonials()
    ]);

    return {
      props: {
        aboutInfo,
        testimonials
      }
    }
  } catch {
    return {
      props: {
        aboutInfo: null,
        testimonials: []
      }
    }
  }
}

export default About;