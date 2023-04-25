import { NavLink } from "react-router-dom";

import initIcons from "../icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  initIcons()
  return (
    <div className="navbar navigation">
      <div className="navbar-left">
        <FontAwesomeIcon icon="clapperboard" />
      <NavLink exact to="/"><p>Streamly</p></NavLink>
      </div>
      <NavLink exact to="/">Landing</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </div>
  )
}