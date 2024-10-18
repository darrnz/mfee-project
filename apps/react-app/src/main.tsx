import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apollo-client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </StrictMode>
);
