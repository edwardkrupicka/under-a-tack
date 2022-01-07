import './Favorites.scss';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'
import Grid from '../Grid/Grid';

const Favorites = () => {
  const [favData, setFavData] = useState([])

  useEffect(() => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const responseJson = await response.json()
      setFavData(responseJson)
    }
    fetchData(`http://localhost:3001/api/v1/favorites`)
  }, [])

  return (
    <section className='favorites'>
      <h1>favorites</h1>
      <Grid data={favData}/>
    </section>
  )
}

export default Favorites;