import React, { ReactNode } from "react";
//= Components
import Loader from "components/Common/Loader";
import Navbar from 'components/Common/Navbar';
import Scrollables from 'components/Common/Scollables';
import Header from 'components/Common/MainHeader';
import Footer from 'components/Common/Footer';

interface IProps {
  children: JSX.Element | JSX.Element[] | ReactNode | ReactNode[]
}

function MainPageLayout({ children }: IProps) {
  return (
    <>
      <Loader />
      <Navbar />
      <Header />
      <Scrollables />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainPageLayout