import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout.js';

const AppContext = React.createContext();

const App = () => {
  return (
    <AppContext.Provider>
      <Layout />
    </AppContext.Provider>
  );
}

var node = document.getElementById('root');

ReactDOM.render(<App />, node);
