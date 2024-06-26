import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import AllCertificates from 'components/Home/Certificates';
//= Api
import { getGeneralSettings, getAllCertificates } from '../../API';
//= Types
import { GeneralSettings, ICertificate } from '../../types';

interface IProps {
  aboutInfo: GeneralSettings;
  certificates: ICertificate[];
}

function Certificates({ aboutInfo, certificates }: IProps) {
  const headerData = {
    title: "Certificates",
    path: "Certificates",
    illustrationText: "Certs",
    customFontSize: 65
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | Certificates</title>
        <meta name="description" content="Hassan Ali's Certificates, Hassan is self-taught web developer based on Egypt, with +2 years experience as a web developer specializes in MERN Stack web development." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData} data={aboutInfo}>
        <AllCertificates certsPage data={certificates} />
      </Layout>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const [aboutInfo, certificates] = await Promise.all([
      getGeneralSettings(),
      getAllCertificates({ website: true })
    ]);

    return {
      props: {
        aboutInfo,
        certificates
      },
      revalidate: 600
    }
  } catch {
    return {
      props: {
        aboutInfo: null,
        certificates: []
      },
      revalidate: 600
    }
  }
}

export default Certificates;