import Head from 'next/head';
//= Layout
import Layout from 'layouts/Alt';

function Works() {
  const headerData = {
    title: "Portfolio",
    path: "Works",
    illustrationText: "Works",
    customFontSize: 68
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>Hassan Ali's Portfolio | Works</title>
        <meta name="description" content="Hassan Ali's Portfolio Works Page, Hassan Ali is self-taught web developer based on Egypt, who specializes in front-end & MERN Stack web development, this is my projects and works page." />
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

export default Works;