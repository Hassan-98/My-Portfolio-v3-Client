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
//= Api
import { getGeneralSettings, getAllExperiences, getAllSkills, getAllWorks, getAllCertificates, getAllTestimonials } from 'api';
//= Types
import { Importance, GeneralSettings, IExperience, ISkill, IWork, ICertificate, ITestimonial } from 'types';

interface IProps {
  aboutInfo: GeneralSettings;
  experiences: IExperience[];
  skills: ISkill[];
  works: IWork[];
  certificates: ICertificate[];
  testimonials: ITestimonial[];
}

function Home({
  aboutInfo,
  experiences,
  skills,
  works,
  certificates,
  testimonials
}: IProps) {
  return (
    <>
      <Head>
        <title>Hassan Ali's Portfolio | Home</title>
        <meta name="description" content="Hassan Ali's Portfolio Home Page, Hassan Ali is self-taught web developer based on Egypt, with +2 years experience as a professional web developer specializes in front-end & MERN Stack web development, Welcome to my corner of the internet." />
      </Head>

      <Layout data={aboutInfo}>
        <AboutMe data={aboutInfo} />
        <Experience data={experiences} />
        <Skills data={skills} />
        <Works data={works} />
        <Certificates data={certificates} />
        <Testimonials data={testimonials} />
      </Layout>
    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const [aboutInfo, experiences, skills, works, certificates, testimonials] = await Promise.all([
      getGeneralSettings(),
      getAllExperiences({ limit: 3 }),
      getAllSkills(),
      getAllWorks({ limit: 4, type: Importance.Glowing, withStack: true }),
      getAllCertificates({ limit: 6 }),
      getAllTestimonials()
    ]);

    return {
      props: {
        aboutInfo,
        experiences,
        skills,
        works,
        certificates,
        testimonials
      }
    }
  } catch {
    return {
      props: {
        aboutInfo: null,
        experiences: null,
        skills: null,
        works: null,
        certificates: null,
        testimonials: null
      }
    }
  }
}

export default Home;