import React from 'react';
import cx from 'classnames';
import propTypes from 'prop-types';
import styles from './text.scss';

const Text = ({ children, type }) => {
  return (
    <div className={cx({
      [styles.base]: type == 'base',
      [styles.header]: type == 'header'
    })}>
      {children}
    </div>
  );
}

Text.propTypes = {
  type: propTypes.string,
}

Text.defaultProps = {
  type: 'base',
}

export default Text;
