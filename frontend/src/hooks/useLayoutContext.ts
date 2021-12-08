import { useContext } from 'react';
import { LayoutContext } from 'src/styles/layout';

export const useLayoutProps = () => {
  const context = useContext(LayoutContext);

  if (!context) throw Error('useLayoutProps must be used under LayoutContext');

  return context;
};
