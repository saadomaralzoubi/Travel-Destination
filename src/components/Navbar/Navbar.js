import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <Link id="nav" to="/">
        Home
      </Link>
    </nav>
  );
}
