import { useContext } from 'react';

import { LibraryContext, IContext } from '../LibraryContext';

export default () => useContext<IContext>(LibraryContext);
