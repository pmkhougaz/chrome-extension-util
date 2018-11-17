import React from 'react';
import Text from '../Text/Text.js';

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
          <Text>{item}</Text>
        </div>
      ))}
    </div>
  );
}
