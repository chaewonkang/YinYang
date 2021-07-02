import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel='shortcut icon' href='/favicon.ico' />
        <title>YinYang.fig</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
