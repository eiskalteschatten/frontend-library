import React, { HTMLAttributes, useEffect, useState } from 'react';

import TabBar from '../TabBar';
import TabContents from '../TabContents';

import styles from './styles.module.scss';

export interface Tab {
  label: string;
  contents: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLDivElement>) => void;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
  tabs: Tab[];
  selectedIndex?: number;
}

const Tabs: React.FC<Props> = ({ tabs, selectedIndex = 0, ...leftoverProps }) => {
  const [activeIndex, setActiveIndex] = useState<number>(selectedIndex);

  useEffect(() => setActiveIndex(selectedIndex), [selectedIndex]);

  return (
    <div className={styles.tabsWrapper} {...leftoverProps}>
      <TabBar
        tabs={tabs.map((tab: Tab, index: number) => ({
          label: tab.label,
          onClick: tab.onClick ? tab.onClick : () => setActiveIndex(index),
          isActive: activeIndex === index,
        }))}
      />

      {tabs[activeIndex]?.contents && (
        <TabContents>
          {tabs[activeIndex].contents}
        </TabContents>
      )}
    </div>
  );
};

export default Tabs;
