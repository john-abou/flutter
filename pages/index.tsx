import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../components/Layout';


export default function IndexPage() {
  return (
    <div>
      <Head>
        <title>Learning Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Flutter</h1>
      <ul>
        <li>
          <Link href="/user/profile">
            <a>First</a>
          </Link>
        </li>
        <li>
          <Link href="/user/settings">
            <a>Second</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}