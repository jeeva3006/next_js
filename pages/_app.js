import Script from 'next/script';
import Layout from '../src/components/layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
// import { host } from '../src/constants/config';

// export const getStaticProps = async () => {
//   const response = await GET(`${host}/api/youtube/videos`);

//   return {
//     props: { videos: response }
//   };
// };

function MyApp({ Component, pageProps }) {

  return (
    <>

      <Script
        strategy="lazyOnload"
        async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6663847551285629"
        crossorigin="anonymous"
      />

      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-ZZXTTEB55X"
      />

      <Script id="analytics" strategy="afterInteractive">
        {
          ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZZXTTEB55X');`
        }
      </Script>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;