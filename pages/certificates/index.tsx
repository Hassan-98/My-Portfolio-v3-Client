import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import AllCertificates from 'components/Home/Certificates';

function Certificates() {
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
        <meta name="description" content="Hassan Ali's Portfolio Certificates Page, Hassan Ali is self-taught web developer based on Egypt, with +2 years experience as a professional web developer specializes in front-end & MERN Stack web development, this is my skills and Certificates page." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData}>
        <AllCertificates certsPage />
      </Layout>
    </>
  )
}

export default Certificates;