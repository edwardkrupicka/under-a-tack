import './Grid.scss';
import Card from '../Card/Card'


const Grid = ({ data }) => {
  const cards = data.map((element) => {
    return <Card
      id={element.id}
      key={element.id}
      url={element.url}
      title={element.title}
      color={element.color}
      artist={element.artist}
      type={element.type}
      quantity={element.quantity}
      price={element.price}
    />
  })

  return (
    <section className="grid-container">
      {cards}
    </section>
  )
}

export default Grid;