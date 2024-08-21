// import { useState } from "react"; 
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FilmListPage from "./components/FilmListPage";
import CharacterListPage from "./components/CharacterListPage";
// import FilmDetailsPage from "./components/FilmDetailsPage";
import NewFilmPage from "./components/NewFilmPage";
import NewCharacterPage from "./components/NewCharacterPage";
// import FilmSearch from "./components/FilmSearch";
import './App.css'

function App() {

    // const [ film, setFilms] = useState();

    return (
        <>
            <h1>Star Wars</h1>
            <NavBar />
            <Routes>
                <Route path="/" element={<nav>Welcome to Star Wars Home Page!</nav>} />
                <Route path="films" element={<FilmListPage />} />
                {/* <Route path="/films/:filmsId" element={<FilmDetailsPage />} /> */}
                <Route path="/films/new" element={<NewFilmPage />} />
                <Route path="/characters" element={<CharacterListPage />} />
                {/* <Route path="/characters/:charactersId" element={<CharacterDetailPage />} /> */}
                <Route path="/characters/new" element={<NewCharacterPage />} />
            </Routes>
        </>
    )
}

export default App;
