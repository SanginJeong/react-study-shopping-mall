import React, { useState,useEffect } from 'react'
import Navbar from '../component/Navbar'
import Menu from '../component/Menu'
import { useParams } from 'react-router-dom'

const ProductDetail = ({user, setUser}) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  
  const getProductDetail = async () => {
    const url = `https://my-json-server.typicode.com/SanginJeong/react-study-shopping-mall/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setProduct(data);  
  }
  
  useEffect(()=>{
    getProductDetail();
  },[])
  return (
    <div className="wrap">
      <div className="container">
        <Navbar/>
        {
          <div className='productDetail'>
            <div className='img_wrap'>
              <img className='detail_img' src={product?.img}/>
            </div>
            <div className='detail_info'>
              <h3>{product?.title}</h3>
              <h4>{product?.price}&#x20a9;</h4>
              <select id="size-select" class="size-select">
                {product?.size.map((size)=>(
                  <option value={size}>{size}</option>
                ))}
              </select>
            </div>
            
            <div className='detail_button_area'>
              <button className='append_btn'>추가</button>
            </div>
          </div>
        }
        <Menu user={user} setUser={setUser}/>
      </div>
    </div>
  )
}

export default ProductDetail