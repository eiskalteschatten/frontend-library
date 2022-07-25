import React from 'react';

import Toast from '~/components/Toast';
import useAppContext from '~/lib/useAppContext';

const GlobalError: React.FC = () => {
  const { globalError } = useAppContext();

  if (!globalError) {
    return null;
  }

  return (
    <Toast type='error'>
      {globalError}
    </Toast>
  );
};

export default GlobalError;
