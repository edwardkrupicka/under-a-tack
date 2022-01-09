import './ImagePage.scss';
import '../Card/Card'
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ImagePage = () => {
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



  return (
    <div className='image-page'>
      <img className='image-page-img' src={newData.url} />
      <article className='image-container'>
        <h2 className='image-title' >Title: {newData.title}</h2>
        <p className='image-description' >Artist: {newData.artist}</p>
        <p className='image-description' >Color: {newData.color}</p>
        <p className='image-description' >Type: {newData.type}</p>
        <button className="cartButton" onClick={() => addToCart(locationId)}> add to cart</button>
      </article>
    </div>


  )

}

export default ImagePage;