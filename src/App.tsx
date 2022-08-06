import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactKeyLIst } from './components/userKey/ReactKeyLIst';
import { Test } from './components/usecallback/Test';
import { Test2 } from './components/usecallback/test2';
import { Users } from './components/useEffect/Users';

function App() {
  return (
    <div className="App">
      {/* <ReactKeyLIst/> */}
      <Test />
      <Test2 title='title' />
      <Users />
    </div>
  );
}

export default App;
