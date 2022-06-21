import React from 'react';
import { Card } from './Card';
import { cardsData } from './cardData';

import styles from './Cards.module.css';

export const Cards: React.FC = () => {
  return (
    <div className={styles.container}>
      {cardsData.map((card) => (
        <Card key={card.id} details={card} />
      ))}
    </div>
  );
};
