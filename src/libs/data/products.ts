import { gql, useQuery } from '@apollo/client';

import type { ApolloClient } from '@apollo/client';

export type Movie = {
  id: string;
  title: string;
  homepage: string;
  rating: number;
  overview: string;
  genres: {
    id: string;
    name: string;
  }[];
  images: {
    backdrops: {
      image: string;
      aspectRatio: string;
    }[];
  };
};

export type TrendingMovies = {
  movies: {
    trending: {
      edges: {
        node: Movie;
        cursor: string;
      }[];
      pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
      };
    };
  };
};

export type MovieItem = {
  movies: {
    movie: Movie;
  };
};

const productItemQuery = gql`
  query Movie($id: String) {
    movies {
      movie(id: $id) {
        id
        title
        homepage
        rating
        overview
        genres {
          id
          name
        }
        images {
          backdrops {
            image(size: W300)
            aspectRatio
          }
        }
      }
    }
  }
`;

export const fetchProductItem = (
  apolloClient: ApolloClient<unknown>,
  id: string | string[] | undefined
) =>
  apolloClient.query({
    query: productItemQuery,
    variables: {
      id,
    },
  });

export const useProduct = (id: string) =>
  useQuery<MovieItem>(productItemQuery, {
    variables: {
      id,
    },
  });

export const fetchProducts = (apolloClient: ApolloClient<unknown>) =>
  apolloClient.query({
    query: gql`
      query Discover {
        movies {
          trending {
            edges {
              node {
                id
                title
                homepage
                images {
                  backdrops {
                    image(size: Original)
                    aspectRatio
                  }
                }
              }
              cursor
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }
    `,
  });

export const useProducts = () =>
  useQuery<TrendingMovies>(
    gql`
      query Discover {
        movies {
          trending {
            edges {
              node {
                id
                title
                homepage
                images {
                  backdrops {
                    image(size: Original)
                    aspectRatio
                  }
                }
              }
              cursor
            }
            pageInfo {
              endCursor
              hasNextPage
            }
          }
        }
      }
    `,
    {
      fetchPolicy: 'cache-first',
    }
  );
