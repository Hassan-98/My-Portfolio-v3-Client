import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';
//= Components
import ContactForm from 'components/Contact';

function Contact() {
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
        <meta name="description" content="Hassan Ali's Portfolio Contact Page, Hassan Ali is self-taught web developer based on Egypt, with +2 years experience as a professional web developer specializes in front-end & MERN Stack web development, this is my projects and Contact page." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData}>
        <ContactForm />
      </Layout>
    </>
  )
}

export default Contact;