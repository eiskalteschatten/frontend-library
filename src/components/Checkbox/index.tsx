import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  type?: 'checkbox' | 'radio';
}

const Checkbox: React.FC<Props> = props => {
  const { className, label, type = 'checkbox', error, ...leftoverProps } = props;

  return (
    <div className={clsx(styles.checkbox, className)}>
      <label className={styles.label}>
        <input
          className={clsx(styles.input, {
            [styles.error]: error,
          })}
          type={type}
          {...leftoverProps as InputHTMLAttributes<HTMLInputElement>}
        />

        {label}
      </label>

      {error && (
        <div className={styles.errorMessage}>{error}</div>
      )}
    </div>
  );
};

export default Checkbox;
