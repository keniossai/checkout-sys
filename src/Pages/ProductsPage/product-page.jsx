import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Product from '../../components/Product'
import { listProducts } from '../../actions/productActions'


const ProductPage = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { products } = productList

    useEffect(() => {
        dispatch(listProducts)
    }, [dispatch])

    return (
        <>
            <h1>Products Page</h1>
            <div className="row">
                {products.map(product => (
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3">
                        <Product product={product} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProductPage
