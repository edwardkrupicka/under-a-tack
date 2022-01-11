import './FavoritesCard.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import heart from '../../svg/heart.svg';
import heartFill from '../../svg/heartFill.svg';

const FavoritesCard = ({ element, handleFavoritesClick }) => {
  const [newData, setNewData] = useState( element );

  const handleClick = () => {
    handleFavoritesClick(newData)
    newData.favorited = !newData.favorited
    console.log(newData.favorited)
  }

  return (
    <article className="fav-card" key={element.id} >
        <Link to={`/images/:${element.id}`}>
            <img className='fav-image-card' src={element.url} alt={element.title} id={element.id}/>
        </Link>
          <img src={newData.favorited ? heartFill : heart} className={newData.favorited === true ? 'fav-img active' : 'fav-img'} onClick={() => handleClick() } />
    </article>
  )
}

export default FavoritesCard;