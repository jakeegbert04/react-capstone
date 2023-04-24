import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function StarRating() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button 
            key={index}
            className={index <= ((rating && hover) || hover) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className={star}><FontAwesomeIcon icon="star" /></span>
          </button>
        )
      })}
    </div>
  )
  function Rating() {

  }
}
// console.log(rating)