import { useEffect, useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import GalleryItems from "../items/GalleryItems"

export default function Gallery() {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, SetSearch] = useState('')
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
      setLoading(false)
      console.log(data)
    })
    .catch((err) => {
      console.error("Fetch ShowsError: ", err)
    })
  }, [])
  console.log(shows)
  // const showFilter = shows.filter(
  //   show => show.name.match("person of Interest")
  // )
  // console.log(`filter: ${showFilter}`)

  function searchShows(searchValue) {
    SetSearch(searchValue)
    if (search !== '') {
      const filteredShows = shows.filter((item) => {
        return Object.values(item).join('').toLocaleLowerCase().includes(search.toLowerCase())
      })
      setFiltereditems(filteredShows)
    } else {
      setFiltereditems(shows)
    }
  }

  function renderShows() {
    if (search === '') {
      return shows.map((show) => {
        return <GalleryItems key={show.id} show={show} />
      })
    } else {
        return filtereditems.map((filteredShow) => {
          return <GalleryItems key={filteredShow.id} show={filteredShow} />
        })
    }
  }
  return (
    <div className="gallery-container">
      <div className="landing-title">
      <input
       type="search"
       placeholder="Search..."
       onChange={(e) => searchShows(e.target.value)}
      ></input>
        <FontAwesomeIcon icon="clapperboard" />
        <h1>Streamly</h1>
      </div>
      <div className="shows-grid">
        {loading ? <div>...Loading</div> : renderShows()}
      </div>
    </div>
  )
}