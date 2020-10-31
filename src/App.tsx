import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import Main from './Main';

function App() {

  return (
    <RecoilRoot>
      <Main/>
    </RecoilRoot>
  );
}

export default App;
