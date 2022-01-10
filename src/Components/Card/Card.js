import './Card.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import heart from '../../svg/heart.svg';
import heartFill from '../../svg/heartFill.svg';

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
          <img src={newData.favorited ? heartFill : heart} className={newData.favorited === true ? 'fav-img active' : 'fav-img'} onClick={() => handleClick() } />
    </article>
  )
}

export default Card;