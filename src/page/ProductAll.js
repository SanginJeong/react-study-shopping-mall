import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import Carousel from '../component/Carousel';
import Main from '../component/Main';
import Menu from '../component/Menu';

const ProductAll = ({user,setUser}) => {
  const [productList, setProductList] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const getProducts = async () => {
    const url = 'http://localhost:5000/products';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductList(data);
    setCarouselItems(data);
  }

  useEffect(()=>{
    getProducts()
  },[])
  
  return (
    <div className='wrap'>
      <div className="container">
        <Navbar/>
        <Carousel carouselItems={carouselItems}/>
        <Main productList={productList} user={user}/>
        <Menu user={user} setUser={setUser}/>
      </div>
    </div>
  )
}

export default ProductAll