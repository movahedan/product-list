import Head from 'next/head';

import { Layout } from 'libs/ui';

export default function Home() {
  return (
    <>
      <Head>
        <title>Art list</title>
        <meta
          name='description'
          content='Sample product list page using Next.js, Apollo, and tailwind.'
        />
      </Head>

      <Layout>
        <h1 className='w-full my-6 text-2xl text-center lg:my-16 lg:text-4xl'>
          Welcome!
        </h1>
      </Layout>
    </>
  );
}
