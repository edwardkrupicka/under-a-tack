import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header'
import Grid from './Components/Grid/Grid';
import ImagePage from './Components/ImagePage/ImagePage';
import Cart from './Components/Cart/Cart';

const App = () => {

  const [data, setData] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const responseJson = await response.json()
      setData(responseJson)
    }
    fetchData('http://localhost:3001/api/v1/images')
  }, [])

  const addToCart = async (itemId) => {
    const newItem = data.find((item) => item.id === itemId)
    console.log('newItem<><><>', newItem)
    await setCartItems([...cartItems, newItem])
    console.log("cartItems", cartItems)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Grid data={data} />} />
        <Route path='/images/:id' element={<ImagePage addToCart={addToCart}/>} />
        <Route path='/cart' element={<Cart items={cartItems} />} />
      </Routes>
    </div>
  );
}

export default App;
