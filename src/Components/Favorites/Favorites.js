import './Favorites.scss';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'
import FavoritesGrid from '../FavoritesGrid/FavoritesGrid';

const Favorites = ({ favorites, setFavorites, handleFavoritesClick }) => {

  return (
    <section className='favorites'>
      <h1>favorites</h1>
      <FavoritesGrid favorites={favorites} setFavorites={setFavorites} handleFavoritesClick={handleFavoritesClick}/>
    </section>
  )
}

export default Favorites;