import React from 'react'
import Product from './Product'

const Main = ({productList, user}) => {
  
  return (
    <>
      <h3 className='category'>대표 상품</h3>
      <div className='row'>
        {productList.map((product,index)=>(
          <Product product={product} user={user}/>
        ))}
      </div>
    </>
  )
}

export default Main