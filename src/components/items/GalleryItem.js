import { Link } from "react-router-dom"

export default function GalleryItem(props) {
  const shows = props.show
  return (
    <div className="show-container">
      <div className="title">{shows.name}</div>
      <div className="image-wrapper">
        <Link to={`/gallery/${shows.id}`} show={shows}>
          <img src={shows.image.medium} alt="show" />
        </Link>
      </div>
    </div>
  )
}