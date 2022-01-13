import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header'
import Grid from './Components/Grid/Grid';
import ImagePage from './Components/ImagePage/ImagePage';
import Cart from './Components/Cart/Cart';
import Favorites from './Components/Favorites/Favorites';
import Error from './Components/Error/Error';

const App = () => {

  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState([])
  
  useEffect(() => {
    fetchImageData()
    fetchFavData()
    fetchCartData()
  }, [])
  
  const fetchImageData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/images')
      const responseJson = await response.json()
      console.log(responseJson)
      setData(responseJson)
    } catch(err) {
      setError(error => [...error, `${err.message} at 'http://localhost:3001/api/v1/images'`])
      console.log(err.stack)
    }
  }

  const fetchFavData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/favorites')
      const responseJson = await response.json()
      console.log(responseJson)
      setFavorites(responseJson)
    } catch(err) {
      setError(error => [...error, `${err.message} at 'http://localhost:3001/api/v1/favorites'`])
      console.log(err.stack)
    }
  }


  const fetchCartData = async (logError = true) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/cart')
      const responseJson = await response.json()
      if(!logError){
      console.log(responseJson.map())
      }
      setCart(responseJson)
    } 
    catch(err) {
      console.error(err)
      setError(error => [...error, `${err.message} at 'http://localhost:3001/api/v1/cart'`])
    }
  }

  const addToCart = async (newData) => {
    const config = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    }
    try {
      const fetchResponse = await fetch('http://localhost:3001/api/v1/cart', config)
      const json = await fetchResponse.json()
      if(json.error){
        throw(json)
      }
      console.log(json)
    }
    catch (err) {
      console.log(err)
      setError(error => [...error, err.error])
    }
    fetchCartData()
  }

  const deleteCartItem = async (newData) => {
    const config = {
      method: 'Delete',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    };
    try {
    const fetchResponse = await fetch(`http://localhost:3001/api/v1/cart/${newData.id}`, config)
    const json = await fetchResponse.json()
    console.log(json)
    fetchCartData()
    } catch (err) {
      console.log(err)
      setError(error => [...error, err])
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
    console.log(json)
    if(json.error){
      throw(json)
    }
    fetchImageData()
    fetchFavData()
    fetchCartData()
    } catch (err) {
      console.log(err)
      setError(error => [...error, err.error])
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
    }

    try {
      const fetchResponse = await fetch(`http://localhost:3001/api/v1/favorites/${newData.id}`, config)
      const json = await fetchResponse.json()
      console.log(json)
      fetchImageData()
      fetchFavData()
    }

    catch (err) {
      console.log(err)
      setError(error => [...error, err])
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
    <div className={error.length ? 'App error' : 'App'}>
      { error.length ? <Error error={error} /> : null }
      <Header />
      <Routes>
        <Route path='/' element={<Grid data={data} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/images/:id' element={<ImagePage addToCart={addToCart} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/favorites' element={<Favorites favorites={favorites} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart} deleteCartItem={deleteCartItem} fetchCartData={fetchCartData} />} />
      </Routes>
    </div>
  );
}

export default App;
