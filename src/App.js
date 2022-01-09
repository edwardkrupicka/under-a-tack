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
  const [cartItems, setCartItems] = useState([])
  const [favorites, setFavorites] = useState([])

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

  useEffect(() => {
    fetchImageData()
    fetchFavData()
  }, [])

  const addToFavorites = async (newData) => {
    await fetch('http://localhost:3001/api/v1/favorites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
        await (res => res.json())
        await fetchFavData()
        await fetchImageData()
        .catch(err => console.log(err))
  }

  const deleteFromFavorites = async (newData) => {
    await fetch(`http://localhost:3001/api/v1/favorites/${newData.id}`, {
      method: 'DELETE'
    })
      await ((res) => res.json())
      await fetchFavData()
      await fetchImageData()
      .catch(err => console.log(err))
  }
  
  const handleFavoritesClick = (newData) => {
    if(!newData.favorited) {
      addToFavorites(newData)
    }
    if(newData.favorited) {
      deleteFromFavorites(newData)
    }
    console.log(favorites)
  }


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Grid data={data} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/images/:id' element={<ImagePage favorites={favorites} setFavorites={setFavorites} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/favorites' element={<Favorites favorites={favorites} handleFavoritesClick={handleFavoritesClick}/>} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
