import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="L'Atelier du Volcan" />
        <link rel="canonical" href="https://atelier-du-volcan.fr" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}