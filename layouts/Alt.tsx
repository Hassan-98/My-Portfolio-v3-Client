import React, { ReactNode } from "react";
//= Components
import Loader from "components/Common/Loader";
import Navbar from 'components/Common/Navbar';
import Header from 'components/Common/AltHeader';
import Scrollables from 'components/Common/Scollables';
import Footer from 'components/Common/Footer';

interface IProps {
  children: JSX.Element | JSX.Element[] | ReactNode | ReactNode[];
  headerData: {
    title: string;
    path: string;
    illustrationText: string;
    customFontSize?: number;
  }
}

function AltPageLayout({ children, headerData }: IProps) {
  return (
    <>
      <Loader />
      <Navbar />
      <Header {...headerData} />
      <Scrollables />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default AltPageLayout