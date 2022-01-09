import './FavoritesGrid.scss';
import Card from '../Card/Card'


const FavoritesGrid = ({ favorites, handleFavoritesClick}) => {

  const cards = favorites.map((element) => {
      return <Card
        id={element.id}
        key={element.id}
        url={element.url}
        title={element.title}
        color={element.color}
        artist={element.artist}
        type={element.type}
        favorited={element.favorited}
        handleFavoritesClick={handleFavoritesClick}
      />
    })

  return (
    <section className="grid-container">
      {cards}
    </section>
  )
}

export default FavoritesGrid;