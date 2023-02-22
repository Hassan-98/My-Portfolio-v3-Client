import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

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
      <Component {...pageProps} />
      {/* Scripts */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-HRSGV4Z9YH1" />
      <Script src="/js/gtag.js" />
    </>
  )
}
