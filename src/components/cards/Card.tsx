import React, { useState } from 'react';
import { CardData } from '../../types/card';
import { Search } from '../fields.tsx/search/Search';

import styles from './Card.module.css';
import { Item } from './Item';

type Props = { details: CardData };

export const Card: React.FC<Props> = ({ details }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (value: string) => {
    setSearchValue(value);
  };

  const handleSubmit = () => {
    // TODO some logic on submit
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.image}></div>

        <div className={styles.description}>
          <h5>{details.description}</h5>
          <p>{details.descritionDetail}</p>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.searchWrapper}>
          <Search
            submitBtn="Submit"
            placeholder="Placeholder..."
            value={searchValue}
            handleChange={(e) => handleChange(e.target.value)}
            handleSubmit={handleSubmit}
          />
        </div>

        <div className={styles.items}>
          {details.list.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
