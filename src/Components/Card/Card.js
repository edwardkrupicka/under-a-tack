import './Card.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Card = ({ id, url, title, color, artist, type, favorited, quantity, price, handleFavoritesClick }) => {
  const [newData, setNewData] = useState({ id, url, title, color, artist, type, favorited });

  const handleClick = () => {
    handleFavoritesClick(newData)
    newData.favorited = !newData.favorited
    console.log(newData.favorited)
  }

  return (
    <article className="card" key={id} >
      <Link to={`/images/:${id}`}>
          <img className='image-card' src={url} alt={title} id={id}/>
      </Link>
          <button className={newData.favorited === true ? 'favOn' : 'favOff'} onClick={() => handleClick() }>FAVORITE</button>
    </article>
  )
}

export default Card;