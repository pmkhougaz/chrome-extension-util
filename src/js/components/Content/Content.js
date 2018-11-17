import React from 'react';
import styles from './content.scss';

export default ({ children }) => {
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}
