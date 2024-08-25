import logo from './logo.svg';
import './App.css';
import { Routes,Route, Router } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import LoginPage from './page/LoginPage';
import { useEffect, useState } from 'react';
import ScrollToTop from './component/ScrollToTop';
function App() {
  const [user, setUser] = useState(null);
  const [saveURL, setSaveURL] = useState('');

  useEffect(()=>{
    console.log(user);
  },[user])
  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/login' element={<LoginPage setUser={setUser} saveURL={saveURL} setSaveURL={setSaveURL}/>}/>
        <Route path='/' element={<ProductAll user={user} setUser={setUser} saveURL={saveURL} setSaveURL={setSaveURL}/>}/>
        <Route path='/product/:id' element={<ProductDetail user={user} setUser={setUser}/>}/>
      </Routes>
    </>
  );
}

export default App;
