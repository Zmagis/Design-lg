import React from 'react';

import styles from './Search.module.css';

type Props = {
  value: string;
  submitBtn: string;
  placeholder: string;
  handleChange: (e: { target: HTMLInputElement }) => void;
  handleSubmit: () => void;
};

export const Search: React.FC<Props> = ({
  placeholder,
  submitBtn,
  value,
  handleChange,
  handleSubmit,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      handleSubmit();
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.submitBtn} onClick={handleSubmit}>
        {submitBtn}
      </button>
    </div>
  );
};
