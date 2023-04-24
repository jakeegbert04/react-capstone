import { useState, useEffect } from "react"

import ShowItem from "../items/ShowItem"
import Reviews from "../items/Reviews"

export default function Show(props) {
  const [singleShow, setSingleShow] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller
    const id = props.match.params.id

    fetch(`https://api.tvmaze.com/shows/${id}`, {
      signal
    })
    .then((res) => res.json())
    .then((data) => {
      setSingleShow(data)
      setLoading(false)
      // console.log(data)
    })
    .catch((err) => {
      console.error("Fetch ShowsError: ", err)
    })
  }, [])
  
  return (
    <div className="info-wrapper">
     {/* <p>{singleShow.name}</p> */}
     {loading ? <div>...loading</div> : <ShowItem singleShow={singleShow} /> }
     {loading ? <div>...loading</div> : <Reviews /> }
    </div>
  )
}