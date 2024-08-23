import React, { useEffect, useState } from 'react'
import Navbar from '../component/Navbar';
import Carousel from '../component/Carousel';
import Main from '../component/Main';
import Menu from '../component/Menu';
import { useSearchParams } from 'react-router-dom';

const ProductAll = ({user,setUser,saveURL,setSaveURL}) => {
  const [productList, setProductList] = useState([]);
  const [carouselItems, setCarouselItems] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get('q') || '';
    
    
    const url = `https://my-json-server.typicode.com/SanginJeong/react-study-shopping-mall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProductList(data);

    if(!searchQuery){
      setCarouselItems(data);
    }
  }

  useEffect(()=>{
    getProducts()
  },[query])
  
  return (
    <div className='wrap'>
      <div className="container">
        <Navbar/>
        <Carousel carouselItems={carouselItems}/>
        <Main productList={productList} user={user} setSaveURL={setSaveURL}/>
        <Menu user={user} setUser={setUser} saveURL={saveURL} setSaveURL={setSaveURL}/>
      </div>
    </div>
  )
}

export default ProductAll