import React from 'react';

import { LibraryProviderWrapper } from '~/LibraryContext';
import GlobalError from './GlobalError';
import GlobalInfo from './GlobalInfo';

interface Props {
  children: React.ReactNode;
}

const FLWrapper: React.FC<Props> = ({ children }) => {
  return (
    <LibraryProviderWrapper>
      <GlobalInfo />
      <GlobalError />

      {children}
    </LibraryProviderWrapper>
  );
};

export default FLWrapper;
