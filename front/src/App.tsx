import React from 'react';
import {Route, Routes} from 'react-router-dom';
import loadable from '@loadable/component';

const Main = loadable(()=>import('./page/main/main'));
const FindAccount = loadable(()=>import('./page/findAccount/findAccount'));
const SignUp = loadable(()=>import('./page/signup/signup'));
function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/findAccount' element={<FindAccount/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
  );
}

export default App;
