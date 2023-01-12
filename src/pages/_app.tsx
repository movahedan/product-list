import '../globals.css';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from 'libs/data/apollo-client';
import { ErrorBoundary } from 'libs/ui';

import type { AppProps, NextWebVitalsMetric } from 'next/app';

export const reportWebVitals = (metric: NextWebVitalsMetric): void => {
  const IS_WEB_VITALS_ENABLE = process.env.NEXT_PUBLIC_WEB_VITALS === 'true';

  if (IS_WEB_VITALS_ENABLE) {
    console.log(metric);
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ErrorBoundary>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </ErrorBoundary>
  );
}
