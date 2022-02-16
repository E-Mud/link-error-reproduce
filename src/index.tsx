import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloLink, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';

const loggerLink = new ApolloLink((operation, forward) => {
  function logFinish() {
    console.log('Finished');
  }

  const observable = forward(operation);

  // Comment the next line to see the desired behaviour
  observable.subscribe({ error: logFinish, complete: logFinish });

  return observable;
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    loggerLink,
    new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' })
  ]),
  name: 'error-reproduce'
});


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
