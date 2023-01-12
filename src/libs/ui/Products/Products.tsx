import Image from 'next/image';
import Link from 'next/link';

import { useProducts } from 'libs/data/products';

import { Loading } from '../Loading';

import type { CSSProperties, FC } from 'react';

export type ProductsProps = {
  style?: CSSProperties;
  className?: string;
};

export const Products: FC<ProductsProps> = ({ style, className }) => {
  const { data: { movies } = {}, loading, error } = useProducts();
  const list = movies?.trending?.edges.map((item) => item.node);
  const dataLength = movies?.trending?.edges?.length || 0;

  return (
    <div
      style={style}
      className={['flex flex-1', className].filter(Boolean).join(' ')}
    >
      {!!loading && <Loading width='80px' height='80px' className='m-auto' />}
      {!!error && <span>error</span>}
      {!!dataLength && (
        <ul className='flex flex-wrap justify-center px-3 mx-auto'>
          {list?.map((item) => (
            <li key={item.id} className='mt-8 ml-3'>
              <Link href={`/products/${item.id}`}>
                <Image
                  width={257}
                  height={140}
                  src={item.images.backdrops[0].image}
                  alt={item.title}
                />
              </Link>
              <Link href={`/products/${item.id}`}>
                <h3
                  style={{ maxWidth: 257 }}
                  className='mt-2 overflow-hidden text-xl text-center truncate'
                >
                  {item.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
