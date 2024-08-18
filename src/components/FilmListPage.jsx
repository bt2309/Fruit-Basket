import { useEffect, useState } from "react";
// import FilmCard from "./FilmCard";
// import { getFilms } from "/src/services/filmService";


export default function FilmListPage() {
    // if (!films || films.length === 0) {
    //     return <p>No films</p>;
    // }

    const [ films, setFilms ] = useState([]);

    console.log("test");

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
  
    useEffect(() => {
      getFilm();
    }, []);

    return (
        <>     
        {films.map((event, index) => (
            <div key = {index}>
            <p scope = "row" key = {index}>{event.title}</p>
            </div>
        ))}            
        </>
    );
}