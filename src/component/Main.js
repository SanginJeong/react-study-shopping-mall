import React from 'react'
import Product from './Product'

const Main = ({productList, user, setSaveURL}) => {
  
  return (
    <>
      <h3 className='category'>대표 상품</h3>
      <div className='row'>
        {productList.map((product,index)=>(
          <Product product={product} user={user} setSaveURL={setSaveURL}/>
        ))}
      </div>
    </>
  )
}

export default Main