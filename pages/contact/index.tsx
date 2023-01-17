import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';

function Contact() {
  const headerData = {
    title: "Contact Me",
    path: "Contact",
    illustrationText: "Contct"
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | Contact Me</title>
        <meta name="description" content="Hassan Ali's Portfolio Contact Page, Hassan Ali is self-taught web developer based on Egypt, who specializes in front-end & MERN Stack web development, this is my projects and Contact page." />
      </Head>
      {/* Page Content */}
      <Layout headerData={headerData}>
        <hr />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil inventore enim deserunt tempore voluptate odit, libero labore, alias beatae, commodi praesentium repellendus nesciunt dolores accusantium. Consequuntur quo itaque sed rerum.
        </p>
        <hr />
      </Layout>
    </>
  )
}

export default Contact;