import Head from 'next/head';
import { useRouter } from 'next/router';
import { Container } from 'react-bootstrap';
import SongCard from '../src/components/song/SongCard';
import { host } from '../src/constants/config';
import { GET } from '../src/helper/api';

export const getStaticProps = async () => {
  const response = await GET(`${host}/api/youtube/video/list`, { page: 1, count: 18, description: 0 });

  return {
    props: { videos: response?.data },
    revalidate: 600
  };
};

export default function Home({ videos }) {
  const router = useRouter();

  // console.log(videos)

  return (
    <Container>
      <Head>
        <title>Jee6 | Trending Songs</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Language" content="en_US" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content='Jee6 allows you to download the latest trending songs in India' />
        <meta name="keywords" content='download trending songs, trending love song, download latest songs in mp3, download trending love songs, latest Tamil songs' />
        <meta name="google-site-verification" content="ouehaE2vSC20Uxgdbq94lWEqG9hjcANUPIeLsJDuypo" />
        <meta name="Rating" content="General" />
        <meta name="audience" content="all" />
        {/* <link rel="alternate" type="application/rss+xml" title="VediMuthu RSS Feed" href="/feed.xml" /> */}
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="jee6.in" />
        <meta property="og:title" content="Jee6.in | Download trending songs in India" />
        <meta property="og:description" content="Jee6 allows you to download the latest trending songs in India, songs download" />
        <meta property="og:url" content="https://jee6.in" />
        <meta property="og:image" content="https://jee6.in/favicon.ico" />
        <link href="https://jee6.in/" rel="canonical" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="Jee6.in | Download trending songs in India" />
        {/* <link rel="apple-touch-icon" sizes="57x57" href="/vm/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/vm/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/vm/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/vm/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/vm/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/vm/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/vm/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/vm/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/vm/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/vm/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/vm/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/vm/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/vm/favicon-16x16.png" />
        <meta name="msapplication-TileImage" content="/vm/ms-icon-144x144.png" /> */}
        {/* <link rel="manifest" href=".next/build-manifest.json" /> */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta itemProp="isFamilyFriendly" content="true" />
        <meta itemProp="copyrightYear" content="2022" />
      </Head>

      <SongCard videos={videos} router={router} />
    </Container >
  );
}
