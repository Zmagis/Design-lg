import React from 'react';
import { ListItem } from '../../types/card';

import styles from './Item.module.css';

type Props = { item: ListItem };

export const Item: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.item}>
      <div className={styles.avatar}></div>
      <div className={styles.description}>
        <h6>{item.title}</h6>
        <p>{item.description}</p>
      </div>
    </div>
  );
};
