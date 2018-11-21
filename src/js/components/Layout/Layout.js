import React, { Fragment } from 'react';
import propTypes from 'prop-types';

import Header from '../Header/Header.js';
import Todos from '../Todos/Todos.js';
import Content from '../Content/Content.js';
import Tabs from '../Tabs/Tabs.js';

import styles from './layout.scss';

const Layout = ({ view }) => {
  return (
    <Fragment>
      <Header>
        <Tabs />
      </Header>
      <Content>
        <Todos />
      </Content>
    </Fragment>
  );
}

Layout.defaultProps = {
  view: 'foo',
}

Layout.propTypes = {
  view: propTypes.string,
}

export default Layout;
