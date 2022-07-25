import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

const Card: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, title, children, ...leftoverProps }) => {
  return (
    <div
      className={clsx(styles.card, className)}
      {...leftoverProps}
    >
      {title && (
        <div className={styles.title}>
          {title}
        </div>
      )}

      {children}
    </div>
  );
};

export default Card;
