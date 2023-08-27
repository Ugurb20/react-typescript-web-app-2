import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store/store';
import { Provider as InversionProvider } from 'inversify-react';
import { getContainer } from '@utils/inversion-container';

import { LoadingOverlayProvider } from '@components/loading/loading-overlay/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <InversionProvider container={getContainer()}>
    <LoadingOverlayProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LoadingOverlayProvider>
  </InversionProvider>,
);
