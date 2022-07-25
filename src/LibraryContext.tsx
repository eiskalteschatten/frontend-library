import React, { createContext, useLayoutEffect, useState } from 'react';

import { WINDOW_WIDTHS } from './constants/window';

const defaultWindowWidth = typeof window !== 'undefined' ? window.innerWidth : WINDOW_WIDTHS.lgMin;

interface IContext {
  windowWidth: number;
  globalInfo?: string;
  setGlobalInfo: (info: string) => void;
  globalError?: string;
  setGlobalError: (error: string) => void;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const Context = createContext<IContext>({
  windowWidth: defaultWindowWidth,
  setGlobalInfo: (info: string) => {},
  setGlobalError: (error: string) => {},
});
/* eslint-enable @typescript-eslint/no-unused-vars */

interface Props {
  children?: React.ReactNode;
}

const LibraryProviderWrapper: React.FC<Props> = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState<number>(defaultWindowWidth);
  const [globalInfo, setGlobalInfo] = useState<string>();
  const [globalError, setGlobalError] = useState<string>();

  if (typeof window !== 'undefined') {
    useLayoutEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);

      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  }

  return (
    <Context.Provider value={{
      windowWidth,
      globalInfo,
      setGlobalInfo,
      globalError,
      setGlobalError,
    }}>
      {children}
    </Context.Provider>
  );
};

export { LibraryProviderWrapper, Context as LibraryContext };
