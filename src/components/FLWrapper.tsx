import React from 'react';

import { LibraryProviderWrapper } from '~/LibraryContext';
import GlobalError from './GlobalError';
import GlobalInfo from './GlobalInfo';

import '../styles/reboot.css';
import '../styles/globals.scss';
import '../styles/fonts.scss';

interface Props {
  children: React.ReactNode;
}

const FLWrapper: React.FC<Props> = ({ children }) => {
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

export default FLWrapper;
