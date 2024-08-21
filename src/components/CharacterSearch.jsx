import { useState } from "react";
import { searchCharacters } from "../services/swService";

export default function CharacterSearch({ setCharacters }) {
  const [search, setSearch] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await searchCharacters(search);
    console.log(data);
    setCharacters(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label>
          Find:{" "}
          <input
            type="search"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <button>Search</button>
      </fieldset>
    </form>
  );
}
