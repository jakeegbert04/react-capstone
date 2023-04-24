import { useEffect, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GalleryItem from "../items/GalleryItem"

export default function Gallery() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  // const [search, setSearch] = useState('')
  const [filtereditems, setFiltereditems] = useState([])
  // const [names, setNames] = useState([])
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
      console.log(data)
    })
    .catch((err) => {
      setLoading(false)
      console.error("Fetch ShowsError: ", err)
    })
  }, [])

  function searchShows(searchValue) {
    // setSearch(searchValue)
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
      <div className="landing-title">
      <input
       type="search"
       placeholder="Search..."
       onChange={(e) => searchShows(e.target.value)}
      />
        <FontAwesomeIcon icon="clapperboard" />
        <h1>Streamly</h1>
      </div>
      <div className="shows-grid">
        {loading ? <div>...Loading</div> : renderShows()}
      </div>
    </div>
  )
}