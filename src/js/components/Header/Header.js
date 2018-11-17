import React from 'react';
import propTypes from 'prop-types';
import styles from './header.scss';

const Header = ({ tabs }) => {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ name }) => (
        <div
          key={name}
          className={styles.tab}
          onClick={() => console.log('tab change')}
        >
          {name}
        </div>
      ))}
    </div>
  );
}

Header.propTypes = {
  tabs: propTypes.arrayOf(propTypes.shape())
}

Header.defaultProps = {
  tabs: [
    { name: 'Foo' },
    { name: 'Bar' },
    { name: 'Baz' }
  ]
}


export default Header;
