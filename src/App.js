import React from 'react';
import { Header } from './components'
import Routes from './routes'

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
