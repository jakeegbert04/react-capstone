import { Link } from "react-router-dom"

export default function RenderGallery(props) {
  return (
    <div className="show-container">
      <div className="title">{props.show.name}</div>
      <div className="image-wrapper">
        <Link to={`/gallery/${props.show.id}`} show={props.show}>
          <img src={props.show.image.medium} alt="show" />
        </Link>
      </div>
    </div>
  )
}