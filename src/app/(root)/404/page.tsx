import React from 'react';
//= Components
import Navbar from "@/components/Shared/Layout/Navbar";
import Footer from "@/components/Shared/Layout/Footer";
import PageNotFound from "@/components/NotFound";
//= Types
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: `Hassan Ali - 404`,
  description: 'Hassan Ali, a passionate self-taught frontend developer from Egypt with over 2.5 years of experience in front-end web development.'
}

async function Custom404() {
  return (
    <>
      <Navbar />
      <PageNotFound />
      <Footer />
    </>
  );
};


export default Custom404;
