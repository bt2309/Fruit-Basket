// import { useState } from "react"; 
import { Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar";
import FilmListPage from "./components/FilmListPage";
import FilmDetailsPage from "./components/FilmDetailsPage";
import NewFilmPage from "./components/NewFilmPage";
// import FilmSearch from "./components/FilmSearch";
import './App.css'

function App() {


    
    return (
        <>
            <h1>Star Wars</h1>
            <NavBar />
            <Routes>
                <Route path="/" element={<nav>Home Page</nav>} />
                <Route path="/films" element={<FilmListPage />} />
                <Route path="/films/details" element={<FilmDetailsPage />} />
                <Route path="/films/new" element={<NewFilmPage />} />
                {/* <Route path="/characters" element={<CharacterListPage />} />
                <Route path="/characters/details" element={<CharacterDetailPage />} />
                <Route path="/characters/new" element={<NewCharacterPage />} /> */}
            </Routes>
        </>
    )
}

export default App;
