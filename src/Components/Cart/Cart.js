import React from 'react';
import './Cart.scss';

const Cart = () => {

  const [data, setData] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState('');
  const [cart, setCart]= useState([])

  useEffect(() => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const responseJson = await response.json()
      setCart(responseJson)
    }
    fetchData('http://localhost:3001/api/v1/cart')
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

    // const deleteCartItem = () => {
    //   fetch('http://localhost:3001/api/v1/cart', {
    //     method: 'DELETE',
    //     headers : {
    //       'Content-Type' : 'application/json'
    //     }
    //   })
    //   .then(() => setCart(data))
    //   .then(console.log(cart, data))
    // }
  

  const itemsInCart = cart.map((product) => {
    console.log(product.quantity)
    return (
      <div className="single-item"
        key={product.id}>
        <img src={product.url} alt={`${product.title} by ${product.artist}`} />
        <p></p>
        <p>{product.price}</p>
        <button className="remove-item">
          Remove From Cart
        </button>
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