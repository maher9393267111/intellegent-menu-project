import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar" dir="rtl">
      <Head>
        <title>Logic Tech</title>

        <link rel="icon" href="/site-icon.png" />
        <link rel="preconnect" href="https://www.logictech.pro" />

        <link rel="apple-touch-icon" sizes="180x180" href="/site-icon.png" />
        <link rel="icon" sizes="32x32" href="/site-icon.png" />
        <link rel="icon" sizes="16x16" href="/site-icon.png" />

        <meta property="og:title" content="logictech" />

        <meta name="keywords" content="logic, Tech" />
        <meta name="author" content="logictech" />
        <link rel="canonical" href="https://www.logictech.pro" />
        {/* <!-- Add Open Graph tags for social media sharing --> */}
        <meta property="og:title" content="logictech" />
        <meta property="og:description" content="logictech logic tech" />

        <meta property="og:url" content="https://www.logictech.pro" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
