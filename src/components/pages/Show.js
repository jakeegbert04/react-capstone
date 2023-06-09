import { useState, useEffect } from "react"

import ShowItem from "../items/ShowItem"
import Reviews from "../items/Reviews"
import Loading from "../items/Loading"

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
    })
    .catch((err) => {
      console.error("Fetch ShowsError: ", err)
    })
  }, [])
  
  return (
    <div className="show-container">
     {loading ? <Loading /> : <ShowItem singleShow={singleShow} /> }
     {loading ? "" : <Reviews /> }
    </div>
  )
}