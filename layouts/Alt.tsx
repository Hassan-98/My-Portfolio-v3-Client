import React, { ReactNode } from "react";
//= Components
import Loader from "components/Common/Loader";
import Navbar from 'components/Common/Navbar';
import Header from 'components/Common/AltHeader';
import Scrollables from 'components/Common/Scollables';
import Footer from 'components/Common/Footer';
//= Types
import { GeneralSettings } from "types";

interface IProps {
  children: JSX.Element | JSX.Element[] | ReactNode | ReactNode[];
  headerData: {
    title: string;
    path: string;
    illustrationText: string;
    customFontSize?: number;
  };
  data: GeneralSettings;
}

function AltPageLayout({ children, headerData, data }: IProps) {
  return (
    <>
      <Loader />
      <Navbar />
      <Header {...headerData} />
      <Scrollables data={data.links} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default AltPageLayout