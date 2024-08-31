import React, { ReactNode } from "react";
//= Components
import Navbar from '@/components/Shared/Layout/Navbar';
import Header from '@/components/Shared/Layout/AltHeader';
import Scrollables from '@/components/Shared/Scollables';
import Footer from '@/components/Shared/Layout/Footer';
//= Static Data
import { defaultData } from "@/constants/defaultData";
//= Types
import { GeneralSettings } from "@/types";

interface IProps {
  children: ReactNode;
  headerData: {
    title: string;
    path: string;
    illustrationText: string;
    customFontSize?: number;
  };
  data: GeneralSettings | undefined;
}

function AltPageLayout({ children, headerData, data }: IProps) {
  const scrollablesData = data?.links || defaultData.aboutInfo.links;

  return (
    <>
      <Navbar />
      <Header {...headerData} />
      <Scrollables data={scrollablesData} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default AltPageLayout