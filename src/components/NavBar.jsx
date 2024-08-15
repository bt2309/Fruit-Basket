import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <nav id="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/films">Films</NavLink>
        </nav>
    );
}