import { useEffect, useState } from "react"; 
import FilmListPage from "./components/FilmListPage";
import FilmSearch from "./components/FilmSearch";
import { getFilms } from "./services/films";
import NavBar from "./components/NavBar";
import './App.css'

function App() {
    const [ films, setFilms ] = useState([]);

    useEffect(() => {
        const loadFilms = async () => {
            const data = await getFilms();
            setFilms(data);
        };

        loadFilms();
    }, []);

    return (
        <>         
            <h1>Star Wars</h1>
            <NavBar />
            <FilmSearch setFilms={setFilms} />
            <FilmListPage films={films.results} />
            <nav>
                <h2>Films List</h2>
                <h2>Characters</h2>
            </nav>
        </>
    )
}

export default App;