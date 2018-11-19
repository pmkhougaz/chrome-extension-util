import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout/Layout.js';

const store = { view: 'baz' };

const AppContext = React.createContext(store);

const App = () => {
  return (
    <AppContext.Provider value={store}>
      <AppContext.Consumer>
        {props => {
          return ( <Layout {...props} /> )
        }}
      </AppContext.Consumer>
    </AppContext.Provider>
  );
}

var node = document.getElementById('root');

ReactDOM.render(<App />, node);
