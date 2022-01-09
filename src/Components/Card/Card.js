import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ id, url, title, color, artist, type }) => {

  return (
    <Link to={`images/:${id}`}>
      <article className="card" key={id} >
        <img src={url} alt={title} id={id}/>
      </article>
    </Link>
  )
}

export default Card;