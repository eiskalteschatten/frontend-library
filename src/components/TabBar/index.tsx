import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import ButtonBase from '../ButtonBase';

import styles from './styles.module.scss';

export interface Tab {
  label: string;
  onClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
  isActive?: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
}

const TabBar: React.FC<Props> = ({ tabs, ...leftoverProps }) => {
  return (
    <div className={styles.tabs} {...leftoverProps}>
      {tabs.map((tab: Tab, index: number) => (
        <ButtonBase
          key={index}
          className={clsx(styles.tab, {
            [styles.active]: tab.isActive,
          })}
          onClick={tab.onClick}
        >
          {tab.label}
        </ButtonBase>
      ))}
    </div>
  );
};

export default TabBar;
