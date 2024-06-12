import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import Experiences from 'components/Home/Experience';
import Skills from 'components/Home/Skills';
//= Api
import { getGeneralSettings, getAllExperiences, getAllSkills } from '../../API';
//= Types
import { GeneralSettings, IExperience, ISkill } from '../../types';

interface IProps {
  aboutInfo: GeneralSettings;
  experiences: IExperience[];
  skills: ISkill[];
}

function Experience({ aboutInfo, experiences, skills }: IProps) {
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
        <meta name="description" content="Hassan Ali's Experience, Hassan is self-taught web developer based on Egypt, with +2 years experience as a web developer specializes in MERN Stack web development." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData} data={aboutInfo}>
        <Experiences noTitle data={experiences} />
        <Skills smallerPadding data={skills} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const [aboutInfo, experiences, skills] = await Promise.all([
      getGeneralSettings(),
      getAllExperiences({}),
      getAllSkills(),
    ]);

    return {
      props: {
        aboutInfo,
        experiences,
        skills,
      },
      revalidate: 600
    }
  } catch {
    return {
      props: {
        aboutInfo: null,
        experiences: null,
        skills: null,
      },
      revalidate: 600
    }
  }
}

export default Experience;