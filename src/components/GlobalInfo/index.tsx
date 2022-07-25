import React from 'react';

import Toast from '~/components/Toast';
import useAppContext from '~/lib/useAppContext';

const GlobalInfo: React.FC = () => {
  const { globalInfo } = useAppContext();

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
