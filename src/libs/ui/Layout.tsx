import Image from 'next/image';

import { BackButton } from './BackButton';

import type { CSSProperties, FC, ReactNode } from 'react';

export type LayoutProps = {
  title?: ReactNode;
  subtitle?: ReactNode;
  noBackButton?: boolean;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({
  title,
  subtitle,
  noBackButton = false,
  style,
  className,
  children,
}) => (
  <>
    <main
      style={style}
      className={[
        'flex flex-col items-center justify-center flex-1 w-full lg:w-4xl mx-auto px-4',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className='flex flex-col items-center w-full mt-6 lg:mt-12'>
        <div className='flex items-center w-full'>
          {!noBackButton && <BackButton className='w-12 h-12 text-white' />}
          {typeof title === 'string' && (
            <h1 className='ml-4 text-2xl text-center lg:text-4xl'>{title}</h1>
          )}
        </div>

        {!!subtitle && (
          <p className='w-full py-4 text-lg lg:text-xl'>{subtitle}</p>
        )}
      </div>

      {children}
    </main>

    <footer className='py-8 text-center'>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-block'
      >
        Powered by{' '}
        <span className='inline-block ml-4 align-middle'>
          <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
        </span>
      </a>
    </footer>
  </>
);
