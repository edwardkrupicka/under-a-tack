import './Image.scss';

const Image = ({ id, url, title, color, artist, type }) => {

  return (
    <article className="image" key={id}>
      <img src={url} alt={title} />
    </article>
  )
}

export default Image;