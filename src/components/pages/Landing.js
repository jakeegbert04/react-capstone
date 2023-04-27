import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import initIcons from "../icons";

export default function Landing() {
  initIcons()

  return (
    <div className="landing-title">
      <FontAwesomeIcon icon="clapperboard" />
      <h1>Streamly</h1>
    </div>
  )
}