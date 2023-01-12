import { useRouter } from 'next/router';

import { addApolloState, initializeApollo } from 'libs/data/apollo-client';
import { fetchProductItem } from 'libs/data/products';
import { Layout, Product } from 'libs/ui';

import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => ({
  paths: [].map((id) => ({
    params: { id },
  })),
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({
  params: { id } = {},
}) => {
  const apolloClient = initializeApollo();

  await fetchProductItem(apolloClient, id);

  return addApolloState(apolloClient, {
    revalidate: 30,
    props: {},
  });
};

const ProductPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const { query } = useRouter();

  return (
    <Layout title='Movie' subtitle='This is a static page'>
      <Product id={query.id as string} className='mt-6' />
    </Layout>
  );
};

export default ProductPage;
