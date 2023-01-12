import Image from 'next/image';

import type { CSSProperties, FC, ReactNode } from 'react';

export type LayoutProps = {
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ style, className, children }) => (
  <>
    <main
      style={style}
      className={['flex flex-col items-center justify-center flex-1', className]
        .filter(Boolean)
        .join(' ')}
    >
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
