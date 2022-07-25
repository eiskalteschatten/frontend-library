import React, { HTMLAttributes, useEffect, useState } from 'react';

import ButtonBase from '../ButtonBase';
import Input from '../Input';

import styles from './styles.module.scss';

export interface Item {
  label: React.ReactElement;
  onClick: (e?: React.MouseEvent<HTMLElement>) => void;
}

export interface ItemForFilter extends Item {
  filterText: string;
}

interface FilterProps extends HTMLAttributes<HTMLDivElement> {
  showFilter: boolean;
  filterBoxPlaceholder?: string;
  items: ItemForFilter[];
}

interface NoFilterProps extends HTMLAttributes<HTMLDivElement> {
  showFilter?: undefined;
  filterBoxPlaceholder?: undefined;
  items: Item[];
}

type Props = FilterProps | NoFilterProps;

const FilterableList: React.FC<Props> = ({ items, showFilter, filterBoxPlaceholder, ...leftoverProps }) => {
  const [filter, setFilter] = useState<string>();
  const [filteredItems, setFilteredItems] = useState<Item[] | ItemForFilter[]>(items);

  useEffect(() => setFilteredItems(items), [items]);

  useEffect(() => {
    if (filter) {
      const _filteredItems = items.filter(item => (item as ItemForFilter).filterText.toLowerCase().includes(filter.toLowerCase()));
      setFilteredItems(_filteredItems);
    }
    else {
      setFilteredItems(items);
    }
  }, [filter, items]);

  return (
    <div className={styles.items} {...leftoverProps}>
      {showFilter && (
        <Input
          placeholder={filterBoxPlaceholder}
          fullWidth
          icon={<span className='material-icons'>search</span>}
          className={styles.filter}
          onChange={e => setFilter(e.target.value)}
        />
      )}

      <div className={styles.items}>
        {filteredItems.map((item: Item | ItemForFilter, index: number) => (
          <ButtonBase
            key={index}
            className={styles.item}
            onClick={item.onClick}
          >
            {item.label}
          </ButtonBase>
        ))}
      </div>
    </div>
  );
};

export default FilterableList;
