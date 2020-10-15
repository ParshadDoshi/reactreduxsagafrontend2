import React from 'react';

import './App.css';
import { Provider } from "react-redux";
import Store from './store/store'
import { Layout } from './Layout/layout'
import { ToastProvider } from 'react-toast-notifications'
function App() {

  return (
    <Provider store={Store}>
      <ToastProvider>
        <Layout />
      </ToastProvider>
    </Provider>
  );
}

export default App;
