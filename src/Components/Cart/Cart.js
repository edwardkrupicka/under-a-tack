import React, { useState, useEffect } from 'react';
import './Cart.scss';

const Cart = () => {
  const [data, setData] = useState([])

//Thanks for nothing, Eddie

// const calculateSubTotal = () => {
//   const subTotal = data.reduce((sum, item) => {
//     sum += (item.quantity * parseInt(item.price));
//     return sum;
//   }, 0)
//   setCartTotal(subTotal)
// }

  useEffect(() => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const responseJson = await response.json()
      setData(responseJson)
    }
    fetchData('http://localhost:3001/api/v1/cart')
  }, [])

  const [cartTotal, setCartTotal] = useState('');

  // set the cart total based on the quantities of each item in the cart
  // iterate through the cart, select the quantities of each item, and multiply by the price property

useEffect(() => {
  const calculateSubTotal = () => {
    const subTotal = data.reduce((sum, item) => {
      sum += (item.quantity * parseInt(item.price));
      return sum;
    }, 0)
    setCartTotal(subTotal)
  }
  calculateSubTotal()
}, [data])




  const itemsInCart = data.map((product) => {
    console.log(product.quantity)
    return (
      <div className="single-item"
        key={product.id}>
        <img src={product.url} alt={`${product.title} by ${product.artist}`}></img>
        <p>{product.quantity}</p>
        <p>{product.price}</p>
      </div>
    )
  })

  return (
    <div className="cart">
      <h2 className="cart-header">your cart</h2>
      <div className="cart-bar"></div>
      <div className="cart-columns">
        <p className="cart-text">Item</p>
        <p className="cart-text">Quantity</p>
        <p className="cart-text">Price</p>
      </div>
      <section className="cart-items">
        {itemsInCart}
      </section>
      <section className="cart-finances">
        <p className="cart-text">Subtotal ${cartTotal}</p>
        <p className="cart-text">Tax </p>
        <p className="cart-text">Shipping Estimate</p>
        <h3 className="cart-total">Total </h3>
      </section>
    </div>
  )
}

export default Cart;