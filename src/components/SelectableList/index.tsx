import React, { InputHTMLAttributes, useState } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

export interface SelectableListItem {
  label: string;
  icon?: React.ReactNode;
  onClick: (e?: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export interface SelectableListToolbarItem extends InputHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

interface Props extends InputHTMLAttributes<HTMLDivElement> {
  items?: SelectableListItem[];
  toolbar?: SelectableListToolbarItem[];
}

const SelectableList: React.FC<Props> = props => {
  const { className, items, toolbar, ...leftoverProps } = props;
  const [seletedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div
      className={clsx(styles.list, className)}
      {...leftoverProps}
    >
      <div className={styles.items}>
        {Array.isArray(items) && items.map((item: SelectableListItem, index: number) => (
          <div
            key={index}
            className={clsx(styles.item, item.className, {
              [styles.selected]: seletedIndex === index,
            })}
            onClick={e => {
              setSelectedIndex(index);
              item.onClick(e);
            }}
          >
            {item.icon && (
              <div className={styles.icon}>
                {item.icon}
              </div>
            )}

            <div className={styles.label}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      {toolbar && (
        <div className={styles.toolbar}>
          {toolbar.map((item: SelectableListToolbarItem, index: number) => (
            <button
              key={index}
              onClick={item.onClick}
              className={styles.toolbarButton}
            >
              {item.icon}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectableList;
