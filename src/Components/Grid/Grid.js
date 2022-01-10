import './Grid.scss';
import Card from '../Card/Card';


const Grid = ({ data, handleFavoritesClick}) => {

  const cards = data.map((element) => {
      return <Card
        id={element.id}
        key={element.id}
        url={element.url}
        title={element.title}
        color={element.color}
        artist={element.artist}
        type={element.type}
        favorited={element.favorited}
        quantity={element.quantity}
        price={element.price}
        handleFavoritesClick={handleFavoritesClick}
      />
    })

  return (
    <section className="grid">
      {cards}
    </section>
  )
}

export default Grid;