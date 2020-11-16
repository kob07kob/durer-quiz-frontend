import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import Main from './Main';
import { 
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import { OneTimeTokenLogin } from './basicElements/ott-login';
import { Layout } from './basicElements/layout';

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Route path="/" component = {Main} />
       </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
