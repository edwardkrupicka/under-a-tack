import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ id, url, title, color, artist, type }) => {

  return (
    <article className="card" key={id}>
      <img src={url} alt={title} />
    </article>
  )
}

export default Card;