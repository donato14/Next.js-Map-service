import Link from 'next/link';

export default function Links() {
  return (
    <main>
      <h1>Links</h1>
      {/* <div style={{ height: '200vh'}} /> */}

      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      {/* <a href="/section1/getStaticProps">/getStaticProps</a> */}

      <Link href="/section1/getStaticProps">/getStaticProps</Link>
    </main>
  );
}
