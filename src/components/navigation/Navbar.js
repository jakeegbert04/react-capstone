import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <div className="navbar navigation">
      <NavLink exact to="/">Landing</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}