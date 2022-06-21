import React from 'react';

import styles from './Card.module.css';

export const Card: React.FC = () => {
  return (
    <div className={styles.card}>
      Card
      <div className="card__image"></div>
      <div className="card__description"></div>
      <div className="card__list"></div>
    </div>
  );
};
