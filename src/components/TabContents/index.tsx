import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const TabContents: React.FC<Props> = ({ children, className, ...leftoverProps }) => {
  return (
    <div
      className={clsx(styles.contents, className)}
      {...leftoverProps}
    >
      {children}
    </div>
  );
};

export default TabContents;
