import Head from 'next/head';

/**
 * Rendered in case if we have 404 error
 */
const NotFound = (): JSX.Element => (
  <>
    <Head>
      <title className="text-[60px]">404: NotFound</title>
    </Head>
    <div style={{ padding: 10 }}>
      <div className="container mx-auto my-auto">
        <h1 className="text-[50px] font-bold italic">Page not found</h1>
        <p className="text-[30px] italic">This page does not exist.</p>
        <a className="text-[20px]" href="/">
          Go to the Home page
        </a>
      </div>
    </div>
  </>
);

export default NotFound;
