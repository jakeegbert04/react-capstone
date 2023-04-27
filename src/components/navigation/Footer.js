import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer navigation">
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}