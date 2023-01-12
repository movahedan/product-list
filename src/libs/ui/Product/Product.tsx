import Image from 'next/image';

import { useProduct } from 'libs/data/products';

import { Loading } from '../Loading';

import type { CSSProperties, FC } from 'react';

export type ProductProps = {
  id: string;
  style?: CSSProperties;
  className?: string;
};

export const Product: FC<ProductProps> = ({ id, style, className }) => {
  const { data: { movies } = {}, loading, error } = useProduct(id);
  const item = movies?.movie;

  return (
    <div
      style={style}
      className={['flex flex-1 mr-auto', className].filter(Boolean).join(' ')}
    >
      {!!loading && <Loading width='80px' height='80px' className='m-auto' />}
      {!!error && <span>error</span>}
      {!!item && (
        <div className='flex flex-row flex-wrap sm:flex-col'>
          <div className='flex flex-col flex-wrap justify-items-start'>
            <Image
              width={320}
              height={140}
              src={item.images.backdrops[0].image}
              alt={item.title}
              style={{ width: 320 }}
            />
            <h3 className='max-w-xs mt-2 text-xl'>{item.title}</h3>
            <p>Genres: {item.genres.map((genre) => genre.name).join(', ')}</p>
            <p>Rating: {item.rating}</p>
            <p className='max-w-sm mt-4'>{item.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};
