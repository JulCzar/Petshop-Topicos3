import { ReactNode, useEffect } from 'react';
import { useLayoutProps } from 'src/hooks';

export const useTitle = (title: string) => {
  const { setTitle } = useLayoutProps();

  useEffect(() => {
    setTitle(title);

    return () => {
      setTitle('');
    };
  }, []);
};
