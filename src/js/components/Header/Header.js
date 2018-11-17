import React from 'react';
import styles from './header.scss';

export default ({ children }) => {
  return (
    <div className={styles.sticky}>
      {children}
    </div>
  );
}
