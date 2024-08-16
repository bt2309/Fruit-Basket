import { useEffect, useState } from "react";
import FilmCard from "./FilmCard";
import { getFilms } from "/src/services/filmService";

export default function FilmListPage() {
    // if (!films || films.length === 0) {
    //     return <p>No films</p>;
    // }

    const [ films, setFilms ] = useState();

    useEffect(() => {
        const loadFilms = async () => {
            const data = await getFilms();
            setFilms(data);
        };
    
        loadFilms();
    }, []);

    return (
        <>
            <h2>Films List</h2>
            {/* <p>{films.results}</p> */}
            {/* <FilmSearch setFilms={setFilms} /> */}
            {/* <FilmListPage films={films.results} /> */}
            {films.map((film) => (
                <FilmCard key={film.url} film={film} />
            ))}
        </>
    );
}