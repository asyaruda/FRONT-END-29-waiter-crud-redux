import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { store } from './store'
import { Counter } from './features/Counter'
import { Waiter } from './features/waiters'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
       {<Counter />}
      <Waiter />
  </Provider>
);