import React, {useState, useEffect} from 'react'
import Product from '../../components/Product'
import axios from 'axios'



const ProductPage = () => {
    const [ products, setProducts ] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('https://fakestoreapi.com/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>Product Page</h1>
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
