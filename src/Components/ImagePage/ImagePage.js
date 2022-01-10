import './ImagePage.scss';
import '../Card/Card'
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ImagePage = ({ handleFavoritesClick }) => {
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


  const addToCart = async () => {
    await fetch('http://localhost:3001/api/v1/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
        .then(res => res.json())
        .catch(err => console.log(err))
  }

  const handleClick = (newData) => {
    handleFavoritesClick(newData)
    setNewData(newData => ({ ...newData, favorited: !newData.favorited }));
  }


  return (
    <div className='image-page'>
      <div className='image-container'>
        <img className='image-page-img' src={newData.url} />
      </div>
      <article className='info-wrapper'>
        <div className='description-container'>
          <h2 className='title' >{newData.title}</h2>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p className='artist' >Artist: {newData.artist}</p>
          <p className='type' >Type: {newData.type}</p>
        </div>
        <div className='button-wrapper'>
          <button className="cartButton" onClick={() => addToCart(locationId)}> add to cart</button>
          <button className={newData.favorited ? 'favButton active' : 'favButton'} onClick={() => handleClick(newData)}>FAVORITE</button>
        </div>
      </article>
    </div>
  )

}

export default ImagePage;