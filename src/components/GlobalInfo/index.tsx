import React from 'react';

import Toast from '~/components/Toast';
import useLibraryContext from '~/lib/useLibraryContext';

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
