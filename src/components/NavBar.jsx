import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/films">Films</NavLink>
            </li>
            <li>
                <NavLink to="/films/new">New Film</NavLink>
            </li>
            <li>
                <NavLink to="/characters">Characters</NavLink>
            </li>
            <li>
                <NavLink to="/characters/new">New Character</NavLink>
            </li>
        </ul>
    );
}