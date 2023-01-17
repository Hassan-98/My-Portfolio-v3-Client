import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';

function Experience() {
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
        <meta name="description" content="Hassan Ali's Portfolio Experience Page, Hassan Ali is self-taught web developer based on Egypt, who specializes in front-end & MERN Stack web development, this is my skills and experience page." />
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

export default Experience;