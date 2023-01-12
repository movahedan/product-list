import { addApolloState, initializeApollo } from 'libs/data/apollo-client';
import { fetchProducts } from 'libs/data/products';
import { Layout, Products } from 'libs/ui';

import type { NextPage } from 'next';

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await fetchProducts(apolloClient);

  return addApolloState(apolloClient, {
    props: {},
  });
}

const ProductsPage: NextPage = () => (
  <Layout title='Movies' subtitle='This is a server-side page'>
    <Products className='mx-auto' />
  </Layout>
);

export default ProductsPage;
