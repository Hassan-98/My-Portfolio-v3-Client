import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Tags */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="keywords" content="Hassan, Ali, Hassan Ali, Hassan Ali's Portfolio, Hassan Ali's Website, Hassan Ali's Portfolio Website, Hassan Portfolio, Hassan Portfolio Website, hassan ali, hassanali, developer, mern, web, react, portfolio, personal, website, works" />
        <meta name="twitter:description" content="Hassan Ali's Portfolio, Hassan Ali is self-taught web developer based on Egypt, who specializes in front-end & MERN Stack web development, Welcome to my corner of the internet." />
        <meta property="og:description" content="Hassan Ali's Portfolio, Hassan Ali is self-taught web developer based on Egypt, who specializes in front-end & MERN Stack web development, Welcome to my corner of the internet." />
        <meta name="author" content="Hassan Ali" />
        {/* Google Analytics */}
        <meta name="google-site-verification" content="_U2xB66Sbt6dFzxjqW99iSxKgr47T7RwA621oA5G2Tk" />
        {/* App Logo */}
        <link rel="shortcut icon" href="/logo-secondary.svg" />
        <link rel="apple-touch-icon" href="/logo-png.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
