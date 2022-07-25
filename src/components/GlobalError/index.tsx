import React from 'react';

import Toast from '~/components/Toast';
import useLibraryContext from '~/lib/useLibraryContext';

const GlobalError: React.FC = () => {
  const { globalError } = useLibraryContext();

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
