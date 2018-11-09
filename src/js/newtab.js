import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout.js';

const App = () => {
  return <Layout />
}

var node = document.getElementById('root');

ReactDOM.render(<App />, node);
