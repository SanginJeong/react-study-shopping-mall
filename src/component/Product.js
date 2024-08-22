import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product, user}) => {
  const navigate = useNavigate();

  const showDetail = (id) => {
    if(!user){
      navigate('/login');
      return
    }

    navigate(`/product/${id}`);
  }
  return (
    <div className='product_card'>
      <img
        onClick={()=>{showDetail(product.id)}}
        className='product_img'
        src={product.img} alt="" />
      <h4>{product.title}</h4>
      <h4>{product.price}</h4>
    </div>
  )
}

export default Product