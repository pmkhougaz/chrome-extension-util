import React from 'react';
import propTypes from 'prop-types';

import Tabs from '../Tabs/Tabs.js';
import Text from '../Text/Text.js';

import styles from './list.scss';

const List = ({ items }) => {
  return (
    <div className={styles.list}>
      {items.map(item => (
        <div
          key={item}
          className={styles.listItem}
        >
          <Text>{item}</Text>
        </div>
      ))}
    </div>
  );
};

List.defaultProps = {
  items: []
};

List.propTypes = {
  items: propTypes.arrayOf(propTypes.string)
};

export default List;
