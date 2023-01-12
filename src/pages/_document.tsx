import { Html, Head, Main, NextScript } from 'next/document';

import { fontLinks } from 'libs/constants/font-links';

const Document = () => (
  <Html>
    <Head>
      <link rel='icon' href='/favicon.ico' />
      {fontLinks.map((props, index) => (
        <link key={index} {...props} />
      ))}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
