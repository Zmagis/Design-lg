import React, { useState } from 'react';

import styles from './Menu.module.css';
import { menuItems } from './menuItems';

import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { ReactComponent as SandWichIcon } from 'assets/sandwich.svg';

export const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleoggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.menuWrapper}>
      <div className={styles.menuTop}>
        <div className={styles.linksDesktop}>
          {menuItems.map((item) => (
            <a className={styles.link} href={item.url}>
              {item.title}
            </a>
          ))}
        </div>

        <div onClick={handleoggleMenu} className={styles.menuToggler}>
          {isMenuOpen ? (
            <CloseIcon className={styles.menuTogglerOpened} />
          ) : (
            <SandWichIcon className={styles.menuTogglerClosed} />
          )}
        </div>
      </div>

      {isMenuOpen && (
        <div className={styles.linksMobile}>
          {menuItems.map((item) => (
            <a className={styles.linkMobile} href={item.url}>
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
