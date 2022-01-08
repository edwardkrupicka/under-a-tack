import './ImagePage.scss';
import '../Card/Card'
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ImagePage = ({ addToCart, favorites, setFavorites }) => {
  const [newData, setNewData] = useState([]);

  const locationId = useLocation().pathname.split(':')[1]


  useEffect(() => {
    const fetchData = async (api) => {
      const response = await fetch(api)
      const responseJson = await response.json()
      setNewData(responseJson)
    }
    fetchData(`http://localhost:3001/api/v1/images/${locationId}`)
  }, [])

  const addToFavorites = async () => {
    // console.log(newData)
    // await fetch('http://localhost:3001/api/v1/favorites', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newData)
    // })
    //     .then(res => res.json())
    //     .catch(err => console.log(err))

    setFavorites([...favorites, newData])
    console.log('add', favorites)
  }

  const deleteFromFavorites = () => {
    const newArray = favorites.forEach((element, index) => {
       if(element.id === newData.id){
         favorites.slice(index - 1, index)
       }
    })
    console.log('delete', favorites)
  }

  const handleFavoritesClick = () => {
    let foundData = false;
    favorites.forEach(element => {
      if(element.id === newData.id){
        foundData = true;
        console.log(foundData)
      }
    })
    if(foundData) {
      deleteFromFavorites()
    } else {
      addToFavorites()
    }
  }

  return (
    <div className='image-page'>
      <img src={newData.url} />
      <h2>Title: {newData.title}</h2>
      <p>Artist: {newData.artist}</p>
      <p>Color: {newData.color}</p>
      <p>Type: {newData.type}</p>
      <button onClick={() => addToCart(locationId)}> add to cart</button>
      <button onClick={() => handleFavoritesClick()}>FAVORITE</button>
    </div>
  )
}

export default ImagePage;