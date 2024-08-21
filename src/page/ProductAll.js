import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import Carousel from '../component/Carousel';
import Main from '../component/Main';
import Menu from '../component/Menu';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = 'http://localhost:5000/products';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductList(data);
  }

  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <div className='wrap'>
      <div className="container">
        <Navbar/>
        <Carousel/>
        <Main/>
        <Menu/>
      </div>
    </div>
  )
}

export default ProductAll