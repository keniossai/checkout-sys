import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './layouts/Header';
import ProductDetails from './Pages/ProductDetails';
import ProductPage from './Pages/ProductsPage/product-page'

const App = () => {

  return (
    <>
      <Header />
      <main className='py-3'>
        <div className="container">
        <Switch>
          <Route exact path='/' component={ProductPage} />
          <Route exact path='/product/:id' component={ProductDetails} />
        </Switch>
        </div>
      </main>
    </>
  )
}

export default App;
