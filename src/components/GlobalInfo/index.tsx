import React from 'react';

import useLibraryContext from '../../lib/useLibraryContext';
import Toast from '../Toast';

const GlobalInfo: React.FC = () => {
  const { globalInfo } = useLibraryContext();

  if (!globalInfo) {
    return null;
  }

  return (
    <Toast>
      {globalInfo}
    </Toast>
  );
};

export default GlobalInfo;
