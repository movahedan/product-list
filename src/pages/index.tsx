import Head from 'next/head';
import Link from 'next/link';

import { ClientOnly, Layout, Products } from 'libs/ui';

export default function Home() {
  return (
    <>
      <Head>
        <title>Movie list</title>
        <meta
          name='description'
          content='Sample movie list page using Next.js, Apollo, and tailwindcss.'
        />
      </Head>

      <Layout
        noBackButton
        title='Welcome!'
        subtitle={
          <>
            This is a client side page,{' '}
            <Link href='/products'>
              To visit the server-side page, click here
            </Link>
          </>
        }
      >
        <ClientOnly>
          <Products className='mx-auto' />
        </ClientOnly>
      </Layout>
    </>
  );
}
