import React from 'react';

import { LibraryProviderWrapper } from '~/LibraryContext';
import GlobalError from './GlobalError';
import GlobalInfo from './GlobalInfo';

import '../styles/reboot.css';

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <LibraryProviderWrapper>
      {/*
        1. Context
        2. ?
      */}

      <GlobalInfo />
      <GlobalError />

      {children}
    </LibraryProviderWrapper>
  );
};

export default Wrapper;
