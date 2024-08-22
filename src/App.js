import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import LoginPage from './page/LoginPage';
import { useEffect, useState } from 'react';
function App() {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    console.log(user);
  },[user])
  return (
    <Routes>
      <Route path='/login' element={<LoginPage setUser={setUser}/>}/>
      <Route path='/' element={<ProductAll user={user} setUser={setUser}/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
  );
}

export default App;
