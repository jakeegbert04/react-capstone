import { Link } from "react-router-dom"

export default function RenderShow(props) {
  // console.log(props.show.image.medium)
  // console.log(props.show)
  return (
    <div className="show-container">
      <div className="image-wrapper">
        <Link to={`/gallery/${props.show.id}`} />
        <img src={props.show.image.medium} alt="show" />
      </div>
      <div className="title">{props.show.name}</div>
    </div>
  )
}