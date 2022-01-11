import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header'
import Grid from './Components/Grid/Grid';
import ImagePage from './Components/ImagePage/ImagePage';
import Cart from './Components/Cart/Cart';
import Favorites from './Components/Favorites/Favorites';

const App = () => {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  
  useEffect(() => {
    fetchImageData()
    fetchFavData()
    fetchCartData()
  }, [])
  
  const fetchFavData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/favorites')
    const responseJson = await response.json()
    setFavorites(responseJson)
  }

  const fetchImageData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/images')
    const responseJson = await response.json()
    setData(responseJson)
  }

  const fetchCartData = async () => {
    const response = await fetch('http://localhost:3001/api/v1/cart')
    const responseJson = await response.json()
    setCart(responseJson)
  }

  const addToCart = async (newData) => {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    };
    try {
    const fetchResponse = await fetch('http://localhost:3001/api/v1/cart', config)
    const json = await fetchResponse.json()
    fetchCartData()
    console.log(json)
    } catch (err) {
      console.log(err)
      return err;
    }
  }

  const addToFavorites = async (newData) => {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    };
    try {
    const fetchResponse = await fetch('http://localhost:3001/api/v1/favorites', config)
    const json = await fetchResponse.json()
    fetchImageData()
    fetchFavData()
    console.log(json)
    } catch (err) {
      console.log(err)
      return err;
    }
  }

  const deleteFromFavorites = async (newData) => {
    const config = {
      method: 'Delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    };
    try {
    const fetchResponse = await fetch(`http://localhost:3001/api/v1/favorites/${newData.id}`, config)
    const json = await fetchResponse.json()
    fetchImageData()
    fetchFavData()
    console.log(json)
    } catch (err) {
      console.log(err)
      return err;
    }
  }
  
  const handleFavoritesClick = (newData) => {
    if(!newData.favorited) {
      addToFavorites(newData)
    }
    if(newData.favorited) {
      deleteFromFavorites(newData)
    }
  }


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Grid data={data} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/images/:id' element={<ImagePage addToCart={addToCart} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/favorites' element={<Favorites favorites={favorites} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} fetchCartData={fetchCartData} />} />
      </Routes>
    </div>
  );
}

export default App;
