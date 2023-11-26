import React from 'react'
import '../css/LatestProducts.css'
import { useSelector } from 'react-redux'

function HomeProducts() {
    const products = useSelector((state)=> state.productsData.productsData)
    const reversedProducts = [...products].reverse()
    console.log("products", products)
  return (
    <div className='parent-div'>
        <h1>Latest Products</h1>
        <div className='products-container'>
            {
                reversedProducts.map((data,index)=>(
                    <div className='products-card'>
                        <img className='latest-image' src={data.imageSrcList[1]} alt="" />
                        <p className='pro-name'>{data.name}</p>
                        <p className='pro-desc'>{data.description}</p>
                        <p className='pro-price'>Rs/- {data.price}</p>
                    </div>
                ))
            }
        </div>
        {
                products.length > 9?
                <div>
                    <button>pre</button>
                    <button>next</button>
                </div>
                :"" 
            }
    </div>
  )
}

export default HomeProducts