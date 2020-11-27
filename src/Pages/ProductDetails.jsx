import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const ProductDetails = ({match}) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`https://fakestoreapi.com/products/${match.params.id}`)

            setProduct(data)
        }

        fetchProduct()
    }, )

    return (
        <>
            <Link className='btn btn-dark my-3' to='/'>
                Go Back
            </Link>   
            <div className="row">
                <div className="col-md-4">
                    <img src={product.image} alt={product.title} style={{ width: "100%"}} fluid/>
                </div>
                <div className="col-md-3">
                    <div className="list-group" variant='flush'>
                        <div className="list-item">
                            <h3>{product.title}</h3>
                        </div>
                        <div className="list-item">
                            <p style={{fontSize: '14px'}}>{product.description}</p>
                        </div>
                    </div>
                        <div className="list-group-item">
                        <h3>Price: &#8358;{product.price}</h3>
                        </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="list-group" variant="flush">
                            <div className="list-group-item">
                                <div className="row">
                                    <div className="col">
                                        Price:
                                    </div>
                                    <div className="col">
                                        <strong>&#8358;{product.price}</strong>
                                    </div>
                                </div>
                            </div>
                            <div className="list-group-item">
                                <div className="row">
                                    <Link className='btn btn-dark btn-block'>
                                        Add to Cart
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
