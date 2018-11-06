import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout.js';

class App extends React.Component {
  render() {
    return <Layout />
  }
}

var node = document.getElementById('root');

ReactDOM.render(<App />, node);
