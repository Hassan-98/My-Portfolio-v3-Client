import React, { ReactNode } from "react";
//= Components
import Loader from "components/Common/Loader";
import Navbar from 'components/Common/Navbar';
import Scrollables from 'components/Common/Scollables';
import AltHeader from 'components/Common/AltHeader';
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
      <AltHeader title={headerData.title} path={headerData.path} illustrationText={headerData.illustrationText} customFontSize={headerData.customFontSize} />
      <Scrollables />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default AltPageLayout