import React from 'react';
import Text from '../Text/Text.js';

import propTypes from 'prop-types';
import styles from './tabs.scss';

const Tabs = ({ tabs }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ key, name }) => (
        <div {...{
          key,
          className: styles.tab,
          onClick: () => console.log('tab change ', key),
        }}>
          <Text type='header'>{name}</Text>
        </div>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.shape())
}

Tabs.defaultProps = {
  tabs: [
    { key: 'foo', name: 'Foo' },
    { key: 'bar', name: 'Bar' },
    { key: 'baz', name: 'Baz' }
  ]
}


export default Tabs;
