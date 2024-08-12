import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import ContactForm from 'components/Contact';
//= Api
import { getGeneralSettings } from '../../API';
//= Types
import { GeneralSettings } from '../../types';

interface IProps {
  aboutInfo: GeneralSettings;
}

function Contact({ aboutInfo }: IProps) {
  const headerData = {
    title: "Contact Me",
    path: "Contact",
    illustrationText: "Contact",
    customFontSize: 46
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | Contact Me</title>
        <meta name="description" content="Contact Hassan, Hassan is self-taught web developer based on Egypt, with +2 years experience as a web developer specializes in MERN Stack web development." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData} data={aboutInfo}>
        <ContactForm />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const aboutInfo = await getGeneralSettings();

    return {
      props: {
        aboutInfo
      },
      revalidate: 1800
    }
  } catch {
    return {
      props: {
        aboutInfo: null
      },
      revalidate: 1800
    }
  }
}

export default Contact;