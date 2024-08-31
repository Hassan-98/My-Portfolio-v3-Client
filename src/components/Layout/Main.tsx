import React, { ReactNode } from "react";
//= Components
import Navbar from '@/components/Shared/Layout/Navbar';
import Header from '@/components/Shared/Layout/MainHeader';
import Scrollables from '@/components/Shared/Scollables';
import Footer from '@/components/Shared/Layout/Footer';
//= Static Data
import { defaultData } from "@/constants/defaultData";
//= Types
import type { GeneralSettings } from "@/types";

interface IProps {
  children: ReactNode;
  data: GeneralSettings | undefined;
}

function MainPageLayout({ children, data }: IProps) {
  const headerData = data?.header || defaultData.aboutInfo.header;
  const scrollablesData = data?.links || defaultData.aboutInfo.links;

  return (
    <>
      <Navbar />
      <Header data={headerData} />
      <Scrollables data={scrollablesData} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainPageLayout