import { useEffect, useState } from 'react';

import type { DependencyList } from 'react';

export const firstElementId = 'products-start';
export const lastElementId = 'products-end';
export const useProductListHeight = (
  callback: () => boolean,
  deps: DependencyList
) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (callback()) {
      setTimeout(() => {
        const start = document
          .getElementById(firstElementId)
          ?.getBoundingClientRect();
        const end = document
          .getElementById(lastElementId)
          ?.getBoundingClientRect();

        const height =
          (end?.height || 0) +
          (end?.y || 0) -
          (start?.height || 0) -
          (start?.y || 0);
        setHeight(height);
      }, 150);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return height;
};
