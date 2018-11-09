import React from 'react';
import styles from './layout.scss';

export default () => {
  return (
    <div className={styles.evenContainer}>
      <div className={styles.paddedColumn}>Child Item</div>
      <div className={styles.paddedColumn}>Child Item</div>
      <div className={styles.paddedColumn}>Child Item</div>
      <div className={styles.paddedColumn}>Child Item</div>
      <div className={styles.paddedColumn}>Child Item</div>
      <div className={styles.paddedColumn}>Child Item</div>
      <div className={styles.paddedColumn}>Child Item</div>
      <div className={styles.paddedColumn}>Child Item</div>
    </div>
  );
}
