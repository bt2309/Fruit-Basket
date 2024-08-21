import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FilmCard from "./FilmCard";
import FilmSearch from "./FilmSearch";
import { createFilm } from "../services/airtable";

export default function FilmListPage({ filmList }) {

    const [ films, setFilms ] = useState([]);

    const getFilm = async () => {
      const url = `https://swapi.dev/api/films/?format=json`;
      const option = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
  
      try {
        const res = await fetch(url, option);
        const data = await res.json();
        if (res.ok) {
          console.log(data.results);
          setFilms(data.results);
        }
      } catch (error) {
        console.log("an error occurred in swapi films " + error);
      }
    };
  
    const loadFilms = async () => {
      const temp = [];
      for (const newFilm of filmList) {
        const data = await createFilm(newFilm);
        temp.push(data);
      }
    }

    useEffect(() => {
      getFilm();
      loadFilms();
    }, []);

    return (
        <>    
        <h2>Films</h2> 
        <FilmSearch setFilms={setFilms} />
        <Link to="/films/new">
          <button>Add Film</button>
        </Link>
        <section>
          <ul>
            {films.map((film, index) => (
              <li key = {index}>
                <FilmCard key={film.results} film={film} />
              </li>
            ))}
          </ul>  
        </section>         
        </>
    );
}