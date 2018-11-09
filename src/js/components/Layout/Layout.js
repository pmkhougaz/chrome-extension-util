import React from 'react';
import styles from './layout.scss';

export default () => {
  console.log(styles);
  return (
    <div className={styles.container}>
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
