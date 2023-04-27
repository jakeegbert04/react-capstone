import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GalleryItem from "../items/GalleryItem"
import Loading from "../items/Loading";

export default function Gallery() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [filtereditems, setFiltereditems] = useState([])

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller

    fetch("https://api.tvmaze.com/show", {
      signal
    })
    .then((res) => res.json())
    .then((data) => {
      setShows(data)
      setFiltereditems(data)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      console.error("Fetch ShowsError: ", err)
    })
  }, [])

  function searchShows(searchValue) {
      const filteredShows = shows.filter((item) => {
        return item.genres.join(" ").toLowerCase().includes(searchValue.toLowerCase()) || item.name.toLowerCase().includes(searchValue.toLowerCase())
      })
      
      setFiltereditems(filteredShows)
  }

  function renderShows() {
      return filtereditems.map((show) => {
        return <GalleryItem key={show.id} show={show} />
      })
  }

  return (
    <div className="gallery-container">
      <div className="gallery-title-container">
        <div className="landing-title">
          <FontAwesomeIcon icon="clapperboard" />
          <h1>Streamly</h1>
        </div>
        <input
        type="search"
        placeholder="Search for Genre or Title"
        onChange={(e) => searchShows(e.target.value)}
        />
      </div>
      {/* <div className="loading-animation"></div> */}
        <div className="shows-grid">
          {loading ? <Loading /> : renderShows()}
        </div>
    </div>
  )
}