import React, { ReactNode } from "react";
//= Components
import Loader from "components/Common/Loader";
import Navbar from 'components/Common/Navbar';
import Scrollables from 'components/Common/Scollables';
import Header from 'components/Common/MainHeader';
import Footer from 'components/Common/Footer';
//= Types
import { GeneralSettings } from "types";

interface IProps {
  children: JSX.Element | JSX.Element[] | ReactNode | ReactNode[];
  data: GeneralSettings;
}

function MainPageLayout({ children, data }: IProps) {
  return (
    <>
      <Loader />
      <Navbar />
      <Header data={data.header} />
      <Scrollables data={data.links} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainPageLayout