import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './Components/Main';
import { Store, StoreContext } from './stores';

ReactDOM.render(
  <StoreContext.Provider value={Store}>
    <Main />
  </StoreContext.Provider>,
  document.getElementById("root")
);
