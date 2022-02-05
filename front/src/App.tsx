import React from 'react';
import {Route, Routes} from 'react-router-dom';
import loadable from '@loadable/component';
import { RecoilRoot } from 'recoil';

const Main = loadable(()=>import('./page/main/main'));
const FindAccount = loadable(()=>import('./page/findAccount/findAccount'));
const SignUp = loadable(()=>import('./page/signup/signup'));
const Register = loadable(()=>import('page/register/register'));
const List = loadable(()=>import('page/list/list'));
const MyOrder = loadable(()=>import('page/myOrder/myorder'));
const MyOrderList = loadable(()=>import('page/myOrderList/myorderList'));
const Inquire = loadable(()=>import('page/inquire/inquire'));



function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/findAccount' element={<FindAccount/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/myorder' element={<MyOrder/>}/>
        <Route path='/myorderList' element={<MyOrderList/>}/>
        <Route path='/inquire' element={<Inquire/>}/>
      </Routes>
    </RecoilRoot>
  );
}

export default App;
