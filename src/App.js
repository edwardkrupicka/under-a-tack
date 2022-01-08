import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header'
import Grid from './Components/Grid/Grid';
import ImagePage from './Components/ImagePage/ImagePage';
import Cart from './Components/Cart/Cart';

const App = () => {

  const [data, setData] = useState([])
  // const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const responseJson = await response.json()
      setData(responseJson)
    }
    fetchData('http://localhost:3001/api/v1/images')
  }, [])


  // useEffect(() => {
  // const addToCart = async (itemId) => {
  //   const newItem = data.find((item) => item.id === itemId)
  //   await fetch('http://localhost:3001/api/v1/cart', {
  //     method: 'POST',
  //     body: JSON.stringify(newItem),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //       .then(res => res.json())
  //       .then(resData => setCartItems([...cartItems, resData]))
  //       .catch(err => console.log(err))
  //   })
  // }

  // }, [])
  // fetch(url, {
  //   method: 'POST',
  //   body: JSON.stringify(someDataToSend), // remember how HTTP can only send and receive strings, just like localStorage?
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(response => response.json())
  //   .then(json => /*do something with json*/)
  //   .catch(err => /*do something with the error*/);


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Grid data={data} />} />
        <Route path='/images/:id' element={<ImagePage />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
