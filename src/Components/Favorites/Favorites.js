import './Favorites.scss';
import React, { useState, useEffect } from 'react';
import Card from '../Card/Card'

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

  const cards = favData.map((element) => {
    return <Card
      id={element.id}
      key={element.id}
      url={element.url}
      title={element.title}
      color={element.color}
      artist={element.artist}
      type={element.type}
    />
  })

  return (
    <section className='favorites-grid'>
      {cards}
    </section>
  )
}

export default Favorites;