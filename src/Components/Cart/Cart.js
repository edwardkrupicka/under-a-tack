import React, { useState, useEffect } from 'react';
import './Cart.scss';
import trash from '../../svg/trash.svg';

const Cart = ({ cart, fetchCartData, deleteCartItem }) => {
  const [cartSubtotal, setCartSubtotal] = useState('');

  useEffect(() => {
    fetchCartData()
  }, [])

  useEffect(() => {
    const calculateSubTotal = () => {
      const subTotal = cart.reduce((sum, item) => {
        sum += (item.quantity * parseInt(item.price));
        return sum;
      }, 0)
      setCartSubtotal(subTotal)
    }
    calculateSubTotal()
  }, [cart])

  const calculateTotal = () => {
    if (cartSubtotal) {
      const total = (cartSubtotal) + (cartSubtotal * .08) + 8
      return total
    }
    return 0
  }
  

  const itemsInCart = cart.map((product) => {
    return (
      <div className="single-item"
        key={product.id}>
        <div className='cart-img-container'>
          <img className={'cart-img'} src={product.url} alt={`${product.title} by ${product.artist}`}></img>
        </div>
        <p>Quantity: {product.quantity}</p>
        <p>Price: ${product.price * product.quantity}</p>
        <input className="remove-item" type='image' src={trash} onClick={() => deleteCartItem(product)}></input>
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
        <p className="cart-text">Subtotal ${cartSubtotal}</p>
        <p className="cart-text">Tax: ${(cartSubtotal * .08)} </p>
        <p className="cart-text">{cartSubtotal ? "Shipping: $8" : "Shipping : $0"}</p>
        <h3 className="cart-total">Total Cost For Your Plan Of A-Tack: ${calculateTotal()}</h3>
      </section>
    </div>
  )
}

export default Cart;