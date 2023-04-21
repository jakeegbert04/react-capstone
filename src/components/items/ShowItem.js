import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowItem(props) {
  console.log(props.singleShow)
  const show = props.singleShow
  const website = show.officialSite
  const summary = show.summary.replace("<p>", "").replace("</p>","").replace("<b>","").replace("</b>", "")
  

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
        <p>{`Premiered: ${show.premiered}`}</p>
        <p>Ended: {(show.ended === null) ? "Still Running" : `${show.ended}`}</p>
        <p>{`Run Time: ${show.runtime}`}</p>
        <p>Website: {(website === null) ? "No website" : <a href={website}>{website}</a>} </p>
      </div>
    </div>
  )
}