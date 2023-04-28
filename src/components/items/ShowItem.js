import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ShowItem(props) {
  const show = props.singleShow
  const website = show.officialSite
  const summary = show.summary.replace(/<[/?][A-Z]+>|<[A-Z]+>/gmi, "")
   

  const star = <FontAwesomeIcon icon="star" />
  return (
    <div className="show-item-container">
      <div className="show-information-container">
        <div className="left-column-wrapper">
          <h1>{show.name}</h1>
          <img src={show.image.medium} alt="Single Show" />
          <h1 className="rating">{show.rating.average}{star} Out of 10 {star}</h1>
        </div>
        
        <div className="right-column-wrapper">
          <p className="summary">{summary}</p>
          <p>{`Language is in ${show.language}`}</p>
          <p>{`Premiered: ${show.premiered}`}</p>
          <p>Ended: {(show.ended === null) ? "Still Running" : `${show.ended}`}</p>
          <p>{`Run Time: ${show.runtime}`}</p>
          <p>Website: {(website === null) ? "No website" : <a rel="noreferrer" target="_blank" href={website}>{website}</a>}</p>
        </div>
      </div>
    </div>
  )
}