import './Grid.scss';
import Card from '../Card/Card';
import ReactLoading from 'react-loading';


const Grid = ({ data, handleFavoritesClick }) => {

  const loadingAnimation =
    <ReactLoading
      className="loading-animation"
      type={"cylon"}
      height={"300px"}
      width={"300px"}
      color={"#ffffff"}
    />

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
      {!data.length ? loadingAnimation : cards}
    </section>
  )
}

export default Grid;