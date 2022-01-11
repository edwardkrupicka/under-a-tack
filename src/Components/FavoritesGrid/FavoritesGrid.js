import './FavoritesGrid.scss';
import FavoritesCard from '../FavoritesCard/FavoritesCard';

const FavoritesGrid = ({ favorites, handleFavoritesClick}) => {

  const cards = favorites.map((element) => {
      return <FavoritesCard
        key={element.id}
        element={element}
        handleFavoritesClick={handleFavoritesClick}
      />
    })

  return (
    <section className="fav-grid-container">
      {cards}
    </section>
  )
}

export default FavoritesGrid;