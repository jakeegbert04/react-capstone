import { useEffect, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import RenderShow from "../shows/RenderShow"

export default function Gallery() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller
    fetch("https://api.tvmaze.com/show", {
      signal
    })
    .then((res) => res.json())
    .then((data) => {
      setShows(data)
      setLoading(false)
    })
    .catch((err) => {
      console.error("Fetch ShowsError: ", err)
    })
  }, [])

  function renderShows() {
    return shows.map((show) => {
      // console.log(show.image.medium)
      return <RenderShow key={show.id} show={show} />
    })
  }
  return (
    <div className="gallery-container">
      <div className="landing-title">
        <FontAwesomeIcon icon="clapperboard" />
        <h1>Streamly</h1>
      </div>
      <div className="shows-grid">
        {loading ? <div>...Loading</div> : renderShows()}
      </div>
    </div>
  )
}