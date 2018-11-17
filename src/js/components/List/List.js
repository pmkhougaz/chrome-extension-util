import React from 'react';
import styles from './list.scss';

const ITEMS = Array
  .apply(null, {length: 2000})
  .map(Number.call, Number);

export default () => {
  return (
    <div>
      {ITEMS.map(item => (
        <div
          key={item}
          className={styles.paddingMedium}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
