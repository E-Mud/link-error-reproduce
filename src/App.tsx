import React from 'react';
import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const QUERY = gql`
  query {
    episodesByIds(ids: [1, 2]) {
      name
      characters {
        name
      }
    }
  }
`

function App() {
  useQuery(QUERY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Check index.tsx to see the link causing the error. Open the Network tab to see how many requests get sent.
        </p>
      </header>
    </div>
  );
}

export default App;
