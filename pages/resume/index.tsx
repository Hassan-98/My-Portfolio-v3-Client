import Head from 'next/head';
//= Components
import Show from 'components/Resume/Show';
//= Api
import { getGeneralSettings, getAllExperiences, getAllSkills, getAllWorks, getResumePreferences, getAllCertificates } from '../../API';
//= Types
import { GeneralSettings, IExperience, ISkill, IWork, IResumePreferences, ICertificate } from '../../types';

interface IProps {
  aboutInfo: GeneralSettings;
  experiences: IExperience[];
  skills: ISkill[];
  works: IWork[];
  certificates: ICertificate[];
  preferences: IResumePreferences
}

function Resume({ aboutInfo, experiences, skills, works, certificates, preferences }: IProps) {
  const data = {
    aboutInfo,
    experiences,
    skills,
    works,
    certificates,
    preferences
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | Resume</title>
        <meta name="description" content="Hassan Ali's Resume, Hassan is self-taught web developer based on Egypt, with +2 years experience as a web developer specializes in MERN Stack web development." />
      </Head>
      {/* Page Content */}
      <Show data={data} />
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const preferences = await getResumePreferences();
    let aboutInfo, experiences, skills, works, certificates;

    if (preferences?.summary.showSection) aboutInfo = await getGeneralSettings();
    if (preferences?.skills.showSection) skills = await getAllSkills();
    if (preferences?.experiences.showSection) {
      let limit = 0;
      if (preferences.experiences.isLimited) limit = preferences.experiences.limit as number;
      experiences = await getAllExperiences({ limit, cvOnly: true });
    }
    if (preferences?.projects.showSection) {
      let limit = 0;
      if (preferences.projects.isLimited) limit = preferences.projects.limit as number;
      works = await getAllWorks({ limit, withStack: true, cvOnly: true });
    }
    if (preferences?.education.showSection) {
      let limit = 0;
      if (preferences.education.isLimited) limit = preferences.education.limit as number;
      certificates = await getAllCertificates({ limit, cvOnly: true });
    }

    return {
      props: {
        aboutInfo,
        experiences: experiences || [],
        skills: skills || [],
        works: works || [],
        certificates: certificates || [],
        preferences
      },
      revalidate: 300
    }
  } catch {
    return {
      props: {
        aboutInfo: null,
        experiences: [],
        skills: [],
        works: [],
        certificates: [],
        preferences: null
      },
      revalidate: 300
    }
  }
}

export default Resume;