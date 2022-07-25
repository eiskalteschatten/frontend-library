import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

import { PaletteColorClasses } from '~/interfaces/colors';

import styles from './styles.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  chipColor?: PaletteColorClasses;
}

const Chip: React.FC<Props> = ({ chipColor = PaletteColorClasses.Blue, className, ...leftoverProps }) => {
  return (
    <div
      className={clsx(styles.chip, className, {
        [styles.blue]: chipColor === PaletteColorClasses.Blue,
        [styles.darkBlue]: chipColor === PaletteColorClasses.DarkBlue,
        [styles.gray]: chipColor === PaletteColorClasses.Gray,
        [styles.darkGray]: chipColor === PaletteColorClasses.DarkGray,
        [styles.orange]: chipColor === PaletteColorClasses.Orange,
        [styles.yellow]: chipColor === PaletteColorClasses.Yellow,
        [styles.red]: chipColor === PaletteColorClasses.Red,
        [styles.green]: chipColor === PaletteColorClasses.Green,
      })}
      {...leftoverProps}
    />
  );
};

export default Chip;
