import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  renter() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
