import React from 'react'
import { Link } from 'react-router-dom'

import './header.scss'


const Header = () => {
    
    return(
        <div className="container-fluid">
        <div className="container">
            <div className="header">
                <Link to='/' className='logo-container'>
                    CHECKOUT SYSTEM
                </Link>
                <div className="options">
                    <Link className='option'>
                        PRODUCTS
                    </Link>
                    <Link>
                    
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Header