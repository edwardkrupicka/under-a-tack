import './Grid.scss';
import Image from '../Image/Image'


const Grid = ({ data }) => {
  const images = data.map((image) => {
    return <Image
      id={image.id}
      key={image.id}
      url={image.url}
      title={image.title}
      color={image.color}
      artist={image.artist}
      type={image.type}
    />
  })

  return (
    <section className="grid-container">
      {images}
    </section>
  )
}

export default Grid;