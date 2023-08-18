import React from 'react'
import SingleProduct from './SingleProduct'

const AllProduct = ({allProducts}) => {
  return (
    <>
    
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-5">
        {allProducts.map((product) => (
          <SingleProduct key={product._id} product={product}></SingleProduct>
        ))}
      </div>
    </>
  )
}

export default AllProduct