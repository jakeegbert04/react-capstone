import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowItem(props) {
  console.log(props.singleShow)
  const show = props.singleShow
  const summary = show.summary.replace("<p>", "").replace("</p>","")
  // const showSummary = summary.replace

  const star = <FontAwesomeIcon icon="star" />
  return (
    <div className="show-container">
      <div className="title-image-container">
        <h1>{show.name}</h1>
      </div>
      <div className="image-wrapper">
        <img src={show.image.medium} alt="Single Show" />
      </div>
      <div className="info-container">
        <h1 className="rating">{show.rating.average}{star} Out of 10 {star}</h1>
        <p className="summary">{summary}</p>
        <p>{`Language is in ${show.language}`}</p>
      </div>
    </div>
  )
}