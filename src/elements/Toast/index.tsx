import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import useAppContext from '~/lib/useAppContext';

import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: 'info' | 'error';
}

const Toast: React.FC<Props> = ({ children, type = 'info' }) => {
  const { setGlobalInfo, setGlobalError } = useAppContext();

  const handleClose = () => {
    setGlobalInfo('');
    setGlobalError('');
  };

  return (
    <div className={clsx(styles.toast, {
      [styles.error]: type === 'error',
    })}>
      <div className={styles.message}>
        {children}
      </div>

      <div className={styles.closeButton} onClick={handleClose}>
        <span className='material-icons'>close</span>
      </div>
    </div>
  );
};

export default Toast;
