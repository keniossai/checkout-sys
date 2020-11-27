import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
    return (
        <div className='card my-3 p-3'>
            <h6>{product.category}</h6>
            <Link className='card-img-top' to={`/product/${product.id}`}>
                <img src={product.image} alt="" style={{ width: "100%", height: "250px"}}/>
            </Link>
            <div className="card-body">
               <div className="card-title" style={{fontSize: "12px"}}>
                   <strong>{product.title}</strong>
               </div>
                <div className="card-text">
                <h3>&#8358;{product.price}</h3>
                </div>
            </div>
            <Link className='btn btn-dark' to=''>
                Add to cart
            </Link>
        </div>
    )
}

export default Product
