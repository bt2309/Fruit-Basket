import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import CharacterSearch from "./CharacterSearch";

export default function CharacterListPage() {

    const [ characters, setCharacters ] = useState([]);

    const getCharacter = async () => {
      const url = `https://swapi.dev/api/people/?format=json`;
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
          setCharacters(data.results);
        }
      } catch (error) {
        console.log("an error occurred in swapi characters " + error);
      }
    };
  
    useEffect(() => {
      getCharacter();
    }, []);


    return (
        <>    
        <h2>Characters</h2> 
        <CharacterSearch setFilms={setCharacters} />
        <Link to="/characters/new">
          <button>Add Character</button>
        </Link>
        <section>
          <ul>
            {characters.map((character, index) => (
              <li key = {index}>
                <CharacterCard key={character.results} character={character} />
              </li>
            ))}
          </ul>  
        </section>           
        </>
    );
}