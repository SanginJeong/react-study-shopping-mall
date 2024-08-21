import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Login from './page/Login';
function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<ProductAll/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
  );
}

export default App;
