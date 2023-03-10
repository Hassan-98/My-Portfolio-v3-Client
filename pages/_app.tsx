import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
//= Components
import { Toaster } from 'react-hot-toast';

//= Apply Theme Mode
import applyColorMode from 'scripts/color-mode';

//= Global Styles
import "bootstrap/scss/bootstrap.scss";
import "styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    applyColorMode();
  }, []);

  return (
    <>
      {/* Toast Container */}
      <Toaster
        position="top-right"
        gutter={10}
        toastOptions={{
          duration: 4000
        }}
      />
      <Component {...pageProps} />
      {/* Scripts */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HRSGV4Z9YH1" />
      <Script src="/js/gtag.js" />
    </>
  )
}
