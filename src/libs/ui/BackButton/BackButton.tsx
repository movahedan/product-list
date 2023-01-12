import { useRouter } from 'next/router';

import type { CSSProperties, FC } from 'react';

export type BackButtonProps = {
  style?: CSSProperties;
  className?: string;
};

export const BackButton: FC<BackButtonProps> = ({ style, className }) => {
  const { back } = useRouter();

  return (
    <svg
      onClick={() => back()}
      style={style}
      className={['cursor-pointer', className].filter(Boolean).join(' ')}
      fill='currentColor'
      viewBox='0 0 24 24'
    >
      <g data-name='Layer 2'>
        <path
          d='M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64z'
          data-name='arrow-ios-back'
        />
      </g>
    </svg>
  );
};
