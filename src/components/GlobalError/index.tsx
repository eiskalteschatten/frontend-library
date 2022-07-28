import React from 'react';

import useLibraryContext from '../../lib/useLibraryContext';
import Toast from '../Toast';

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
