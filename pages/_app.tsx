import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../app/assets/common.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>CSS Grid ❤️‍🔥</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
